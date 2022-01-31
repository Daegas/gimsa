// VARIABLES
var sizes = ['xs', 's', 'l', 'xl']
var material = ['mar', 'oni']
var juego = ['eco', 'com']


$( document ).ready(function() {
    //////////////////// START FILTERS //////////////////////
    // size
    $('#xs, #s, #l, #xl').on('change', function() {
        Filter(sizes)
    });
    //material
    $('#mar, #oni').on('change', function() {
        Filter(material)
    }); 
    // juegos
    $('#eco, #com').on('change', function() {
        Filter(juego)
    });
    //////////////////// END FILTERS //////////////////////
});

function Filter(array) {
    for(item of array){
        HideOrShowClass(item, 'none')
    }   
    for(item of array){
        let val = $("#" + item).is(':checked')
        if(val) HideOrShowClass(item, 'block')
    }
}

function HideOrShowClass(classs, hide) {
    let elements = document.getElementsByClassName(classs)
    for(item of elements){
        item.style.display = hide;
    };
    
}