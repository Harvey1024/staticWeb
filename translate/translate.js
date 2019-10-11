function showBar(){
    var w1=document.getElementById("aside-bar");
    w1.setAttribute("class","hideBar");
    elem=document.getElementById("bar");
    elem.addEventListener("click", stopevent, false);
    elem=document.getElementById("aside-bar");
    elem.addEventListener("click", stopevent, false);

}
function stopevent(ev){
    
    var w1=document.getElementById("aside-bar");
    w1.removeAttribute("class","hideBar");
    ev.stopPropagation();
}
function hideBar(){
    var w1=document.getElementById("aside-bar");
    w1.setAttribute("class","hideBar");
}
function c2showm(){
    var w1=document.getElementById("x2");
    w1.removeAttribute("class","x2hide");
}
function c2hidem(){
    var w1=document.getElementById("aside-bar");
    w1.setAttribute("class","hideBar");
}
function ShowLine(){
    var w1=document.getElementById("item2")
    w1.classList.add("header-item-click")
    var w1=document.getElementById("item1")
    w1.classList.remove("header-item-click")
}