//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); // Remove espaços em branco

    if (nomeAmigo) {
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = nomeAmigo; // Define o texto do item como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o item à lista

        amigoInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome.'); // Alerta se o campo estiver vazio
    }
}

// Função para sortear amigo
function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    const amigosArray = Array.from(listaAmigos).map(li => li.textContent);
    
    if (amigosArray.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    // Lógica para sortear um amigo (exemplo simples)
    const amigoSorteado = amigosArray[Math.floor(Math.random() * amigosArray.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Exibe o amigo sorteado
}