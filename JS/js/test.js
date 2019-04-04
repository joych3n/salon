//1、创建请求对象
var xmlhttp = new XMLHttpRequest();

//2、规定请求的类型、URL 以及是否异步处理请求。
xmlhttp.open("GET", url, true);

//3、将请求发送到服务器。
xmlhttp.send();

//4、处理服务器的相应，当 readyState 等于 4 且状态为 200 时，表示响应已就绪。
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //你想做的事
  }
};
