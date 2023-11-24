const giorniCountDown = document.getElementById("giorni");
const oreCountDown = document.getElementById("ore");
const minutiCountDown = document.getElementById("minuti");
const secondiCountDown = document.getElementById("secondi")

let nuovoAnno = new Date("2024, 0 ,1,00,00,00")
let anno = new Date()
let risultato = nuovoAnno.getTime() - anno.getTime();


const days = Math.floor(risultato / (1000 * 60 * 60 * 24));
const hours = Math.floor((risultato % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((risultato % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((risultato % (1000 * 60)) / 1000);




