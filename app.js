
$(document).ready(function () {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1dvdCEoP6BQ1RllyFgeFYc_y5NZgbDmDGdWYJDA1YPsE/od6/public/values?" +
        "alt=json", function (data) {
        data = data['feed']['entry']
        console.log(data);
        showGoods(data);
    })
    function showGoods(data) {
        var out = '';
        for(var i = 0; i<data.length; i++){
            out+=`<div class="box" data-show="">`;
            out+=`  <div class="img-box">`;
            out+=`    <img src="${data[i]['gsx$image']['$t']}" alt="">`;
            out+=` </div>`;
            out+=` <div class="info-box">`;
            out+=`    <p class="name">${data[i]['gsx$name']['$t']}</p>`;
            out+=`     <p class="sort">${data[i]['gsx$description']['$t']}</p>`;
            out+=`     <p class="price">${data[i]['gsx$coast']['$t']}</p>`;
            out+=`     <p class="lost">${data[i]['gsx$kg']['$t']}</p>`;
            out+=` </div>`;
            out+=` </div>`;
        }
        $('.staf-box').html(out);
    }

})