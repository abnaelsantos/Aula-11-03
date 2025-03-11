let notas = [5,7,5,9,9,8];
let soma = 0

function calcularMedia(notas){
   notas.forEach(nota => {
    soma += nota;
   });
    const media = soma / notas.length;
    //return media;

    if( media >= 7){
        return 'Aprovado'
    }
    else{
        return 'Reprovado'
    }
        
}
console.log(calcularMedia(notas));