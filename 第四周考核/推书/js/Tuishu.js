function login() {
    var s = document.getElementById('mainpage');
    s.style.display = "block";
    s.style.opacity =0.45;

    var q = document.getElementById("loginpage");
    q.style.display = "block";

}//弹出登陆框





function loginid(){
	str = document.getElementsByName("logintext")[0].value;
	
	var s = document.getElementById("loginid");
		s.innerHTML=str;
}




function closepage(){
	var s = document.getElementById("mainpage");
    s.style.opacity =1;

    var q = document.getElementById("loginpage");
    q.style.display = "none";
}







//
function close(){
	var str1 = document.getElementsByName("logintext")[0].value;
	var str2 = document.getElementsByName("logintext")[1].value;
	if(str1===""&&str2===""){
		alert("您的账号或密码格式有误，请输入账号和密码");
		return;
	}else if(str1===""&&str2!=""){
		alert("您的账号或密码格式有误，请输入账号");
		return;
	}else if(str1!=""&&str2===""){
		alert("您的账号或密码格式有误，请输入账号");
		return;
	}
	
    var s = document.getElementById("mainpage");
    s.style.opacity =1;

    var q = document.getElementById("loginpage");
    q.style.display = "none";
	
	loading();

//    var q = document.getElementById("typepage");
//    q.style.display = "none";
//	
//	var q = document.getElementById("searchpage");
//    q.style.display = "none";
//	
//	var q = document.getElementById("bookmassagepage1");
//    q.style.display = "none";
}//通过登陆框上的 X 按钮关闭登陆框




function loading() {
//	if(document.getElementsByName("logintext")[1].value==""){
//		return;
//	}
	
    var g = document.getElementById("loadingpage");
    g.style.display = "block";
	g.style.opacity = 0.75;

    setTimeout("closeloading()",4000);
	setTimeout("loginid()",4000);

}//点击搜索时loading动画，在页面加载完成时关闭




function closeloading(){
	var g = document.getElementById("loadingpage");
	g.style.display = "none";
}





//
function type() {
    var s = document.getElementById("mainpage");
    s.style.display = "none";

    var q = document.getElementById("typepage");
    q.style.display = "block";
}//点击大类按钮时，弹入分类页面






function backtomainpage(){
var s = document.getElementById("mainpage");
    s.style.display ="block";

    var q = document.getElementById("typepage");
    q.style.display = "none";
	
	var q = document.getElementById("bookmassagepage1");
    q.style.display = "none";
	
	var q = document.getElementById("searchpage");
    q.style.display = "none";
	
	var t1 = document.getElementById("text1");
	var t2 = document.getElementById("text2");
	var t3 = document.getElementById("text3");
	var t4 = document.getElementById("text4");
	t1.style.color="rgb(5,5,5)";
	t2.style.color="rgb(5,5,5)";
	t3.style.color="rgb(5,5,5)";
	t4.style.color="rgb(5,5,5)";
}








function typea1() {
    var s = document.getElementById("text1");
    s.style.color = "rgb(234,154,67)"
}//点击大类1时，对应类1的分类按钮变色




function typea2() {
    var s = document.getElementById("text2");
    s.style.color = "rgb(234,154,67)"
}//点击大类2时，对应类2的分类按钮变色




function typea3() {
    var s = document.getElementById("text3");
    s.style.color = "rgb(234,154,67)"
}//点击大类3时，对应类3的分类按钮变色




function typea4() {
    var s = document.getElementById("text4");
    s.style.color = "rgb(234,154,67)"
}//点击大类4时，对应类4的分类按钮变色




function bookmassage(){
	var s = document.getElementById("bookmassagepage1");
    s.style.display = "block";
	setTimeout(zoomOut(),100)  
}//点击打开书本详情




function zoomOut(){
	var s = document.getElementById("bookmassagepage1");
	s.setAttribute("class", "animated zoomIn")
}




function zoomIn(){
	var s = document.getElementById("bookmassagepage1");
	s.setAttribute("class", "animated zoomIn")
}




function closebookmassage(){
	var s = document.getElementById("bookmassagepage1");
	s.style.display= "none";
	setTimeout(zoomIn(),100)
}//点击关闭书本详情



//
function displaytype(){
	var s = document.getElementById('searchtype');
	s.style.display= "block";
}//鼠标移入按钮时显示分类1，2，3.....的div



//
function nonetype(){
	var s = document.getElementById('searchtype');
	s.style.display= "none";
}//鼠标移开按钮时隐藏分类1，2，3.....的div




function opensearchpage(){
	var s = document.getElementById('searchpage');
	s.style.display= "block";
	
	var s = document.getElementById("mainpage");
    s.style.display = "none";
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