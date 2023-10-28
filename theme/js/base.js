fetch("http://124.70.33.170:3000/vip", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': document.cookie,
  },
})
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => {
  });
