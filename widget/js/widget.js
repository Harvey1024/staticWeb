
showSlides();

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
function slideImg(countOfImg=2, slideSign="next") {
    var slide = document.getElementsByClassName("myslides");
    var dot=document.getElementsByClassName("dot");
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
                dot[nextSlideNum].classList.remove("active");
                slide[i].classList.remove("hide");
                dot[i].classList.add("active");
                slideFinished = 1;
                break;
            }
        }
        if (slideFinished)
            break;
    }
}
function goToImg(indexNum){
    var slide = document.getElementsByClassName("myslides");
    var dot = document.getElementsByClassName("dot");
    for(var i=0; i<slide.length;i++){
        if(slide[i].classList.length==2){
            slide[i].classList.remove("hide");
            dot[i].classList.add("active");
        }
        if(i!=indexNum){
            slide[i].classList.add("hide");   
            dot[i].classList.remove("active");     
        }
    }
}
var testno=0;
function showSlides(){
    goToImg(testno);
    if(testno==0)
        testno=1;
    else
        testno=0;
    setTimeout(showSlides, 2000);
}

function Login(sign){
    var login=document.getElementsByClassName("loginform");
    if(sign)
        login[0].classList.remove("hide");
    else
        login[0].classList.add("hide");
}
