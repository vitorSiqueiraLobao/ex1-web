document.querySelector(".submit").addEventListener("click", function(event){
    
    event.preventDefault()
    
    const h1 = document.querySelector('h1').innerHTML = findString(document.querySelector('#texto').value)


  });

  const findString = (string) =>{
    let palavras = string.split(" ")
    let maior = palavras[0]
    for(let i = 0; i<palavras.length;i++){
        if( palavras[i].length > maior.length){
            maior = palavras[i]
        }
    }
    
    return maior
  }