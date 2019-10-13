function showBar() {
    var w1 = document.getElementById("aside-bar");
    w1.setAttribute("class", "hideBar");
    elem = document.getElementById("bar");
    elem.addEventListener("click", stopevent, false);
    elem = document.getElementById("aside-bar");
    elem.addEventListener("click", stopevent, false);

}
function stopevent(ev) {

    var w1 = document.getElementById("aside-bar");
    w1.removeAttribute("class", "hideBar");
    ev.stopPropagation();
}
function hideBar() {
    var w1 = document.getElementById("aside-bar");
    w1.setAttribute("class", "hideBar");
}
function c2showm() {
    var w1 = document.getElementById("x2");
    w1.removeAttribute("class", "x2hide");
}
function c2hidem() {
    var w1 = document.getElementById("aside-bar");
    w1.setAttribute("class", "hideBar");
}
function ShowLine(n, sig) {
    if (sig == "left")
        var w1 = document.getElementsByClassName("leftChooseSig");
    else
        var w1 = document.getElementsByClassName("rightChooseSig");
    w1[n].classList.add("header-item-click");
    for (var i = 0; i <= 3; i++) {
        if (sig == "left")
            var w1 = document.getElementsByClassName("leftChooseSig");
        else
            var w1 = document.getElementsByClassName("rightChooseSig");
        if (i == n)
            continue;
        w1[i].classList.remove("header-item-click");
    }
}
function chooseType(n) {
    types = document.getElementsByClassName("chooseType");
    types[n].classList.add("titleClicked");
    if (n <= 1) {
        var k = 1;
        var initali = 0;
    }
    else {
        var k = 3;
        var initali = 2;
    }
    for (var i = 0 + initali; i <= k; i++) {
        types = document.getElementsByClassName("chooseType");
        if (i == n)
            continue;
        types[i].classList.remove("titleClicked");
    }

}