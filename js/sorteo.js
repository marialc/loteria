function sorteo() {
    var array = [];     
    for(var i=0;i<6;i++) { 
        var numeros = Math.floor(Math.random()*99999) + 1; 
        array.push(numeros);
        if (array.indexOf(numeros) === -1) {array.push(numeros);}
        else {i--;}
        document.getElementById(+i).innerHTML = array[i];   
    }
}
