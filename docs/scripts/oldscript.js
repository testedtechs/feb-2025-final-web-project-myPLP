
function likePost(button) {
    let countSpan = button.querySelector('span');
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
}
