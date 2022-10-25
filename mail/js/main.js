// Dichiaro la lista delle email autorizzate
const enabledMails = ["alezuddas@gmail.com", "alessandrozuddas@gmail.com", "alessandro.zuddas@gmail.com", "az1999@gmail.com"];
console.log(enabledMails);

// Chiedo la mail all'utente
const userMail = prompt("Inserisci la tua mail!");
console.log(userMail);

// Verifico che la mail sia nella lista e faccio sapere l'esito all'utente
for (let i = 0; i < enabledMails.length; i++) {
    const element = enabledMails[i];

    if(userMail === element){
        alert("La mail ha i permessi per accedere, sarai reindirizzato a breve!");

        break;
    }
    else{
        alert("Accesso negato! Assicurati che la mail inserita sia registrata per poter accedere!");

        break;
    }
}

window.location.reload();
