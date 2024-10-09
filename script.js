
// 이메일 입력 필드와 오류 메시지를 가져옵니다.
let emailInput = document.querySelector('#email');
let emailError = document.querySelector('.invalid');
let passwordInput = document.querySelector('#password');
let passwordError = document.querySelector('.invalid-pw');
let emailValidity = false;
let passwordValidity = false;
const loginButton = document.querySelector('.login-button')

console.log(passwordInput);


function validateEmail2() {

    
    }


// 이메일 유효성 검사 함수
function validateEmail() {
    let emailValue = emailInput.value; // 입력된 이메일 값 가져오기
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 검증용 정규식

    if (emailValue === "") {
        emailError.innerHTML = "이메일을 입력해주세요.";
        emailError.style.display = "block"; // 오류 메시지를 보이게 함
        emailInput.style.borderColor = "#F74747"; // 이메일 input의 테두리 색상을 변경
        emailValidity = false;
    } 
    // 이메일 형식이 틀렸을 때
    else if (!emailRegex.test(emailValue)) {
        emailError.innerHTML = "잘못된 이메일 형식입니다.";
        emailError.style.display = "block"; // 오류 메시지를 보이게 함
        emailInput.style.borderColor = "#F74747"; // 이메일 input의 테두리 색상을 변경
        emailValidity = false;
    } 
    // 올바른 이메일 형식일 때
    else {
        emailError.innerHTML = ""; // 오류 메시지 지우기
        emailError.style.display = "none"; // 오류 메시지 숨기기
        emailInput.style.borderColor = ""; // 테두리 색상을 원래대로
        emailValidity = true;
    }

    bothcorrect();
}

function validatePassword() {
    let passwordValue = passwordInput.value; // 입력된 패스워드 값 가져오기


    // 비밀번호가 비어 있을 때
    if (passwordValue === "") {
        passwordError.innerHTML = "비밀번호를 입력해주세요.";
        passwordError.style.display = "block"; // 오류 메시지를 보이게 함
        passwordInput.style.borderColor = "#F74747"; // 패스워드 input의 테두리 색상을 변경
        passwordValidity = false;
    } 
    // 비밀번호가 틀렸을 때
    else if (passwordValue.length < 8) {
        passwordError.innerHTML = "비밀번호를 8자 이상 입력해주세요.";
        passwordError.style.display = "block"; // 오류 메시지를 보이게 함
        passwordInput.style.borderColor = "#F74747"; // 이메일 input의 테두리 색상을 변경
        passwordValidity = false;
    } 
    // 올바른 비밀번호 형식일 때
    else {
        passwordError.innerHTML = ""; // 오류 메시지 지우기
        passwordError.style.display = "none"; // 오류 메시지 숨기기
        passwordInput.style.borderColor = ""; // 테두리 색상을 원래대로
        passwordValidity = true;
    }

    bothcorrect();
}





// input에서 포커스가 벗어났을 때 유효성 검사 함수 호출
emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
loginButton.addEventListener('click', function () {
    location.href='./items.html'
})

function bothcorrect() {
    if(emailValidity && passwordValidity === true) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}




// loginButton.disabled = !(emailValidity && passwordValidity)

// button.addEventListener('keyup', activeEvent)

