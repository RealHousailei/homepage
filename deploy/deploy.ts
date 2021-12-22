import COS from 'cos-nodejs-sdk-v5';
import walker from 'folder-walker';

type FileInfo = {
  Key: string;
  Path: string;
};

const txClient = new COS({
  SecretId: process.env.TX_SECRET_ID,
  SecretKey: process.env.TX_SECRET_KEY,
});

const getFileInfo = async (path: string): Promise<FileInfo[]> => {
  return new Promise((resolve) => {
    const files: FileInfo[] = [];
    const stream = walker([path]);
    stream.on('data', (data) => {
      if (data.type === 'file') {
        files.push({
          Key: data.relname,
          Path: data.filepath,
        });
      }
    });
    stream.on('end', () => {
      resolve(files);
    });
  });
};

const getFileName = (name: string) => {
  return name.slice(name.indexOf('/') + 1);
};

const uploadTx = async (files: FileInfo[]): Promise<void> => {
  const uploadInfo: COS.UploadFileItemParams[] = files.map((file) => {
    return {
      Bucket: process.env.TX_BUCKET_NAME,
      Region: process.env.TX_BUCKET_REGION,
      Key: file.Key,
      FilePath: file.Path,
    };
  });
  console.log('Start upload to tx...');
  return new Promise((resolve) => {
    txClient
      .uploadFiles({
        files: uploadInfo,
        SliceSize: 1024 * 1024 * 10,
        onFileFinish: function (err, data) {
          if (err) {
            console.log(err);
          }
          console.log('Upload: ' + getFileName(data.Location));
        },
      })
      .then(() => {
        console.log('Upload to tx succeed');
        resolve();
      });
  });
};

const main = async () => {
  const files = await getFileInfo('build');
  await uploadTx(files);
  console.log('Deploy succeed');
};

main();
