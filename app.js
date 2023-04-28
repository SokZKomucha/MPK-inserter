document.getElementById("Clear").addEventListener("click", () => {
    // Jak sama nazwa elementu HTML wskazuje, funkcja ta
    // służy do czyszczenia wszystkich pól/inputów
    document.getElementById("Data").value = "";         // Data
    document.getElementById("Linia").value = "";        // Linia
    document.getElementById("Numer").value = "";        // Numer pojazdu
    document.getElementById("Rano").checked = "";       // Pora - rano
    document.getElementById("Wieczor").checked = "";    // Pora - wieczór
    document.getElementById("Autobus").checked = "";    // Typ - autobus
    document.getElementById("Tramwaj").checked = "";    // Typ - tramwaj
    document.getElementById("Kontroler").checked = "";  // Obecność kontrolera
});



document.getElementById("Send").addEventListener("click", () => {
    // Funkcja służy przeróbki danych oraz ich wysyłania na serwer
    // (Faktyczne wysyłanie jest zaimplementowawne w kolejnej funkcji)
    // Zmienne poniżej mają na celu przechowywanie danych dot. przejazdu
    let data = document.getElementById("Data").value ? document.getElementById("Data").value.replace(/-/g, "/") : "undefined";  
    let pora = document.getElementById("Rano").checked ? "Rano" : "Wieczór";        // Defaultuje do "Wieczór"      Defaultowanie do danej opcji nie jest intencjonalne, tylko
    let typ = document.getElementById("Autobus").checked ? "Autobus" : "Tramwaj";   // Defaultuje do "Tramwaj"      wynika z takiej implementacji sprawdzania aktywnego inputu
    let linia = document.getElementById("Linia").value ? document.getElementById("Linia").value : "undefined";
    let numer = document.getElementById("Numer").value ? document.getElementById("Numer").value : "undefined"

    // Objekt ten zawiera informacje powyżej, 
    // używany w procesie wysyłania danych na serwer
    const query = {
        Data: data,
        Pora: pora,
        Linia: linia,
        Numer: numer,
        Typ: typ,
        Kontroler: document.getElementById("Kontroler").checked
    };

    // console.log() wypisjący do konsoli wysyłane dane
    // Funkcja wysyłająca dane
    console.log(query);
    post(query);
});



async function post(query) {        
    // Funkcja tworząca POST request na serwer, ma
    // na celu wysyłanie serwerowi danych
    // Zmienna z funkcją fetch() która wysyła dane na serwer
    // i przechowuje odpowiedź od serwera
    let resp = await fetch("http://192.168.100.32:3000", {      // Jeżeli wymagane, <<192.168.100.32:3000>> zmienić na właściwe IP serwera
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)});

    // Wyżej zadeklarowanej zmiennej zostaje przypisy objekt odpowiedzi,
    // który potem jest wypisywana do konsoli 
    resp = await resp.text();
    console.log(JSON.parse(resp));
}