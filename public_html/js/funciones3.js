


window.onload = function(){
    document.getElementById("mySelect").onchange=eligeAuto;

function eligeAuto() {
    //campturamos el valor del campo
    //usuario
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "tu coche favorito es: " + x;
}
}
//para validar un formulario
window.onload = function(){
    

    document.getElementById("miForm").onsubmit=validarForm;
    
    function validarForm(){
        //con la propiedad value capturamos lo q introduce el usuario
        var x=document.getElementById("fname").value;
        var y=document.getElementById("fapellido").value;
        if(x==null){
            document.getElementById("compruebaForm").innerHTML="rellena elcampo";
        }
            if(y==null){
            document.getElementById("compruebaForm").innerHTML="rellena elcampo";
        }
        //document.getElementById("compruebaForm").innerHTML="registro completado con exito";    
        }
    };
    
window.onload = function(){

document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
};

document.ondrag = function(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
};

/* Events fired on the drop target */
document.ondragover = function(event) {
    event.preventDefault();
};

document.ondrop = function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
    }
};