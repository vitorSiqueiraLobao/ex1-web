document.querySelector("#submit").addEventListener("click",event=>{
    event.preventDefault()
    getFormattedDate()
})
const getFormattedDate =()=> {

    let string = document.querySelector("#data").value
    if (string) {
        dateParts = string.split("-");
        let date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
        let month = date.toLocaleString('default', { month: 'long' })
        month = month.charAt(0).toUpperCase() + month.slice(1)
        document.getElementById('result').innerHTML = 
            date.getDate() + " de " +
            month + " de " +
            date.getFullYear();
    };
};