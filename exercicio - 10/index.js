document.querySelector(".submit").addEventListener("click",event=>{
    event.preventDefault()
    getTallestPerson()
})

const compare = (a, b)=> {
    if (a.altura < b.altura) {
        return -1;
    }
    if (a.altura > b.altura) {
        return 1;
    }
    return 0;
}
const getTallestPerson = () => {
    let array = []
    for (let i = 0; i < 5; i++) {
        temp = prompt(`Digite o nome e a altura da ${i+1}º pessoa`);
        if (temp) {
            array.push({
                nome: temp.split(" ")[0],
                altura: parseFloat(temp.split(" ")[1])
            })
        }
    }
    let sortedArray = array.sort(compare)
    let tallestPerson = array[array.length-1]
    document.getElementById('result').innerHTML = "A pessoa mais alta foi " + tallestPerson.nome + " que possui " + tallestPerson.altura + "m de altura.";
};