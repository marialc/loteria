function sorteo() {

    var array = []; 
    
    /* Creo un array vacío */
    
    var i; 
    
    /* Declaro la variable que va a servir de contandor/acumulador dentro del bucle for */

    for(i=0;i<6;i++) { 
        
        /* 
        ↑ Inicio el bucle en 0 (i=0) 
        ↑ Cuando el valor de i llegue a 5 (i<6) se va a parar el bucle
        ↑ Para que vaya dando vueltas le sumo 1 al valor de i (i++) en cada vuelta
        */

        var numeros = Math.floor(Math.random()*99999) + 1; 

        /* Con esto genero un número aleatorio entre el 1 (por eso le pongo +1) y el 99999 (por eso le pongo *99999). El Math.floor lo que hace es redondear los números aleatorios que ha generado Math.random para que no salgan con decimales */

        array.push(numeros);

        /* Con esto le digo que meta en el array el número que hay guardado en la variable numeros */

        document.getElementById(+i).innerHTML = array[i];     


    }
}
