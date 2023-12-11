let path_ispezione ="img/ISPEZIONE/"
const ispezione_pdf = ["Bibliografiaponte.pdf"];

let path_setup ="MONITORAGGIO/SCHEDE TECNICHE/"
const setup_pdf = ["Accelerometer-SHM-Datasheet-Move-Solutions.pdf", "Analog-Node-Datasheet-Move-Solutions.pdf", "Boviar_scheda_Scheda_Estensimetri_Corda_Vibrante_ECV_CLS_SA_2019.pdf" , "Scheda tecnica gateway esterno.pdf", "Tiltmeter-Datasheet-Move-Solutions.pdf"];

function active_canvas  (ide) {
   
    var padre = document.getElementById("contnt");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
}


function active_aux  (ide) {
    var padre = document.getElementById("body2");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
           elementosHijosDiv[i].style.display = "none";
           
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="grid"
    
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

let contatore = 0;
const ispezione_img = ["img/ISPEZIONE/FOTO1.jpeg", "img/ISPEZIONE/FOTO2.jpeg", "img/ISPEZIONE/FOTO5.jpeg", "img/ISPEZIONE/FOTO6.jpeg", "img/ISPEZIONE/FOTO7.jpeg", "img/ISPEZIONE/FOTO8.jpeg", "img/ISPEZIONE/FOTO9.jpeg", "img/ISPEZIONE/FOTO10.jpeg", "img/ISPEZIONE/FOTO11.jpeg"]

function back(id){
    const imagen = document.getElementById(id);
    const vector = ispezione_img;
    contatore -=1;
    if (contatore<=0) {
        contatore = vector.length-1;
        }
    imagen.src = vector[contatore];    

}



function forward(id){
    const imagen = document.getElementById(id);
    const vector = ispezione_img;
    contatore +=1;
    if (contatore>= vector.length) {
        contatore = 0;
        }
    imagen.src = vector[contatore];    

}



let contatore1 = 0;
const nuvola_img = ["NUVOLA DI PUNTI/Nuvola1.jpeg", "NUVOLA DI PUNTI/Nuvola2.jpeg", "NUVOLA DI PUNTI/Laser.jpg"]

function back1(id){
    const imagen = document.getElementById(id);
    const vector = nuvola_img;
    contatore1 -=1;
    if (contatore1<=0) {
        contatore1 = vector.length-1;
        }
    imagen.src = vector[contatore1];    

}



function forward1(id){
    const imagen = document.getElementById(id);
    const vector = nuvola_img;
    contatore1 +=1;
    if (contatore1>= vector.length) {
        contatore1 = 0;
        }
    imagen.src = vector[contatore1];    

}



let contatore2 = 0;
const sensori_img = ["MONITORAGGIO/FOTO/Foto1.PNG", "MONITORAGGIO/FOTO/Foto2.PNG", "MONITORAGGIO/FOTO/Foto3.PNG", "MONITORAGGIO/FOTO/Foto4.PNG", "MONITORAGGIO/FOTO/Foto5.PNG"]

function back2(id){
    const imagen = document.getElementById(id);
    const vector = sensori_img;
    contatore2 -=1;
    if (contatore2<=0) {
        contatore2 = vector.length-1;
        }
    imagen.src = vector[contatore2];    

}



function forward2(id){
    const imagen = document.getElementById(id);
    const vector = sensori_img;
    contatore2 +=1;
    if (contatore2>= vector.length) {
        contatore2 = 0;
        }
    imagen.src = vector[contatore2];    

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




