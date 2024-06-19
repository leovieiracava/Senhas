const numeroSenha = document.querySelector(`.parametro-senha_texto`);
let tamanhoSenha = 12;
numeroSenha,textContent = tamanhoSenha;
const letrasMaiusculas = `ÀBCDEGHIJKLMNPQRSTUVXYWZ`;
const letrasMinusculas = `abcdefghilmnopqrstuvxywz`;
const numeros = `0123456789`;
const simbolos = `!@*?`;
const botoes = document.querySelectorAll(`.parametro-senha_botao`);
const campoSenha = document.querySelector(`#campo-senha`);
const checkbox = (`.ckeckbox`);
const forcaSenha = document.querySelector(`.forca`); 

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho() {
    if ( tamanhoSenha > a) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if(tamanhoSenha < 20){
    // tamanhoSenha = tamanhoSenha+1;
    tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
