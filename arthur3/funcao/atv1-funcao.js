// Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

function valor (x){
    if( valor > 0){
        console.log(1)
    }else{
        console.log(0)
    }
}
console.log(valor(5))

//resolucao do professor

const verifica = (x) => x > 0 ? 1 : 0
console.log(verifica(5))
