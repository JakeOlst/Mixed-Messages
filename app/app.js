function loadData(file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Issues loading ${file}: ${response.statusText}`);
            }
            return response.json();
        });
}

function createMessage() {
    Promise.all([
        loadData('https://raw.githubusercontent.com/JakeOlst/Mixed-Messages/main/data/names.json'),
        loadData('https://raw.githubusercontent.com/JakeOlst/Mixed-Messages/main/data/emotions.json'),
        loadData('https://raw.githubusercontent.com/JakeOlst/Mixed-Messages/main/data/nouns.json')
    ])
    .then(([names, emotions, nouns]) => {
        let randomName = names.data[Math.floor(Math.random() * names.data.length)];
        let randomEmotion = emotions.data[Math.floor(Math.random() * emotions.data.length)];
        let randomNoun = nouns.data[Math.floor(Math.random() * nouns.data.length)];

        let fullMessage = `${randomName} is ${randomEmotion} about the ${randomNoun}`;

        document.getElementById('message').textContent = fullMessage;
    })
}

document.addEventListener('DOMContentLoaded', createMessage);
