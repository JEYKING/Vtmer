/**
 * Created by Jetking on 2017/4/5.
 */
function login(){
    var s = document.getElementById("mainpage1");
    s.style.display = "block";
    s.style.opacity =0.5;

    var q = document.getElementById("mainpage2");
    q.style.display = "block";
}

function backlogin(){
    var s = document.getElementById("mainpage1");
    s.style.display = "block";
    s.style.opacity = 1.0;

    var q = document.getElementById("mainpage2");
    q.style.display = "none";
}