const giorniCountDown = document.getElementById("giorni");
const oreCountDown = document.getElementById("ore");
const minutiCountDown = document.getElementById("minuti");

const countDown=setInterval(function(){
    let nuovoAnno = new Date("1 january 2024")
    let anno = new Date()
    let risultato = nuovoAnno - anno

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

},1000)
