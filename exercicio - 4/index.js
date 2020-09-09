document.querySelector(".button").addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".soma").innerHTML = `Soma : ${getSoma()}`
    document.querySelector(".produto").innerHTML = `Produto : ${getProduto()}`
})

const getValores = ()=>{
    let numeros = document.querySelector("#numeros").value
    numeros = numeros.split(' ')
    return numeros
}

const getSoma = () => {
    let valores = getValores()
    let soma = 0
    for(let i = 0; i <valores.length;i++ ){
        soma+=parseInt(valores[i])
    }
    return soma
}
const getProduto = () => {
    let valores = getValores()
    let produto = 1
    for(let i = 0; i <valores.length;i++ ){
        produto*=parseInt(valores[i])
    }
    return produto
}