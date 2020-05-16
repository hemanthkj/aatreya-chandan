var settings = {
  "url": "https://2019ncov.asia/api/confirmed",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
  $("#api_data").innerText = JSON.stringify(response)
});
 
