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
    if (!event.target.matches(".cDropBtn") & !event.target.matches(".slideImg")) {
        dropdown = document.getElementsByClassName("cDropDownContent")[0].classList.remove('show');
    }
}
function slideImg(countOfImg, slideSign) {
    var slide = document.getElementsByClassName("myslides");
    var slideFinished = 0;
    for (var i = 0; i < countOfImg; i++) {
        var slideClassList = slide[i].classList
        for (var j = 0; j < slideClassList.length; j++) {
            if (slideClassList[j] == "hide") {
                if (slideSign == "prev")
                    var nextSlideNum = i - 1;
                if (slideSign == "next")
                    var nextSlideNum = i + 1;
                if (nextSlideNum < 0)
                    nextSlideNum = countOfImg - 1;
                if (nextSlideNum == countOfImg)
                    nextSlideNum = 0;
                slide[nextSlideNum].classList.add("hide");
                slide[i].classList.remove("hide");
                slideFinished = 1;
                break;
            }
        }
        if (slideFinished)
            break;
    }
}

