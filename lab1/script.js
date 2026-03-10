function drawWinner() {
    const input = document.getElementById('nameInput').value;
    
    // 將輸入內容按行拆分成陣列，並過濾掉空白行
    const names = input.split('\n').map(name => name.trim()).filter(name => name !== "");

    if (names.length === 0) {
        alert("請先輸入名單喔！");
        return;
    }

    // 隨機產生一個索引值
    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];

    // 顯示結果
    const resultDiv = document.getElementById('resultContainer');
    const winnerDisplay = document.getElementById('winnerName');

    winnerDisplay.innerText = winner;
    resultDiv.classList.remove('hidden'); // 移除隱藏標籤
}