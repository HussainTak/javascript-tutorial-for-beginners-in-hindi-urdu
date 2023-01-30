var id =setTimeout(anim,3000);
function anim() {
    document.querySelector("#text").style.width="500px"
}
function stopanim() {
    clearTimeout(id);
}