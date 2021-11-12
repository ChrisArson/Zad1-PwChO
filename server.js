// server.js
const express = require('express');
const satelize = require('satelize');
const app = express();

//stale do wyswietlenia
const date = new Date()
const today = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
const autor = "Arkadiusz Szumny"
const port = 8080


//wyswietlanie wymaganych informacji w logach
console.log("Data: " + today)
console.log("Autor: " + autor)
console.log("Port: " + port)

//funkcja pobierajaca timezone na podstawie pobranego adresu ip
async function clientInfo(ip) {
  try {
      satelize.satelize({ip: ip}, function(err, payload) {
      });
      console.log(ip)
      var timeZone = satelize['timezone']
      var localDate = new Date().toLocaleString('pl-PL', {timeZone: timeZone});

      return localDate
  } catch (e) {
    console.log(e);
    return 'Pobieranie danych z API nie powiodlo sie.';
  }
}

//pobieranie adresu (req.ip) i wywolanie funkcji sprawdzajacej timezone
app.set('trust proxy', true)
app.use(async (req, res) => {
    var localDate = await clientInfo(req.ip)
    res.send('IP: '+ req.ip + '</br> Timezone: ' + localDate);
});

//Nasluchiwanie na port 8080, ustawiajac 0.0.0.0 w req.ip dostaniemy tylko IPv4
app.listen(port,'0.0.0.0')