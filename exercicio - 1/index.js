const cel2far = (temp) =>{
    const far = document.querySelector('h1')
    far.innerHTML = `${((temp *9/5)+32)} Fahrenheit`
}