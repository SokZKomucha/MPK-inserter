# "MPK-inserter"

## Opis, krótki
"Program" ma na celu ułatwianie mi wprowadzania danych o używanych przeze mnie pojazdach krakowskiej komunikacji miejskiej.
Jeśli ktoś ma tak samo nietypowe "hobby" jak ja, to zapraszam

## Opis, dłuższy
Program (serwer + strona) ma na celu ułatwienie mi (albo dowolnej innej osobie) wprowadzania danych (do bazy danych) dotyczących używanych przeze mnie (albo jakąkolwiek inną osobę) pojazdów krakowskiej komunikacji miejskiej. 
Zamiast manualnego wprowadzania danych do wystarczająco nisko responsywnej aplikacji MongoDB Compass, można je szybciej wprowadzać przy użyciu tego oto programu (a kod zajmie się 
resztą).
W celu zapisania danych do bazy, należy najpierw uruchomić serwer MongoDB - najczęściej jest to dokonywane komendą `mongod --dbpath "[ścieżka]"` w cmd. Po uruchomieniu serwera bazy danych wymagane jest uruchomienie serwera aplikacji. By to wykonać, należy użyć polecenia `node .\server.js`.
Nie jestem do końca pewien dlaczego mam takie "hobby"; najprawdopodobniej jest to spowodowane moim znudzeniem jak pewnego razu wracałem 194 ze szkoły.
Jeżeli znajdzie się kolejna osob, która "jest zainteresowana" podobnymi sprawami, zachęcam do skopiowania tego kodu.

## Jak łatwo program może być zepsuty?
Tak.

## Wymagane moduły, zasoby?
- NodeJS
    - mongodb
    - express.js
    - cors
- MongoDB database server
- Przeglądarka obsługująca JavaScript
