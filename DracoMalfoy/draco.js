function faseUm() {
    var contador = 0;
    while (true) {
        var alternativa = (prompt("Digite a alternativa correta (a,b ou c)!").toLowerCase());

        if (alternativa == 'b') {
            alert('Mandou bem, Sonserino! Vamos para a fase 2?');
            location.assign("../Fase2/index.html")
            break;
        } else if (alternativa == 'a' || alternativa == 'c') {
            if (contador >= 1) {
                location.assign("../../Perdeu/index.html")
                break;
            } else {
                alert('Alternativa incorreta!');
                contador++;
            }

        } else {
            alert("Você deverá digitar apenas a, b ou c!")
        }
    }
}
function faseDois() {
    var contador = 0;
    while (true) {
        var alternativa = (prompt("Digite a alternativa correta (a,b ou c)!").toLowerCase());

        if (alternativa == 'a') {
            alert('Mandou bem, Sonserino! Vamos para a fase 3?');
            location.assign("../Fase3/index.html")
            break;
        } else if (alternativa == 'b' || alternativa == 'c') {
            if (contador >= 1) {
                location.assign("../../Perdeu/index.html")
                break;
            } else {
                alert('Alternativa incorreta!');
                contador++;
            }

        } else {
            alert("Você deverá digitar apenas a, b ou c!")
        }
    }
}
function faseTres() {
    var contador = 0;
    while (true) {
        var alternativa = (prompt("Digite a alternativa correta (a,b ou c)!").toLowerCase());

        if (alternativa == 'c') {
            alert('Mandou bem, você venceu!');
            location.assign("../../Venceu/index.html")
            break;
        } else if (alternativa == 'a' || alternativa == 'b') {
            if (contador >= 1) {
                location.assign("../../Perdeu/index.html")
                break;
            } else {
                alert('Alternativa incorreta!');
                contador++;
            }

        } else {
            alert("Você deverá digitar apenas a, b ou c!")
        }
    }
}
