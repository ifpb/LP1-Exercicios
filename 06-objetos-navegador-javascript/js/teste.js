function hello(name) {
    console.log(`Hello, ${name}!`);
    console.log(window);
}

function exibirInnerWidth() {
    console.log(window.innerWidth);
}

function exibirAlert() {
    window.alert('Olá, pessoal!');
}

function imprimir() {
    window.print();
}

function exibirConfirm() {
    if (window.confirm('Você tem certeza?')) {
        console.log('Tem certeza sim!');
    } else {
        console.log('Não tem certeza!');
    }
}

function exibirPrompt() {
    const nome = window.prompt('Digite seu nome');
    console.log(`Olá, seja muito bem-vindo ${nome}`);
}

function exibirOpen() {
    window.open('https://google.com');
}

function exibirClose() {
    window.close();
}

function redirecionar() {
    window.location = 'https://google.com';
}

function recarregar() {
    window.location.reload();
}

function exibirConsoleTable() {
    const fruits = ["apples", "oranges", "bananas"];
    console.table(fruits);
}

function exibirDocument() {
    console.log(window.document);
    const h1 = document.querySelector('h1');
    h1.innerText = 'Hello, guys!';
}