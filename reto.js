function Arreglo() {
    var a = prompt ("Ingresa un numero");
    var b = prompt ("Ingresa un segundo numero");
    var c = prompt ("Ingresa un tercer numero");
    var d = prompt ("Ingresa un cuarto numero");
    var miArrayOriginal = [a,b,c,d];
    
    var miArray = [a,b,c,d];
    
    var mensaje ='Los número elegidos son original es: ' + miArrayOriginal +'\n';
    
    mensaje = mensaje + 'Arreglo para Ordenarlos de mayor a menor es ' + miArray.sort(deMayorAMenor)+'\n';
    
    mensaje = mensaje + 'Arreglo para Ordenarlos de menor a mayor es ' + miArray.sort(deMenorAMayor)+'\n';
    
    alert(mensaje);
    
    }
    
    function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
    
    function deMayorAMenor(elem1, elem2) {return elem2-elem1;}
    