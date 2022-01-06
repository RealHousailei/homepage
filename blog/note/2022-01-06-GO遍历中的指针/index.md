---
slug: 2022-01-06-01
title: GO遍历中的指针
authors: cansaye
tags: [go, grammar]
---
<!-- markdownlint-disable -->

使用for range遍历时，value的指针的地址不会随着遍历而改变，而对应的值在改变

<!--truncate-->

### 错误用法

```go
for _, v := range myMap {
  go func(value){
    ...
  }(&v)
}
```

### 正确用法

```go
for _, v := range myMap {
  go func(value){
    ...
  }(v)
}
```

### 测试程序

```go
type Student struct {
		Name string
		Id   int64
}

func main(){
	students := []Student{{"a", 1}, {"b", 2}, {"c", 3}}
	wg := sync.WaitGroup{}

	for _, s := range students {
		wg.Add(1)
		go func(s *Student) {
			time.Sleep(time.Second)
			fmt.Println(s.Name, s.Id)
			wg.Done()
		}(&s)
	}
	wg.Wait()

	for _, s := range students {
		wg.Add(1)
		go func(s Student) {
			time.Sleep(time.Second)
			fmt.Println(s.Name, s.Id)
			wg.Done()
		}(s)
	}
	wg.Wait()
}
```

输出内容

```
c 3
c 3
c 3
a 1
b 2
c 3
```

参考链接 https://studygolang.com/articles/16878