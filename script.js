$(document).ready(function () {
    
    $("#btn").on("click",function(){
        const randomnum = Math.ceil(Math.random()*88);
        $("#name").html("<i>Loading...</i>");
        $("#gender").html("<i>Loading...</i>");
        $("#img").html("<i>Loading...</i>");
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomnum}.json`,function (data) {
            $("#name").text(data["name"]);
            $("#gender").text(data["gender"]);
            $("#img").html(`<img src = ${data["image"]} width = 100% height = 100%/>`);
        })
    })
    
})