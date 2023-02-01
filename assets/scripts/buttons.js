window.addEventListener('load',(e) => {
    let homeButton = document.getElementById('homeButton');
    let textButton = document.getElementById('textButton');
    let rompButton = document.getElementById('rompButton');
    let codButton = document.getElementById('FooterCodigo');
    let gitButton = document.getElementById('FooterGithub');
    
    homeButton.addEventListener('click',() => {
        window.location.href = '/';
    });

    textButton.addEventListener('click',() => {
        window.location.href = '/textos.html';
    });

    rompButton.addEventListener('click',() => {
        window.location.href = '/rompecabezas.html';
    });

    codButton.addEventListener('click',() => {
        window.location.href = 'https://campus.utnba.centrodeelearning.com/course/view.php?id=16189';
    });

    gitButton.addEventListener('click',() => {
        window.location.href = 'https://www.github.com/ariel-gallardo';
    });
});