if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function vypocetOhmovaZakona() {
    const napeti = parseFloat(document.getElementById("napeti").value);
    const proud = parseFloat(document.getElementById("proud").value);
    const odpor = parseFloat(document.getElementById("odpor").value);
    const chybaDiv = document.getElementById("chyba");

    // Nejprve vyčistíme předchozí zprávu o chybě
    chybaDiv.innerText = "";

    // Pokud jsou napětí a proud zadané, spočítá odpor
    if (!isNaN(napeti) && !isNaN(proud) && isNaN(odpor)) {
        if (proud === 0) {
            chybaDiv.innerText = "Nulový proud není platný. Nelze dělit nulou.";
        } else {
            document.getElementById("odpor").value = (napeti / proud).toFixed(2);
        }
    }
    // Pokud jsou napětí a odpor zadané, spočítá proud
    else if (!isNaN(napeti) && !isNaN(odpor) && isNaN(proud)) {
        if (odpor === 0) {
            chybaDiv.innerText = "Nulový odpor není platný. Nelze dělit nulou.";
        } else {
            document.getElementById("proud").value = (napeti / odpor).toFixed(2);
        }
    }
    // Pokud jsou proud a odpor zadané, spočítá napětí
    else if (!isNaN(proud) && !isNaN(odpor) && isNaN(napeti)) {
        document.getElementById("napeti").value = (proud * odpor).toFixed(2);
    }
    // Pokud není zadaných dostatek údajů
    else if (isNaN(napeti) || isNaN(proud) || isNaN(odpor)) {
        chybaDiv.innerText = "Zadejte dvě hodnoty pro výpočet.";
    }
}


