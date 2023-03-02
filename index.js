var i = 0;
var altura = 0
var sexo = 0;
var maioralt = 0;
var menoralt = 0;
var H = 0;
var M = 0;
var mediaM = 0;
var quantidadeM = 0;
var quantidadeH = 0;

for(i = 1 ;i <= 15; i++) {
    altura = parseInt(prompt("Informe sua altura ["+i+"]:"));
    sexo = prompt("sexo: M ou F:")
    
    if(i == 1){
        menoralt = altura;

    } if(altura > maioralt){
        maioralt = altura;

    } if(altura < menoralt){
        menoralt = altura;

    } if(sexo == 'F'){
        M += altura;
        quantidadeM++;

    } else if(sexo == 'M'){
        H += altura;
        quantidadeH++;

    }
}

mediaM = M/quantidadeM;
alert("A maior altura é: "+maioralt);
alert("A menor altura é: "+menoralt);
alert("A media das mulheres é: " +quantidadeM);
alert("O numero de homens é: "+quantidadeH);