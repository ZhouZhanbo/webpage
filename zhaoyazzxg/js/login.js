var teldata = [] // 创建一个数组   用于存储本地所有已存储的手机号
var pwddata = [] // 创建一个数组   用于存储本地所有已存储的密码
var emadata = [] //创建一个数组   用于存储本地所有已存储的邮箱
var iddata = [] // 创建一个数组   用于存储本地所有已存储的id（用户唯一凭证）
//div对象，用于验证其可见性
var divAccountLogin = document.getElementById("divAccountLogin");
var divPwdLogin = document.getElementById("divPwdLogin");

var index;


// 从localStorage获取数据
for (let i = 0; i < localStorage.length; i++) {
    // 获取所有的key钥匙
    let key = localStorage.key(i)
    console.log(key);
    // 通过key拿到对应的数据进行判断
    let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
    let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
    console.log(keyinfo);
    // 向数组中添加数据   通过下标i的方式添加   这样手机号和密码是对应的  
    teldata[i] = keyinfo.phone;
    pwddata[i] = keyinfo.pwd;
    emadata[i] = keyinfo.email;
    iddata[i] = keyinfo.id;
}
console.log(emadata);
console.log(teldata);


function NextToPwdLogin() {
    var account = document.getElementById("accountLogin").value;

    var reg_alpha = /[a-zA-Z@]/;
    var reg_phone = /^[1]\d{10}$/;
    var reg_email = /^\S+@\S+\.\S+$/;
    //判断为空
    if(account == "" || account == null){
        document.getElementById("errAccountLogin").innerHTML = "不能为空";
        return;
    }
    if (!reg_alpha.test(account))//如果是纯数字（可能用电话作为账号登录）
    {
        if (account.length < 11 || !reg_phone.test(account)) {//判断格式
            document.getElementById("errAccountLogin").innerHTML = "电话格式错误";
            return;
        }
        
        else {//判断账号是否存在
            if (teldata.indexOf(account) < 0) {
                document.getElementById("errAccountLogin").innerHTML = "账号不存在";
                return;
            }
            else {
                divAccountLogin.style.display = "none";
                divPwdLogin.style.display = "block";
                document.getElementById("accountLogined").innerHTML = account;
                index = teldata.indexOf(account);
                return;
            }
        }
    }
    else {//含有非数字，则用邮箱登录
        if (!reg_email.test(account)) {//格式错误
            document.getElementById("errAccountLogin").innerHTML = "邮箱格式错误";
            return;
        }
        else {//格式正确
            if(emadata.indexOf(account) < 0){
                document.getElementById("errAccountLogin").innerHTML = "账号不存在";
                return;
            }
            divAccountLogin.style.display = "none";
            divPwdLogin.style.display = "block";
            document.getElementById("accountLogined").innerHTML = account;
            index = emadata.indexOf(account);
            return;
        }
    }
}

function SignIn(){
    var pwd = document.getElementById("pwdLogin").value;
    //判断为空
    if(pwd == "" || pwd == null){
        document.getElementById("errPwdLogin").innerHTML = "不能为空";
        return;
    }
    if (pwddata[index] != pwd){//密码错误
        document.getElementById("errPwdLogin").innerHTML = "密码错误";
        return; 
    }
    else {//登录成功
        alert("^_^登录成功！");
        setTimeout(() => {
            window.location.href = "index_CN.html";
        }, 2000);
        
    }
}

function Backforward(){
    divAccountLogin.style.display = "block";
    divPwdLogin.style.display = "none";
    return;
}