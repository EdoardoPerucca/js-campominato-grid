/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/


/*
- Creo variabile bottone-input dall html
- Creo in html un contenitore griglia
- Al click del bottone si genera una griglia con 100 caselle
- creo gli elementi caselle e li appendo alla griglia
- genero un elemento alla volta con il ciclo for
*/



// - Creo variabile per collegare il bottone-input
const buttonInputEl = document.getElementById('button-input');
// - Creo variabile per collegare la griglia
const gridContainerEl = document.getElementById('grid-container');



buttonInputEl.addEventListener('click', function() {
    // inizio gioco
    gridContainerEl.innerHTML = '';

    //- creo gli elementi caselle e li appendo alla griglia
    const gridInnerEl = document.createElement('div');
    gridInnerEl.classList.add('grid-inner');
    gridContainerEl.append(gridInnerEl);
    
    
    // - genero un elemento alla volta con il ciclo for
    for(let i = 1; i < 101; i++) {
        
        let squareEl = document.createElement('div');
        
        squareEl.style.width = 'calc(100% / 10)';
        squareEl.style.height = 'calc(100% / 10)';
        
        squareEl.classList.add('square');
        squareEl.textContent = i;
            
        gridInnerEl.append(squareEl);


        
        squareEl.addEventListener('click', function() {
            squareEl.classList.toggle('color');
            console.log(i);
        });
    }
    
});



