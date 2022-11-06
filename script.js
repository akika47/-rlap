function beillesztes() {
    var nev = document.getElementById("nev").value;
    document.getElementById("visszaIgazNev").innerHTML = nev;
    var cim = document.getElementById("cim").value;
    document.getElementById("visszaIgazCim").innerHTML = cim;
    var tel = document.getElementById("telefon").value;
    document.getElementById("visszaIgazTelefon").innerHTML = tel;
}

function szinezesNev() {
    document.getElementById("nev").style.background = "lightblue";
}
function szinezesCim() {
    document.getElementById("cim").style.background = "lightblue";
}
function szinezesTel() {
    document.getElementById("telefon").style.background = "lightblue";
}
function visszaAllitasNev() {
    document.getElementById("nev").style.background = "white";
}
function visszaAllitasCim() {
    document.getElementById("cim").style.background = "white";
}
function visszaAllitasTel() {
    document.getElementById("telefon").style.background = "white";
}