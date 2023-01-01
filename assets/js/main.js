$(document).ready(function(){
    const request = new XMLHttpRequest();
    const data = {
        "content": "<@609072028540207104>",
        "embeds": [
          {
            "title": "WEBSITE VISIT!!",
            "description": "WOOOH!! WAKE UP LOSER!! SOMEONE VISITED YOUR WEBSITE!!!!! YAYYYYY\n:party:",
            "color": null,
            "author": {
              "name": "some javascript code",
              "url": "https://mushytoast.github.io"
            },
            "footer": {
              "text": "its not that big of a deal lmao"
            }
          }
        ],
        "attachments": []
      }
    request.open("POST", "https://discord.com/api/webhooks/1058998422113357936/ox0VOZWDfYAvq52Bdihu8EQTGLrs4zuejSvAyZqsM-iy2JZIi7cGypTQQ40k05ME9MKw")
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
})