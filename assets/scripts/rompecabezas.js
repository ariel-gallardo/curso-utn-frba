window.addEventListener('load',(e) => {

    let selectedElement = '';
    let tablePiece = [];
    let size = [
        200, 200, 200,
        200, 200, 200,
        200, 200, 200
    ];
    
    let tablero = document.getElementById('tablero');
    let piezas = document.getElementById('piezas');
    let btnReiniciar = document.getElementById('btnReiniciar');


    const dropElement = (e) => {
    
    }

    const inicializarPiezas = () => {
        piezas.innerHTML = '';
        tablero.innerHTML = '';
        let posiciones = [];
 
        while(posiciones.length < 9){

            let random = Math.round(Math.random()*10);
            if(random < 10 && posiciones.indexOf(random) == -1 && random > 0){
                posiciones = [...posiciones,random];
            }
        }
        posiciones.forEach(x => piezas.innerHTML = `${piezas.innerHTML}<img draggable='true' width='${size[x-1]}px' id='f${x}' src='/assets/images/Rompecabezas/${x}.svg' />`);
        
        [1,2,3,4,5,6,7,8,9].forEach(x => {
            tablePiece[x-1] = document.createElement("img");
            tablePiece[x-1].setAttribute('style','border: solid blue 2px; background-color: blue;');
            tablePiece[x-1].setAttribute('src',"/assets/images/Rompecabezas/Nada.svg");
            tablePiece[x-1].setAttribute('draggable',true);
            tablePiece[x-1].addEventListener('dragover',(e) => {e.preventDefault();});

            tablePiece[x-1].addEventListener('drop',(e) => {
                let piece = e.dataTransfer.getData('text/html');
                console.log(piece);
            });
            
            tablero.appendChild(tablePiece[x-1]);
            
            let image = document.getElementById(`f${x}`);
            image.addEventListener('dragstart',(e) => {
                selectedElement = image;
                e.dataTransfer.setData('object',selectedElement.innerHTML);
            });

  

        });
    };

    inicializarPiezas();

    btnReiniciar.addEventListener('click', () => {
        inicializarPiezas();
    });
});