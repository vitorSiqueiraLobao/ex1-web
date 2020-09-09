let draw = () => {
    let results = calculate()
    let days = results[0]
    let hours = results[1]
    let minutes = results[2]
    let seconds = results[3]
    let countdown = document.getElementById("countdown")
    setInterval(function () {
        if (seconds == 0) {
            if (minutes > 0) {
                minutes--
                seconds = 59
            } else if (hours > 0) {
                hours--
                minutes = 59
                seconds = 59
            } else if (days > 0) {
                days--
                hours = 23
                minutes = 59
                seconds = 59
            }
        } else {
            seconds--
        }
        if (seconds < 10) {
            countdown.innerHTML = days + " : " + hours + " : " + minutes + " : 0" + seconds
        } else {
            countdown.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds
        }
    }, 1000)
}
let calculate = () => {
    let birth = new Date(document.querySelector("#data").value.split('-'))
    let now = new Date().getTime()
    let distance = now - birth
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let result = [days,hours,minutes,seconds]
    return result
}

