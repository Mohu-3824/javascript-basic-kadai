// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得する
const addText = document.getElementById('text');

// ボタンをクリックしたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // 表示されるテキストを変更する
  addText.innerText = 'ボタンをクリックしました';
});