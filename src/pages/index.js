import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <div className="container">
          <div className={clsx(styles.header_row, 'row')}>
            <div
              className={clsx(
                styles.header_row_col__4_col__offset_1,
                'col col--4 col--offset-1'
              )}
            >
              <h1 className={styles.header_row_col__4_col__offset_1__title}>
                {'新新时代农民工'}
              </h1>
              <p className={styles.header_row_col__4_col__offset_1__subtitle}>
                {'揾食日志'}
              </p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--primary button--lg',
                    styles.header_row_col__4_col__offset_1__getStarted
                  )}
                  to={useBaseUrl('/blog')}
                >
                  {'Blog'}
                </Link>
              </div>
            </div>
            <div
              className={clsx(
                styles.header_row_col__6_col__offset_1,
                'col col--6 col--offset-1'
              )}
            >
              <img
                className={styles.header_row_col__6_col__offset_1__img}
                src="img/main.jpeg"
                alt="Programmer"
              />
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
