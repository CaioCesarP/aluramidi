function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (var i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    const audio = `#som_${instrumento}`;

    //Clicar em qualquer uma das teclas da tabela de button vai ativar o audio, pegando pelo ID
    tecla.onclick = function () {
        tocaSom(audio);
    };

    //css 'ativa' acionado pelo botão 'Enter' ou 'Space'
    tecla.onkeydown = function(evento) {
        if(evento.code == "Enter"|| evento.code == "Space") {
            tecla.classList.add('input[type=submit]');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('input[type=submit] || input[type=button]');
    }
}