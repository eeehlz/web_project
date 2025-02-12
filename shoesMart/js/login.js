// 로그인 기능

document.forms.loginFrm.addEventListener('submit', function (e) {
  e.preventDefault();
  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;

  let members = JSON.parse(localStorage.getItem('members'));

  for (let i = 0; i < members.length; i++) {
    if (members[i].id == id && members[i].pw == pw) {
      alert("환영합니다.");
      return;
    }

  }
  alert("다시 확인해주세요.");
})


document.addEventListener('DOMContentLoaded', function () {
  let login = document.querySelector('#loginBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
  });
});

