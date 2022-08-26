function Red() {
    document.getElementById("redDiv").style.display = "block";
    document.getElementById("yellowDiv").style.display = "none";
    document.getElementById("greenDiv").style.display = "none";
    document.getElementById('redMarquee').start();
}
function Yellow() {
    document.getElementById("redDiv").style.display = "none";
    document.getElementById("yellowDiv").style.display = "block";
    document.getElementById("greenDiv").style.display = "none";
    document.getElementById('yellowMarquee').start();
}
function Green() {
    document.getElementById("redDiv").style.display = "none";
    document.getElementById("yellowDiv").style.display = "none";
    document.getElementById("greenDiv").style.display = "block";
    document.getElementById('greenMarquee').start();
}