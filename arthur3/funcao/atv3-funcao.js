const dobroF  = (x) => 2 * x
const triploF = (x) => 3 * x

const resultado = function(param, fun1, fun2){
    const dobro = fun1(param)
    const triplo = fun2(param)
    console.log(`O numero ${param}, dobro: ${dobro}, triplo: ${triplo}`)
}
resultado(2, dobroF, triploF)