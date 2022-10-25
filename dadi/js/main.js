// Estraggo numero utente
const userNumber = Math.floor(Math.random() * 6);
const userDisplay = document.getElementById("user-number");

// Estraggo numero cpu
const cpuNumber = Math.floor(Math.random() * 6);
const cpuDisplay = document.getElementById("cpu-number");

// Assegno tag su cui scrivere l'esito ad una variabile
const result = document.getElementById("result");

userDisplay.innerHTML = userNumber;
cpuDisplay.innerHTML = cpuNumber;

// Verifico chi ha il numero più alto e decreto il vincitore
if(userNumber > cpuNumber){

    result.classList.add("win");
    result.innerHTML = "Hai vinto!";
    
}else if(userNumber < cpuNumber){

    result.classList.add("lose");
    result.innerHTML = "Hai perso!";

}else{

    result.classList.add("draw");
    result.innerHTML = "E' un pareggio!";

}