var xhr = new XMLHttpRequest();
var url = 'http://localhost:3000/vip';
var data = 'param1=value1&param2=value2'; // 请求参数

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    console.log(response);
  }
};
xhr.send(data);
