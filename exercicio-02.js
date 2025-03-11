const numeros = [12,2,3,6,8,5,4,8,9,1];

function numerosPares(numrs){
    
    let par = 0;
    let impar = 0;

    numrs.forEach(num =>{
        if(num %2 == 0){
            par ++;
            
        }
        else{
            impar ++;
            
        }
    });
    
    console.log('A quantidade de números pares são: '+ par);
    console.log('A quantidade de números impare são: '+ impar);
}
numerosPares(numeros);

