document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

// 사용자 정보를 가져오는 함수
function fetchUsers() {
// 작성할 부분!



/*
    fetch API 사용해서 응답 받기
    url로 '/main/' 사용.
    HTTP 메서드는 GET 사용
    응답을 JSON 형식으로 파싱.
    JSON 형식의 데이터를 띄워주기(displayUsers() 함수 사용!)
    error가 있다면 console.error()를 사용하여 에러 메시지 띄워주기
*/
}

// 사용자 정보를 띄워주는 함수
function displayUsers(users) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';  // 리스트 초기화

    users.forEach(user => {
        // 리스트 태그 생성
        const listItem = document.createElement('li');

        // 리스트 안에 유저 정보를 집어넣음
    /*
        listItem.innerHTML = ????;

        ? 부분 완성하기! 참고2 확인
    */

        usersList.appendChild(listItem); // 요소 추가
    });
}

// 등록화면으로 돌아가는 함수
function directRegister() {
    window.location.assign("/");
}