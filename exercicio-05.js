const numeros = [10,22,45,1,25,78];
function menorNumero(menor){
    let menorNum = 9999999999;
    menor.forEach(num =>{
        if(num < menorNum){
            menorNum = num;
        }
    });
    console.log('o menor número é: '+ menorNum);
}
menorNumero(numeros);
