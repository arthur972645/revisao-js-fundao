//ATIVIDADE 1 
// const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
// const multiplicarDados = (dados) => console.log(dados * 2)
// array.map(multiplicarDados)

//ATIVIDADE 2
// const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
// const maiorQue3Letras = palavras.filter((letras) => letras.length > 3)
// console.log(maiorQue3Letras)

//ATIVIDADE 3 - somar todos os dados do array 
const numeros = [1, 2, 3, 4, 5]
const valor = 0
const somaDados = numeros.reduce((total, atual) => {
    return valor, total  + atual
})
console.log(somaDados)