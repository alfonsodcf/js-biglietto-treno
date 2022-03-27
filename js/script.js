let userName = document.getElementById ('username');
let age = document.getElementById ('age');
let km = document.getElementById ('km');

let bottone = document.getElementById ('calcolo');
let biglietto = document.getElementById("biglietto");

console.log(userName, age, km, bottone, biglietto);

const prezzoKm = 0.21;
const scontoJunior = 0.80;
const scontoSenior = 0.60;
const junior = 18;
const senior = 60;

bottone.addEventListener('click', function(){
    let name = userName.value;
    let eta = parseInt(age.value);
    let chilometri = parseInt(km.value);

    let prezzo = chilometri * prezzoKm;
    if(isNaN(chilometri) || isNaN(eta)){
        alert('Inserisci dati validi');
        age.value = "";
        userName.value = "";
        km.value = "";
        return;
    }
    if(eta < junior){
        prezzo = prezzo * scontoJunior;
    } else if (eta >= senior){
        prezzo = prezzo * scontoSenior 

    }
    biglietto.innerHTML =`
        Nome: ${name}
        Età: ${eta}
        Km: ${chilometri}
        Prezzo scontato: ${prezzo}
    `;
    biglietto.classList.remove("d-none");
});