
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
        document.getElementById("errEmailRegister").innerHTML = "Cannot be empty";
    }

    if (!reg_email.test(email)) {//如果格式不正确
        document.getElementById("errEmailRegister").innerHTML = "Email format error.";
        return;
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            if(keyinfo.email == email){
                document.getElementById("errEmailRegister").innerHTML = "This email is already registered."
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
        document.getElementById("errPwdRegister").innerHTML = "Cannot be empty";
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
        document.getElementById("errPwdRegister").innerHTML = "Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers."
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
        document.getElementById("errPhoneRegister").innerHTML = "Cannot be empty";
        return;
    }
    if (firstName == "" || firstName == null) {
        document.getElementById("errFirstNameRegister").innerHTML = "Cannot be empty";
        return;
    }
    if (lastName == "" || lastName == null) {
        document.getElementById("errLastNameRegister").innerHTML = "Cannot be empty";
        return;
    }

    if (!reg_phone.test(phone)) {
        document.getElementById("errPhoneRegister").innerHTML = "Phone format error";
        return;
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            if(keyinfo.phone == phone){
                document.getElementById("errPhoneRegister").innerHTML = "This phone is already registered."
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
            window.location.href = "index.html";
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