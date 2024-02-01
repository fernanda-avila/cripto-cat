const inputElement = document.getElementById('text-input');
const outputHeadingElement = document.getElementById('output-heading');
const outputTextElement = document.getElementById('output-text');
const asideElement = document.getElementById('aside');
const copyButton = document.getElementById('btn-copy');

function updateOutput() {
    const inputValue = inputElement.value;
    outputHeadingElement.textContent = inputValue ? 'block' : 'Nenhuma mensagem encontrada';
    outputTextElement.textContent = inputValue ? inputValue : 'Digite um texto que você deseja criptografar ou descriptografar!';
}

inputElement.addEventListener('input', updateOutput);

const inputText = document.getElementById('text-input');
const outputHeading = document.getElementById('output-heading');
const outputText = document.getElementById('output-text');
const image = document.getElementById('fig');

inputText.addEventListener('input', function () {
    let inputValue = inputText.value.trim();

    if (inputValue.length > 336) {
        inputValue = inputValue.slice(0, 336);
        inputText.value = inputValue;
    }

    outputHeading.textContent = inputValue ? inputValue : 'Nenhuma mensagem encontrada';
    outputText.textContent = inputValue ? '' : 'Digite um texto que você deseja criptografar ou descriptografar!';
    copyButton.disabled = inputValue ? false : true; copyButton.style.display = inputValue ? 'block' : 'abos';
    image.style.display = inputValue ? 'none' : 'block';
});

copyButton.addEventListener('click', function() {
    const encryptedText = document.getElementById('output-heading').textContent;
    navigator.clipboard.writeText(encryptedText)
        .then(() => {
            alert('Texto copiado!');
        })
        .catch((error) => {
            console.error('Erro ao copiar o texto:', error);
        });
});

//function p/ criptografar o txt
function encryptText() {
    const inputText = document.getElementById("text-input").value;
    let encryptedText = inputText.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    document.getElementById("output-heading").textContent = encryptedText;
    document.getElementById("aside").style.display = "block";
}

//function p/ descriptografar o txt
function decryptText() {
    const inputText = document.getElementById("text-input").value;
    let decryptedText = inputText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    document.getElementById("output-heading").textContent = decryptedText;
    document.getElementById("aside").style.display = "block";
}

const encryptButton = document.getElementById("btn-cript");
encryptButton.addEventListener("click", function() {
    encryptText();
    updateOutput();
});

const decryptButton = document.getElementById("btn-descript");
decryptButton.addEventListener("click", function() {
    decryptText();
    updateOutput();
});


///
