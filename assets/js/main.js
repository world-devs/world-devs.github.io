$(document).ready(function(){
    const request = new XMLHttpRequest();
    const webhookurl1 =  "https://discord.com/api/webhooks/105899987";
    const webhookurl2 = "0758846475/PTBlar6okRVaDD4Zj";
    const webhookurl3 = "TbybQtu3n9qZ70DqtzLIufaMupv0Je9p1o5RcuymIXmssqU_U47";
    const wburl = webhookurl1 + webhookurl2 + webhookurl3;
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
    request.open("POST", wburl)
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
})