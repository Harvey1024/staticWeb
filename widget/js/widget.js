function c1showm(n) {
    var w1 = document.getElementsByClassName("co");
    w1[n].children[0].style.display = "block";
}
function c1hidem(n) {
    var w1 = document.getElementsByClassName("co");
    w1[n].children[0].style.display = "none";
}
function showDropDown() {
    document.getElementsByClassName("cDropDownContent")[0].classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches(".cDropBtn")) {
        dropdown = document.getElementsByClassName("cDropDownContent")[0].classList.remove('show')
    }
}