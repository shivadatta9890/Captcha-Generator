function generateCaptcha()
{
    let chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha ='';
    let captchaLength = 6;
    for(let i=0;i<captchaLength;i++){
        let randomIndex = Math.floor(Math.random()*chars.length);
        captcha +=chars.charAt(randomIndex);
    }
    document.getElementById("captcha").innerText=captcha;
    document.getElementById("userinput").value="";
    document.getElementById("result").innerText="";
}
generateCaptcha();
const validateCaptcha = ()=>{
    let userInput = document.getElementById('userinput').value;
    let captcha = document.getElementById('captcha').innerText;
    let result = document.getElementById('result');

    if(userInput === captcha){
        result.innerHTML = "Great! Correct answer...👍 ";
        result.style.color="green";
    }
    else{
        result.innerText = "Sorry! Wrong answer...👎"
        result.style.color="red";
    }


}