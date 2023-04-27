document.getElementById("Clear").addEventListener("click", () => {
    // Data, Linia, Numer pojazdu
    document.getElementById("Data").value = "";
    document.getElementById("Linia").value = "";
    document.getElementById("Numer").value = "";

    // Pory: Rano/Wieczór
    document.getElementById("Rano").checked = "";
    document.getElementById("Wieczor").checked = "";

    // Typ: Autobus/Tramwaj
    document.getElementById("Autobus").checked = "";
    document.getElementById("Tramwaj").checked = "";

    // Kontroler
    document.getElementById("Kontroler").checked = "";
});



document.getElementById("Send").addEventListener("click", () => {
    let data = document.getElementById("Data").value ? document.getElementById("Data").value.replace(/-/g, "/") : "undefined";  
    let pora = document.getElementById("Rano").checked ? "Rano" : "Wieczór";        // Defaultuje do wieczora
    let typ = document.getElementById("Autobus").checked ? "Autobus" : "Tramwaj";   // Defaultuje do tramwaju
    let linia = document.getElementById("Linia").value ? document.getElementById("Linia").value : "undefined";
    let numer = document.getElementById("Numer").value ? document.getElementById("Numer").value : "undefined"


    const query = {
        Data: data,
        Pora: pora,
        Linia: linia,
        Numer: numer,
        Typ: typ,
        Kontroler: document.getElementById("Kontroler").checked
    };

    console.log(query);
    post(query);
});



async function post(query) {
    let resp = await fetch("http://192.168.100.32:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)});
    resp = await resp.text();
    console.log(resp);
}