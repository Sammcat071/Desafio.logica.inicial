//Calculadora de partidas Rankeadas

function calcularRanke(vitorias, derrotas) {
 
    let ranke = vitorias - derrotas;
    return ranke;
 }
 
 function calcularNivel(ranke) {
    let resultadoDoNivel;
 
    if (ranke <= 10) {
    
       resultadoDoNivel = "Ferro";
       
    } else if (ranke <= 20) {
    
       resultadoDoNivel = "Bronze";
       
    } else if (ranke <= 50) {
    
       resultadoDoNivel = "Prata";
       
    } else if (ranke <= 80) {
    
       resultadoDoNivel = "Ouro";
       
    } else if (ranke <= 90) {
    
       resultadoDoNivel = "Diamante";
       
    } else if (ranke <= 100) {
    
       resultadoDoNivel = "Lendario";
       
    } else {
    
       resultadoDoNivel = "Imortal";
    }
 
    return resultadoDoNivel;
 }
 
 let vitoriasDoHeroi = calcularRanke(78, 20);
 
 let nivelDoHeroi = calcularNivel(vitoriasDoHeroi);
 
 console.log("O heroi tem o saldo de " + vitoriasDoHeroi + " de vitórias" , ("Está no nível " + nivelDoHeroi));
 