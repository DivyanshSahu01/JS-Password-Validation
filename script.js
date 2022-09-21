const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
const digits = document.getElementById('digits');
const length = document.getElementById('length');
const toggleBtn = document.getElementById("toggleBtn");
const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener('click',function(){
    let randomPassword="";
    const randomString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+,./?':";
    const passwordLength = randomString.length;
    for(let i=0;i<16;i++)
    {
        randomPassword += randomString[Math.floor(Math.random()* passwordLength)];
    }
    password.value = randomPassword;
    validate();
});

toggleBtn.addEventListener('click',function(){
    if(password.getAttribute("type") === "password")
    {
        password.setAttribute("type","text");
        toggleBtn.className="fa-sharp fa-solid fa-eye-slash";
    }
    else
    {
        password.setAttribute("type","password");
        toggleBtn.className = "fa-sharp fa-solid fa-eye";
    }
});

const lowerChars = new RegExp("[a-z]");
const upperChars = new RegExp("[A-Z]");
const digitsCount = new RegExp("[0-9]");

function validate(){
        if(lowerChars.test(password.value))
        {
            lower.classList.add("valid");
        }
        else
        {
            lower.classList.remove("valid");
        }
        if(upperChars.test(password.value))
        {
            upper.classList.add("valid");
        }
        else
        {
            upper.classList.remove("valid");
        }
        if(digitsCount.test(password.value))
        {
            digits.classList.add("valid");
        }
        else
        {
            digits.classList.remove("valid");
        }
        if(password.value.length >= 8)
        {
            length.classList.add("valid");
        }
        else
        {
            length.classList.remove("valid");
        }
}

password.addEventListener('input',validate);