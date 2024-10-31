# Fullstack Open 2024 puhelinluettelo backend

### Linkki *[PUHELINLUETTELOON](https://full-stack-open-2024-backend.onrender.com/)*.

### 3.1 puhelinluettelon backend step1     DONE
    - http://localhost:3001/api/persons tarjoaa kovakoodatun taulukon puhelinnumerotietoja.
### 3.2 puhelinluettelon backend step2     DONE
    - http://localhost:3001/info
### 3.3 puhelinluettelon backend step3     DONE
    - toiminnallisuus yksittäisen puhelinnumerotiedon näyttämiseen http://localhost:3001/api/persons/:id
### 3.4 puhelinluettelon backend step4     DONE
    - numerotiedon yksilöivän http://localhost:3001/api/persons/:id URL:in tehtävä HTTP DELETE ‑pyyntö.
### 3.5 puhelinluettelon backend step5     DONE
    - puhelintietoja lisäys HTTP POST ‑pyynnöllä osoitteeseen http://localhost:3001/api/persons.
### 3.6 puhelinluettelon backend step6     DONE
    - uuden numeron lisäykseen virheiden käsittely. ( nimi / numero puuttuu, nimi löytyy jo luettelosta)
### 3.7 puhelinluettelon backend step7     DONE
    - Asenna middleware Morgan ja konfiguroi se loggaamaan tiny-konfiguraation mukaisesti.
### 3.8* puhelinluettelon backend step8     DONE
    - Konfiguroi morgania siten, että se näyttää myös HTTP POST ‑pyyntöjen mukana tulevan datan.
### 3.9: Puhelinluettelo backend, step9     DONE
    - Backendin toiminta puhelinluettelon frontendin kanssa paitsi puhelinnumeron muutoksen osalta.
### 3.10: Puhelinluettelo backend, step10     DONE
    - Vie sovelluksen backend Internetiin, esim. Fly.io:n tai Renderiin. ->> Render.
### 3.11: Puhelinluettelo full stack     DONE
    - Generoi frontendistä tuotantoversio ja lisää se Internetissä olevaan sovellukseesi.
### 3.12: Tietokanta komentoriviltä     DONE
    - Luo sovellukselle pilvessä oleva MongoDB-tietokanta ja mongo.js tiedosto, jolla testata toimivuus.
### 3.13: Puhelinluettelo ja tietokanta, step1     DONE
    - Backend hakee näytettävät puhelintiedot tietokannasta. Varmista Frontendin toiminta.
### 3.14: Puhelinluettelo ja tietokanta, step2     DONE
    - Refactoroi backend niin, että numerot tallettuvat tietokantaan. Varmista Frontendin toiminta.
### 3.15: Puhelinluettelo ja tietokanta, step3     DONE
    - Numerotietojen poistaminen päivittyy tietokantaan.
### 3.16: Puhelinluettelo ja tietokanta, step4     DONE
    - Keskitä sovelluksen virheidenkäsittely middlewareen.
### 3.17*: Puhelinluettelo ja tietokanta, step5     DONE
    - Numero henkilölle, joka on jo olemassa, päivittää tiedot uudella numerolla HTTP PUT:lla.
### 3.18*: Puhelinluettelo ja tietokanta, step6     DONE
    - api/persons/:id ja info käsittely ja varmista niiden toimivuus selaimella, Postmanilla tai VS Coden REST Clientillä.
### 3.19: Puhelinluettelo ja tietokanta, step7     DONE
    - Tietokantaan talletettavan nimen on oltava pituudeltaan vähintään kolme merkkiä.
### 3.20*: Puhelinluettelo ja tietokanta, step8     DONE
    - Puhelinnumeron täytyy olla vähintään 8 merkkiä pitkä, ja koostua kahdesta osasta.
    - esim. 09-1234556 ja 040-22334455 ovat oikeassa muodossa
    - esim. 1234556, 1-22334455 ja 10-22-334455 eivät ole kelvollisia
### 3.21: Tietokantaa käyttävä versio Internetiin     DONE
    - Generoi päivitetystä sovelluksesta "full stack" ‑versio, 
      eli tee frontendista uusi production build ja kopioi se backendin repositorioon. 
      Varmista, että kaikki toimii paikallisesti käyttämällä 
      koko sovellusta backendin osoitteesta http://localhost:3001.
### 3.22: lint-konfiguraatio     DONE
    - Ota sovellukseesi käyttöön ESLint, ja korjaa kaikki tyylivirheet.   