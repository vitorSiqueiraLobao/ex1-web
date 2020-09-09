document.querySelector(".submit").addEventListener("click",event=>{
    event.preventDefault()
    arrayAverage()
})

const arrayAverage = () => {
    let flag = true;
    let array = []
    while(flag){
        temp = prompt("Escreva um valor (Digite 0 quando estiver adicionado todos os valores desejados) : ");
        if(temp){
            if (temp === "0"){
                flag = false;
            } else {
                array.push(parseFloat(temp))
            }
        }
    }
    let sum = 0;
    for (let i=0;i<array.length;i++){
        sum = sum + array[i];
    }
    document.getElementById('result').innerHTML = "Média dos valores digitados: " + (sum / array.length).toFixed(2);
};