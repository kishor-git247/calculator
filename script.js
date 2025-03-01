let history = [];

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        updateHistory(result);
    } catch (error) {
        alert('Invalid Expression');
    }
}

function updateHistory(result) {
    history.unshift(result);
    if (history.length > 3) {
        history.pop();
    }
    displayHistory();
}

function displayHistory() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(entry => {
        let listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
