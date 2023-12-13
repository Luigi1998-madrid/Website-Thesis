let path_ispezione ="img/ISPEZIONE/"
const ispezione_pdf = ["Bibliografiaponte.pdf"];
const ispezione_img = ["FOTO1.jpeg", "FOTO2.jpeg", "FOTO5.jpeg", "FOTO6.jpeg", "FOTO7.jpeg", "FOTO8.jpeg", "FOTO9.jpeg", "FOTO10.jpeg", "FOTO11.jpeg"]
const ispezione_texto = ["Vista frontale", "Vista laterale","3", "4", "6", "8", "9", "1", "89"];

let path_nuvola ="NUVOLA DI PUNTI/"
const nuvola_img = ["Nuvola1.jpeg", "Nuvola2.jpeg","Laser.jpg"]
const nuvola_texto = ["Vista frontale", "Vista laterale","3"];

let path_setup ="MONITORAGGIO/SCHEDE TECNICHE/"
let pathfoto_setup = "MONITORAGGIO/FOTO/"
const setup_img = ["ProspettoSud.jpg", "ProspettoNord.jpg", "SezioneRender.jpg"];
const setup_pdf = ["Accelerometer-SHM-Datasheet-Move-Solutions.pdf", "Analog-Node-Datasheet-Move-Solutions.pdf", "Boviar_scheda_Scheda_Estensimetri_Corda_Vibrante_ECV_CLS_SA_2019.pdf" , "Scheda tecnica gateway esterno.pdf", "Tiltmeter-Datasheet-Move-Solutions.pdf"];
const setup_texto = ["Vista frontale", "Vista laterale","3"];
const sensori_img = ["Foto1.PNG", "Foto2.PNG", "Foto3.PNG","Foto4.PNG","Foto5.PNG", "Setup.PNG"];
const sensori_texto = ["Vista frontale", "Vista laterale","3", "4", "6", "8"];

//function cambiar_sfondo_body_secondary(arg ){
    //let aux;

    //if (arg === 'body2') {
       // aux = sfondo_img[0];
    //} else if (arg === 'body3') {
        //aux = sfondo_img[1];
    //} else if (arg === 'body4') {
        //aux = sfondo_img[2];
    //}

    //let path_sfondo1 = path_sfondo + aux;
    //const elemento = document.getElementById(arg);
     
    //elemento.style.backgroundImage = 'url('+path_sfondo1+')';
    //elemento.style.backgroundSize = 'cover';
//}

function quitar_sfondo_body_secondary(arg ){
     
    const content = document.getElementById(arg);
     
    content.style.background = 'white';
     
}





function active_canvas  (ide) {
   
    var padre = document.getElementById("contnt");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    //cambiar_sfondo_body_secondary(arg)
}



function active_aux  (father,ide) {
    var padre = document.getElementById("father");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }

    const elementos_bodythird = document.querySelectorAll(".body_third");
    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
        }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"

      quitar_sfondo_body_secondary(father)
    
}


function active_aux1  (ide) {
    var padre = document.getElementById("body3");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}



function active_aux2  (ide) {
    var padre = document.getElementById("body4");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}

 let contatore =0;
function forward(id,path,vector,id2,vector2){

    const imagen = document.getElementById(id);
    const p_text = document.getElementById(id2);
    contatore +=1;

    if (contatore >= vector.length) {
        contatore = 0;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;
    p_text.innerText=vector2[contatore];

}



function back(id,path,vector,id2,vector2){
    const imagen = document.getElementById(id);
    const p_text = document.getElementById(id2);
    
    contatore -=1;
    if (contatore <  0) {
        contatore = vector.length-1;  // Reinicia el contador si alcanza el final del array
    }
    let path1 = path+vector[contatore];
    imagen.src = path1;
    p_text.innerText=vector2[contatore];

   

}








function aprirePDF(id1,id2,path,vector,cont){
    // Firstly we close all elements that have class .body_third
    const elementos_bodythird = document.querySelectorAll(".body_third");
    for (var j = 0; j < elementos_bodythird.length; j++) {
           elementos_bodythird[j].style.display = "none";
           
    }
    // next we open the element with the path
    const lector = document.getElementById(id1);
    lector.style.display = "grid"

    
    const embed = document.getElementById(id2)
    let path1 = path+vector[cont];
   
    
    embed.src = path1;
    const anchor =embed.querySelector("a");
    anchor.href = path1;
    console.log(vector[cont]);
    console.log(embed.src)
    
}






document.addEventListener('DOMContentLoaded', function() {
    // Obtener el objeto del visor de PDF

    // var pdfViewer = document.querySelector('#contenedor object');
    var closeButton = document.querySelector('.cerrarDocumento');
    const elementos = document.querySelectorAll(".lector");
    // Verificar si el visor de PDF está presente
    // if (pdfViewer) {
    //     // Agregar eventos o funcionalidad adicional aquí
    //     console.log('Visor de PDF cargado correctamente.');
    // }


    if (closeButton) {
        // Agregar eventos o funcionalidad adicional aquí
        
        // Cerrar el documento PDF al hacer clic en el botón
        closeButton.addEventListener('click', function() {
            // pdfViewer.style.display = 'none'; // Oculta el visor de PDF
        
        for (var j = 0; j < elementos.length; j++) {
           elementos[j].style.display = "none";

        }
        console.log(elementos.length)
        });
    }
});




