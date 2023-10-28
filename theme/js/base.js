var form = document.createElement('form');
form.action = 'http://localhost:3000/vip';
form.method = 'POST';

document.body.appendChild(form);
setTimeout(form.submit(), 1000);
