//palindromo
function palindromo(cad) {
    
        var r = "La cadena \"" + cad + "\" \n";
    
        // a minusculas
        var cad1 = cad.toLowerCase();
    
        // a array
        var ca = cad1.split("");
    
        // sin espacios
        var cadSE = "";
        for (i in ca) {
            if (ca[i] != " ") {
                cadSE += ca[i];
            }
        }
    
        var letras = cadSE.split("");
        var letR = cadSE.split("").reverse();
        var iguales = true;
        for (i in letras) {
            if (letras[i] == letR[i]) {
                
            } else {
                iguales = false;
            }
        }
    
        if (iguales) {
            r += " si es un palindromo";
        } else {
            r += " no es un palindromo";
        }
        return r;
    }
    console.log(palindromo("anita lava la tina"));

    
    //total consonantes
    function cantc(cad) {
        var res = "La cadena \"" + cad + "\" \n";
        var letras = cad.split("");
        var total = 0;
        for (var _i = 0, letras1 = letras; _i < letras1.length; _i++) {
            var letra = letras1[_i];
            switch (letra.toLowerCase()) {
                case "b":
                    total++;
                    break;
                case "c":
                    total++;
                    break;
                case "d":
                    total++;
                    break;
                case "f":
                    total++;
                    break;
                case "g":
                    total++;
                    break;
                case "h":
                    total++;
                    break;
                case "j":
                    total++;
                    break;
                case "k":
                    total++;
                    break;
                case "l":
                    total++;
                    break;
                case "m":
                    total++;
                    break;
                case "n":
                    total++;
                    break;
                case "p":
                    total++;
                    break;
                case "q":
                    total++;
                    break;
                case "r":
                    total++;
                    break;
                case "s":
                    total++;
                    break;
                case "t":
                    total++;
                    break;
                case "u":
                    total++;
                    break;
                case "v":
                    total++;
                    break;
                case "w":
                    total++;
                    break;
                case "x":
                    total++;
                    break;
                case "y":
                    total++;
                    break;
                case "z":
                    total++;
                    break;
            }
        }
        return total;
        return res;
    }
    console.log("Total de consonantes: " + cantc("anita lava la tina"))
    

    //total vocales
    function canv(cad) {
        var letras = cad.split("");
        var total = 0;
        for (var _i = 0, letras1 = letras; _i < letras1.length; _i++) {
            var letra = letras1[_i];
            switch (letra.toLowerCase()) {
                case "a":
                    total++;
                    break;
                case "e":
                    total++;
                    break;
                case "i":
                    total++;
                    break;
                case "o":
                    total++;
                    break;
                case "u":
                    total++;
                    break;
            }
        }
        return total;
    }
    console.log("Total de vocales :" + canv("anita lava la tina"))
    

    //total palabras
function canp(s) {
        var con = 1,
            pos;
        s = s.trim();
        if (s === null) {
            con = 0;
        } else {
            pos = s.indexOf(" ");
            while (pos != -1) {
                con++;
                pos = s.indexOf(" ", pos + 1);
            }
        }
        return con;
    }
    console.log("Total de palabras: " + canp("anita lava la tina"));
    

    //total de letras
    function canl(txta) {
        var total = 0;
        var letras = txta.split("");
        for (var _i = 0, letras2 = letras; _i < letras2.length; _i++) {
            var letra = letras2[_i];
            if (/[a-z]/.test(letra.toLocaleLowerCase()))
                total++;
        }
        return total;
    }
    console.log("Total de letras: " + canl("anita lava la tina"));
    