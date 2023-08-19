const postList = document.getElementById("list-of-titles");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const item = document.createElement("li");
            item.textContent = post.title;
            postList.appendChild(item);
        });
    })
    .catch(error => {
        console.error("Something wrong", error);
    });
