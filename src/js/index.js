/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/
//passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//passo 2
botoesCarrossel.forEach((botao , index) =>{
    botao.addEventListener('click', ()=>{
        
        //passo 3
        desativarBotaoSelecionado();

        //passo 4
        botao.classList.add('selecionado')
        
        //passo 5 esconder imagem ativa
        esconderImagemAtiva();

        //passo 6
        imagens[index].classList.add('ativa')
        

    }) 
    
    
      
}) 
   


function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

