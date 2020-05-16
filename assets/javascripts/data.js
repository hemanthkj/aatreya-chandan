var settings = {
    'cache': false,
    // 'dataType': "*",
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/travel_history.json",
    "method": "GET",
    // "headers": {
    //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    //     "Access-Control-Allow-Origin":"*"
    // }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
