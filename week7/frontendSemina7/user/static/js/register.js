// 유저 추가
function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const introduction = document.getElementById('introduction').value;
  if(!name && !email && !introduction) {
    alert('정보를 모두 입력해주세요.');
    return;
  }
  const newUser = {
    name: name,
    email: email,
    introduction: introduction
  };

  //작성할 부분





  /*
    fetch API 사용해서 데이터 전송
    url은 '/register/'
    HTTP method는 POST
    header를 작성해야함
    요청 본문(body)에 포함할 데이터를 JSON 형식으로 변환. 자바스크립트 객체를 변환할 때는 JSON.stringify 함수 사용
    요청을 보내고 난 후 () => window.location.assign("/main") 사용해서 페이지 이동
    error가 있다면 console.error()를 사용하여 에러 메시지 띄워주기
 */
}

/*
  addEventListener를 사용하여 버튼 클릭을 감지하고 addUser 함수 실행하기.
  register.html에서 버튼 id 확인 가능
*/