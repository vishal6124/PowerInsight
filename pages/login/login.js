(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";

    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substring(0, 5+Math.random()*5);
        captchaValue = value;
    }

    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.trunc()*fonts.length);
            return `<span
            style ="
            transform: rotate(${rotate}deg);
            font-family: ${fonts[font]};
            "
            >${char}</span>`
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

    document.querySelector("#login-btn").addEventListener("click", function(){
        let inputCaptchaValue = document.querySelector("#captcha-form").value;
        if (inputCaptchaValue === captchaValue){
            swal("", "Loggin In Succesfull!", "success");
        }
        else{
            swal("Invalid Captcha");
        }
    })
})();

// document.addEventListener('DOMContentLoaded', function() {
//     (function(){
//         const fonts = ["cursive", "sans-serif", "serif", "monospace"];
//         let captchaValue = "";
    
//         function generateCaptcha(){
//             let value = btoa(Math.random()*1000000000);
//             value = value.substring(0, 5+Math.random()*5);
//             captchaValue = value;
//             console.log(value)
//         }
    
//         function setCaptcha(){
//             let html = captchaValue.split("").map((char)=>{
//                 const rotate = -20 + Math.trunc(Math.random() * 30);
//                 const font = Math.trunc(Math.trunc()*fonts.length);
//                 return `<span
//                 style ="
//                 transform: rotate(${rotate}deg);
//                 font-family: ${fonts[font]};
//                 "
//                 >${char}</span>`
//             }).join("");
//             document.querySelector(".login-form .captcha .preview").innerHTML = html;
//         }
//         function initCaptcha(){
//             document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function(){
//                 generateCaptcha();
//                 setCaptcha();
//             });
//             generateCaptcha();
//             setCaptcha();
//         }
//         initCaptcha();
    
//         document.querySelector(".login-form #login-btn").addEventListener("click", function(){
//             let inputCaptchaValue = document.querySelector(".login-form .captcha-form .captcha-input").value;
//             if (inputCaptchaValue === captchaValue){
//                 swal("", "Loggin In!", "success");
//             }
//             else{
//                 swal("Invalid Captcha");
//             }
//         })
//     })();
//   });
  