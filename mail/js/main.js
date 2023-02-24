"use strict";

const userMail = prompt("Inserisci la tua email"); // Variabile dove inseriamo l'email dell'utente
const dataBase = ["mail1@gmail.com","mail2@gmail.com","mail3@gmail.com"]; // Array contenente la varie email
let checkMail = false; //Variabile booleana per controllare la presenza della nostra email

//for loop dove eseguiamo il controllo sulla presenza della email utente nel array "database"
for(let i = 0; i < dataBase.length; i++){
     if(dataBase[i] === userMail){
        checkMail = true;
    }
}
// stampa del risultato
alert( `La tua email si trova nel database? : ${checkMail}`);