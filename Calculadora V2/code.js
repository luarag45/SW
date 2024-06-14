var total = 0;
var operacao = "";
var valorAtual = 0;
var calculo = "";

function acao(n){
    const visor = document.getElementById("visor");
    if (valor=="CE"){
        visor.value = "0";
        total = 0;
        valorAtual = 0;
        return 0;
    }
    

    const visor = document.getElementById('visor');
    visor.value = visor.value + n;
}
