function login() {
    var s = document.getElementById("mainpage");
    s.style.display = "block";
    s.style.opacity =0.45;

    var q = document.getElementById("loginpage");
    q.style.display = "block";

}
function close(){
    var s = document.getElementById("mainpage");
    s.style.display = "block";
    s.style.opacity = 1.0;

    var q = document.getElementById("loginpage");
    q.style.display = "none";

    var q = document.getElementById("typepage");
    q.style.display = "none";
}
function loading() {
    var s = document.getElementById("mainpage");
    s.style.display = "block";
    s.style.opacity =0.2;

    var q = document.getElementById("loginpage");
    q.style.display = "block";
    q.style.opacity =0.3;

    var g = document.getElementById("loadingpage");
    g.style.display = "block";

    setTimeout("codefans()",4000);

}
function codefans(){
    var box=document.getElementById("loadingpage");
    box.style.display = "none";
}
function type() {
    var s = document.getElementById("mainpage");
    s.style.display = "none";

    var q = document.getElementById("typepage");
    q.style.display = "block";
}
function typea1() {
    var s = document.getElementById("text1");
    s.style.color = "rgb(234,154,67)"
}
function typea2() {
    var s = document.getElementById("text2");
    s.style.color = "rgb(234,154,67)"
}
function typea3() {
    var s = document.getElementById("text3");
    s.style.color = "rgb(234,154,67)"
}
function typea4() {
    var s = document.getElementById("text4");
    s.style.color = "rgb(234,154,67)"
}
//var i = 1;
//function autoChangeImage(){                //自动改变图片
//        
//		setTimeout("changeImage(i++);", 1500);
////        setTimeout("back(i); ", 1000);
//		if(i>2)i-=3;
//}
//function changeImage(idNum){
//		autoChangeImage();
//        switch(idNum){
//            case 0:
//                document.getElementById("imageShow").style.backgroundImage = "url(src="../img/banner1.png")";//改变首页图片
//                break;
//            case 1:
//                document.getElementById("imageShow").style.backgroundImage = "url(src="../img/banner2.png")";
//                break;
//            case 2:
//                document.getElementById("imageShow").style.backgroundImage = "url(src="../img/banner3.png")";
//                break;
//        }
//
//}