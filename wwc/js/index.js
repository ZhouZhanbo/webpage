function changeversion1()//切换到国际版
{
    document.getElementById("title").innerHTML="Bing";
    document.getElementById('background_picture').style.backgroundImage="url('img/demo2.jpg')";
    document.getElementById("n").style.cursor="pointer";
    document.getElementById("i").style.cursor=undefined;
    document.getElementById("images").innerHTML="Images";
    document.getElementById("image").href='https://cn.bing.com/images/trending';
    document.getElementById("videos").innerHTML="Videos";
    document.getElementById("video").href='https://cn.bing.com/videos/search';
    document.getElementById("signin").innerHTML="Sign&nbspin";
    document.getElementById("signin").style.right="150%";
    document.getElementById("national").style.borderColor="transparent transparent #D6D6D6 transparent";
    document.getElementById("international").style.borderColor="transparent transparent white transparent";
    document.getElementById("information").innerHTML="Information";
    document.getElementById("international").style.zIndex="3";
    document.getElementById("111").innerHTML="Settings and quick links";
    document.getElementById("111").style.width="150px";
    document.getElementById("111").style.fontSize="12px";
    document.getElementById("111").style.marginLeft="-85px";
    document.getElementById("222").innerHTML="Search using voice";
    document.getElementById("222").style.width="110px";
    document.getElementById("222").style.fontSize="11px";
    document.getElementById("222").style.marginLeft="-25px";
    document.getElementById("333").innerHTML="Search the web";
    document.getElementById("333").style.width="110px";
    document.getElementById("333").style.fontSize="11px";
    document.getElementById("333").style.marginLeft="-25px";
    document.getElementById("takelessons").innerHTML="Takelessons";
    document.getElementById("dictionary").innerHTML="Dictionary";
    document.getElementById("map").innerHTML="Travel";
    document.getElementById("search").href='https://cn.bing.com/?FORM=BEHPTB&ensearch=1';
}
function changeversion2()//切换到国内版
{
    document.getElementById("title").innerHTML="必应";
    document.getElementById("background_picture").style.backgroundImage="url('img/Bing_Wallpaper.jpg')";
    document.getElementById("i").style.cursor="pointer";
    document.getElementById("n").style.cursor=undefined;
    document.getElementById("images").innerHTML="图片";
    document.getElementById("image").href='https://cn.bing.com/images/trending';
    document.getElementById("videos").innerHTML="视频";
    document.getElementById("video").href='https://cn.bing.com/videos/trending';
    document.getElementById("signin").innerHTML="登录";
    document.getElementById("signin").style.right="110%";
    document.getElementById("national").style.borderColor="transparent transparent white transparent";
    document.getElementById("international").style.borderColor="transparent transparent #D6D6D6 transparent";
    document.getElementById("information").innerHTML="信息";
    document.getElementById("international").style.zIndex="2";
    document.getElementById("111").innerHTML="设置和快速链接";
    document.getElementById("111").style.width="120px";
    document.getElementById("111").style.fontSize="14px";
    document.getElementById("111").style.marginLeft="-70px";
    document.getElementById("222").innerHTML="语音搜索";
    document.getElementById("222").style.width="60px";
    document.getElementById("222").style.fontSize="13px";
    document.getElementById("222").style.marginLeft="0px";
    document.getElementById("333").innerHTML="搜索网页";
    document.getElementById("333").style.width="60px";
    document.getElementById("333").style.fontSize="13px";
    document.getElementById("333").style.marginLeft="0px";
    document.getElementById("takelessons").innerHTML="学术";
    document.getElementById("dictionary").innerHTML="词典";
    document.getElementById("map").innerHTML="地图";
    document.getElementById("search").href='https://cn.bing.com/?FORM=BEHPTB';
}
function skipToLogin(){
    window.location.href = "login.html";
}