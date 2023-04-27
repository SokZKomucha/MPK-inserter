# MPK autobusy Mongo wrapper

## Opis
Prosta stronka (działająca lokalnie) mająca na celu ułatwienie mi wprowadzania danych dotyczących używanych przeze mnie pojazdów krakowskiej komunikacji miejskiej. Jeżeli ktoś ma tak samo dziwne "hobby" i chce to dokumentować, zapraszam serdecznie.

## Co program robi? Detale 
"Program" ma na celu ułatwienie mi wprowadzania danych o używanych przeze mnie pojazdach krakowskiej komunikacji miejskiej. 
Dane obejmują datę przejazdu, numer linii, numer pojazdu, porę (Rano/Wieczór), typ pojazdu (Autobus/Tramwaj) oraz obecność kontrolera (bool).
By zapisać dane w bazie danych, należy uruchomić serwer używając polecenia `node server.js` oraz mieć uruchomioną instancję MongoDB w tle.

## Jak łatwo go zepsuć?
Tak.

## Wymagane moduły, zasoby?
- NodeJS
    - mongodb
    - express.js
    - cors
- MongoDB
- Przeglądarka obsługująca JS
