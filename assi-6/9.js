document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            contentDiv.innerHTML = `<p>Post Title: ${data.title}</p>
                                    <p>Post Body: ${data.body}</p>`;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
});
