// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];

function asignarTextoElement(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}


function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (listaAmigos.includes(nombreAmigo)){
        asignarTextoElement('h2', `El nombre ingresado ya existe`);
    }else if (nombreAmigo == ""){
        asignarTextoElement('h2', `Ingrese un nombre válido`);
    }else{
        listaAmigos.push(nombreAmigo);
        agregarToLista('listaAmigos', nombreAmigo);
    }
    limpiarCaja ();
}


function agregarToLista (listaHtml, elemento){
    let listaAmigosHtml = document.getElementById(listaHtml);
    let nombreElemento = document.createElement("li");
    nombreElemento.textContent = elemento;
    listaAmigosHtml.appendChild(nombreElemento);


}
function sortearAmigo(){
    //validar si tiene al menos 2 amigos
    if (listaAmigos.length > 1){
        let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        agregarToLista('resultado', listaAmigos[amigoSorteado]);

    } else {
        asignarTextoElement('h2', `Ingrese al menos un amigo más`);
        
    }
    
    // si los tiene, sortear un amigo
    // mostrar el amigo sorteado en pantalla
    // si no tiene 2 amigos agregar un alerta de q agregue al menos otro

};

function limpiarCaja () {
    document.querySelector('#amigo').value = '';
    
}
