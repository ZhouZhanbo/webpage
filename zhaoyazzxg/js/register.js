
//div对象，用于控制其 可见性
var divEmailRegister = document.getElementById("divEmailRegister");
var divPwdRegister = document.getElementById("divPwdRegister");
var divInfoRegister = document.getElementById("divInfoRegister");

var user = {};//创建一个对象

function NextToPwdRegister() {
    var email = document.getElementById("emailRegister").value;
    var reg_email = /^\S+@\S+\.\S+$/;
    //判断为空
    if (email == "" || email == null) {
        document.getElementById("errEmailRegister").innerHTML = "不能为空";
    }

    if (!reg_email.test(email)) {//如果格式不正确
        document.getElementById("errEmailRegister").innerHTML = "邮箱格式错误";
        return;
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            if(keyinfo.email == email){
                document.getElementById("errEmailRegister").innerHTML = "此邮箱已经被注册"
                return;
            }
        }
        user.email = email;
        divEmailRegister.style.display = "none";
        divPwdRegister.style.display = "block";
        document.getElementById("accountRegistered").innerHTML = email;
        return;
    }
}

function NextToInfo() {
    var pwd = document.getElementById("pwdRegister").value;
    var reg_pwd_num = /[0-9]/;
    var reg_pwd_alp = /[A-Za-z]/;
    //判断为空
    if (pwd == "" || pwd == null) {
        document.getElementById("errPwdRegister").innerHTML = "不能为空";
        return;
    }

    if (pwd.length >= 8 && reg_pwd_num.test(pwd) && reg_pwd_alp.test(pwd)) {
        user.pwd = pwd;
        divPwdRegister.style.display = "none";
        divInfoRegister.style.display = "block";
        document.getElementById("accountRegistered2").innerHTML = user.email;
        return;
    }
    else {
        document.getElementById("errPwdRegister").innerHTML = "密码必须至少包含8个字符，并且至少包含以下两个字符：大写字母、小写字母和数字"
        return;
    }
}

function Register() {
    var phone = document.getElementById("phoneRegister").value;
    var firstName = document.getElementById("firstNameRegister").value;
    var lastName = document.getElementById("lastNameRegister").value;
    var reg_phone = /^[1]\d{10}$/;
    //判断为空
    if (phone == "" || phone == null) {
        document.getElementById("errPhoneRegister").innerHTML = "不能为空";
        return;
    }
    if (firstName == "" || firstName == null) {
        document.getElementById("errFirstNameRegister").innerHTML = "不能为空";
        return;
    }
    if (lastName == "" || lastName == null) {
        document.getElementById("errLastNameRegister").innerHTML = "不能为空";
        return;
    }

    if (!reg_phone.test(phone)) {
        document.getElementById("errPhoneRegister").innerHTML = "电话格式错误";
        return;
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            if(keyinfo.phone == phone){
                document.getElementById("errPhoneRegister").innerHTML = "此电话已经被注册"
                return;
            }
        }
        user.phone = phone;
        user.firstName = firstName;
        user.lastName = lastName;
        let dataLength = localStorage.length;
        let info = JSON.stringify(user);
        localStorage.setItem("key" + dataLength, info);
        alert("^_^注册成功");
        setTimeout(() => {
            window.location.href = "index_CN.html";
        }, 2000);
    }
}

function Backforward1(){
    divEmailRegister.style.display = "block";
    divPwdRegister.style.display = "none";
    return;
}

function Backforward2(){
    divPwdRegister.style.display = "block";
    divInfoRegister.style.display = "none";
    return;
}