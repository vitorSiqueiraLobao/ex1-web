document.querySelector('.submit').addEventListener("click", event =>{
    event.preventDefault()
    recalcSalary()
})

const recalcSalary = () => {
    let strSalary = document.querySelector("#salario").value
    if (strSalary ){
        let salary = parseFloat(strSalary);
        let adjustment;
        let newSalary;
        let increase;
        if (salary <= 280){
            adjustment = 20;
            newSalary = salary * 1.2;
            increase = salary * 0.2;
        } else if (salary > 280 && salary < 700){
            adjustment = 15;
            newSalary = salary * 1.15;
            increase = salary * 0.15;
        } else if (salary >= 700 && salary < 1500){
            adjustment = 10;
            newSalary = salary * 1.1;
            increase = salary * 0.1;
        } else if (salary >= 1500){
            adjustment = 5;
            newSalary = salary * 1.05;
            increase = salary * 0.05;
        }

        document.getElementById('salary').innerHTML = "Salário antes do reajuste: " + salary;
        document.getElementById('adjustment').innerHTML = "Percentual de aumento aplicado (%): " + adjustment;
        document.getElementById('increase').innerHTML = "Valor do aumento: " + increase.toFixed(2);
        document.getElementById('newSalary').innerHTML = "Novo salário após aumento: " + newSalary.toFixed(2);
    }
};