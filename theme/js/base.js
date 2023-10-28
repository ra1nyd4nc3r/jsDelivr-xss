var xhr = new XMLHttpRequest();
xhr.open('POST', '/vip');
xhr.setRequestHeader('Content-Type', 'application/json');

var payload = { 
  '1': 'value1'
};

xhr.send(JSON.stringify(payload));
