const numeros = [10,20,30,40,50,60];
function calcularNumeros(soma){
    let resultado = 0;
    soma.forEach(res =>{
        resultado = resultado + res;
    });
    console.log('Os númeos somados são: '+ resultado);
}
calcularNumeros(numeros);