function sim(){
    window.open("imagens/miau.jpg", "_blank");
}

function desvia(){
    document.getElementById("btn2");   
    btn2.style.position = 'absolute';
    btn2.style.bottom = posicao(10, 90);
    btn2.style.left = posicao(10, 90);
}


function posicao(min,max){
    return (Math.random() * (max - min) + min) + "%";
}