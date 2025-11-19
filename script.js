// Atualização automática do ano

// A linha abaixo captura a tag <span> e armazena o conteudo na variável ano 
let ano = document.getElementById('copyrightYear')

// A linha abaixo obtem o ano do servidor e armazena na variável anoAtual
let anoAtual = new Date().getFullYear()

// A linha abaixo insere o conteúdo da variável anoAtual em ano (variável relacionada a tag <span> )
ano.textContent = anoAtual


/** Recolher menu na rolagem **/
// Capturar o evento de rolagem diretamente no JS

window.addEventListener('scroll', function() {
    // A linha abaixo captura a tag <input type="checkbox"> identificada como 'check' e armazena na variável rolagem.
    let menuCheck = document.getElementById('check')
    // se a caixa input check estiver marcada, desmarcar
    menuCheck.checked = false 
})