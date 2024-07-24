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

for (i = 0; i < checkbox.length; i++) {
    checkdox[i].onclick = geraSenha
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos; 
    }
    let senha = '';
    for (let i = 0; i <tamanhoSenha; i++) {
        let numerosAleatorio = Math.random()* alfabeto.length
        numerosAleatorio = Math.floor(numerosAleatorio);
        senha = senha + alfabeto[numerosAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length); 

}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoAlfabeto * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.romove('fraca','media','forte');
    if(entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media');
    }else if (entropia <= 35 ) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntrepia = document.querySelector('.entropia');
    valorEntrepia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha";
    }

