document.querySelector(".find").addEventListener("click", function(event){
    event.preventDefault()
    const string = document.querySelector('.string').value
    const sub_string = document.querySelector('.sub_string').value
    const h1 = document.querySelector('h1').innerHTML = find(string,sub_string)
  });

const find = (string, substring)=>{
      let count = string.split(substring)
      return count.length-1
  };