// Inicializacija zgodovine iz lokalnega shranjevanja
let history = JSON.parse(localStorage.getItem('calcHistory')) || [];

/**
 * Funkcija za posodobitev prikaza zgodovine
 */
function updateHistoryDisplay() {
    // Pridobimo referenco na HTML element z ID-jem 'historyList'
    const historyList = document.getElementById('historyList');
    
    // Počistimo vse obstoječe vsebine v tem elementu
    historyList.innerHTML = '';
    
    // Obrnemo seznam zgodovine in za vsak vnos v seznamu dodamo novo <li> element
    history.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.innerText = entry;
        historyList.appendChild(li);
    });
}

/**
 * Funkcija za dodajanje vrednosti v prikaz
 * @param {string} value - Vrednost, ki jo želimo dodati v prikaz
 */
function appendValue(value) {
    // Dodaj vrednost na trenutno vsebino vnosnega polja kalkulatorja
    document.calc.display.value += value;
}

/**
 * Funkcija za izračun izraza
 */
function calculate() {
    try {
        // Pridobimo trenutno vrednost iz vnosnega polja kalkulatorja
        const expression = document.calc.display.value;
        
        // Če je vnosno polje prazno, ne nadaljuj z izračunom
        if (expression.trim() === '') return;
        
        // Izračunamo rezultat izraza z eval() funkcijo
        const result = eval(expression);
        
        // Nastavimo rezultat kot novo vrednost vnosnega polja
        document.calc.display.value = result;
        
        // Dodamo izračunani izraz in rezultat v zgodovino
        addToHistory(`${expression} = ${result}`);
    } catch (e) {
        // Če pride do napake pri ocenjevanju izraza, prikažemo opozorilo
        alert('Neveljaven izraz');
    }
}

/**
 * Funkcija za čiščenje prikaza
 */
function clearDisplay() {
    // Nastavimo vnosno polje kalkulatorja na prazno
    document.calc.display.value = '';
}

/**
 * Funkcija za brisanje zadnjega znaka
 */
function deleteLast() {
    // Odstranimo zadnji znak iz vsebine vnosnega polja
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

/**
 * Funkcija za dodajanje v zgodovino
 * @param {string} entry - Vnos, ki ga želimo dodati v zgodovino
 */
function addToHistory(entry) {
    // Dodamo nov vnos na konec seznama zgodovine
    history.push(entry);
    
    // Če seznam zgodovine preseže dolžino 10, odstranimo najstarejši vnos
    if (history.length > 10) {
        history.shift(); // Ohranimo samo zadnjih 10 vnosov
    }
    
    // Shranimo posodobljen seznam zgodovine v lokalno shranjevanje
    localStorage.setItem('calcHistory', JSON.stringify(history));
    
    // Posodobimo prikaz zgodovine
    updateHistoryDisplay();
}

/**
 * Funkcija za čiščenje zgodovine
 */
function clearHistory() {
    // Ponastavimo seznam zgodovine na prazen seznam
    history = [];
    
    // Odstranimo shranjene podatke zgodovine iz lokalnega shranjevanja
    localStorage.removeItem('calcHistory');
    
    // Posodobimo prikaz zgodovine, da odraža prazno stanje
    updateHistoryDisplay();
}

// Ob nalaganju strani posodobimo prikaz zgodovine
window.onload = function() {
    updateHistoryDisplay();
}
