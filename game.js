const textElement = document.getElementById('text');
const avatarImage = document.getElementById('avatar');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame(){
    console.log('i am game!');
    state = {};
    showTextNode(1);
}

function selectOption(option){
    console.log('hello');
    const nextTextNodeId = option.nextText;
    if(nextTextNodeId <= 0){
        return startGame();
    }
    showTextNode(nextTextNodeId);
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    avatarImage.innerHTML = textNode.avatar;
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option){
    return true;
}

const textNodes = [
    {
        id: 1,
        text: 'this is a piece of text',
        avatar: '<img src=images/bust_male.png>',
        options: [
            {
                text: 'choose option 1',
                setState: {},
                nextText: 2
            },
            {
                text: 'choose option 2',
                setState: {},
                nextText: -1
            }
        ]
    },
    {
        id: 2,
        text: 'this is the text for node 2',
        avatar: '<img src=images/bust_male.png>',
        options: [
            {
                text: 'choose node 3',
                setState: {},
                nextText: 3
            },
            {
                text: 'choose node 4',
                setState: {},
                nextText: 4
            },
            {
                text: 'Go back to the beginning',
                setState: {},
                nextText: -1
            }
        ]
    },
    {
        id: 3,
        text: 'this is the text for node 3',
        avatar: '<img src=images/bust_male.png>',
        options: [
            {
                text: 'choose node 4',
                setState: {},
                nextText: 4
            },
            {
                text: 'choose node 2',
                setState: {},
                nextText: 2
            },
            {
                text: 'Go back to the beginning',
                setState: {},
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: 'this is the end of the game',
        avatar: '<img src=images/bust_female.png>',
        options: [
            {
                text: 'choose option 1',
                setState: {},
                nextText: -1
            },
            {
                text: 'choose option 2',
                setState: {},
                nextText: 1
            }
        ]
    }
]

startGame();

