$('document').ready(function(){
    //detect when an element is being hovered over
    let debounce = false;
    $('.name').hover(function(){
        let altname = document.getElementsByClassName('psuedoname');
        if (altname[0].style.display === "none") {
            altname[0].style.display = "block";
        } else {
            altname[0].style.display = "none";
        }
    });
})