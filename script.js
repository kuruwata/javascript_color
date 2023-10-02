// JavaScript
// console.log(document.getElementById('myColor').value);

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

function changeColor() {
    // カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = 'コード：' + color.value + '(white)';
    } else if (color.value === '#000000') {
        text.textContent = 'コード：' + color.value + '(black)';
    } else if (color.value === '#ff0000') {
        text.textContent = 'コード：' + color.value + '(red)';
    } else if (color.value === '#0000ff') {
        text.textContent = 'コード：' + color.value + '(blue)';
    } else if (color.value === '#ffff00') {
        text.textContent = 'コード：' + color.value + '(yellow)';
    } else {
        text.textContent = 'コード：' + color.value;
    }
    // 背景色を変更
    document.body.style.backgroundColor = color.value;
}

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);