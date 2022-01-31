//VARIABLES
var mdf_colors = ['Antártica', 'Báltico', 'Blanco', 'Ceniza', 'Chocolate', 'Concreto', 'Ébano Amazónico', 'Encino Apalaches', 'Fioré', 'Gris Antracita', 'Gris Claro', 'Gris Cúbrica', 'Guadiana', 'Husky', 'Islandia', 'Maranello', 'Moca', 'Negro', 'Nogal Africano', 'Nogal Imperial', 'Nogal Irlandés', 'Palo de Fierro', 'Parota', 'Prime Ash', 'Roble Francés', 'Roble Peruano', 'Textil', 'Tzalam']
var marmol_colors = ['Amarillo', 'Belagio', 'Blanco con gris', 'Guardiana', 'Oxford', 'Rojo', 'Travertino']
$( document ).ready(function() {
    var main_container = document.getElementById("main_container")
    var src = main_container.getAttribute('path')
    var n_images = Number(main_container.getAttribute('n_images'))

    // LOAD IMAGES
    for (i=1 ; i<=n_images; i++){
        let active = ''
        if(i==1){ active='active'}
        let pic_left= `<a class="pt ${active}" href="#product-${i}">
            <img src="${src}product-${i}.jpg" alt="">
        </a>`

        document.getElementById("product__details__pic__left").innerHTML += pic_left
    }
    //MARMOL
    for (color of mdf_colors){
        let code= `<label for="${color}" data-toggle="tooltip" data-placement="top" title="${color}">
            <div class="round ml-2">
                <a href="../../../img/product/colors/${color}.jpg"> <img
                        src="../../../img/product/colors/${color}.jpg" /></a>
            </div>
        </label>`

        document.getElementById("mdfColors").innerHTML += code
    }
    //MARMOL
    for (color of marmol_colors){
        let code= `<label for="${color}" data-toggle="tooltip" data-placement="top" title="${color}">
            <div class="round ml-2">
                <a href="../../../img/product/colors/marmol/${color}.jpg"> <img
                        src="../../../img/product/colors/marmol/${color}.jpg" /></a>
            </div>
        </label>`

        document.getElementById("marmolColors").innerHTML += code
    }
    document.getElementById("marmolColors").innerHTML += `<p>Tonos Guardiana y Belagio aumenta $500 el juego. </p>`;



});