const addBtn = document.getElementById('btn');
const addText = document.getElementById('text');

addBtn.addEventListener('click', () => {
    setTimeout(() => {
        addText.innerText = 'ボタンをクリックしました';
    }, 2000);
});
