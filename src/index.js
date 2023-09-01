// variaveis declarando nome e pontos xp do heroi
let  heroi=" Mestre dos magos"
let pontosXp = 5.002
// utilizando uma estrutura switch - case para declarar o nivel 
let nivel = ""

switch ( true) {

case pontosXp <=1.000 :
nivel= "Ferro";
break 

case pontosXp <=2.000 :
nivel= "Bronze";
break 

case pontosXp <= 5.000:
nivel = "Prata";
break

case pontosXp <= 7.000:
nivel = "Ouro";
break

case pontosXp <= 8.000:
nivel ="Platina";
break

case pontosXp <= 9.000:
nivel ="Ascendente";
break

case pontosXp <= 10.000:
nivel =" Radiante";
break

default:
nivel= "Radiante";


}
// mensaguem de saida
  console.log(( "O heroi de nome " + heroi) , (" está no nivel " + pontosXp )   + nivel)