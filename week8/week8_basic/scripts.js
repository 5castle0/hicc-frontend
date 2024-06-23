document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    //to write

});

function showForm() {
    document.getElementById('post-form').style.display = 'block';
}

function hideForm() {
    // to write
}


//기존 게시물 목록을 서버에서 가져오는 함수
async function loadPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    fetch('http://localhost:8000/api/posts/', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(posts => {
        displayPosts(posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//게시물 목록을 렌더링하는 함수
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button class="delete-button" data-id="${post.id}">삭제</button>
        `;
        postList.appendChild(li);
    });

    postList.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => deletePost(button.getAttribute('data-id')));
    });
}

//게시물을 추가하는 함수
async function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    //to write

}



async function deletePost(id) {
    fetch(`/api/posts/${id}/`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        loadPosts();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}