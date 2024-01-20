    //Jquery permite para executar uma function após o click em um botão:
    $("#btnReset").click(function () {
       document.getElementById("inputTexto").value = "";
    });

$("#btnVirgula").click(function () {

    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    texto = texto + ".";

    document.getElementById("inputTexto").value = texto;

});

$("#btn0").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "0";
    document.getElementById("inputTexto").value = texto;
});

$("#btn1").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "1";
    document.getElementById("inputTexto").value = texto;


});

$("#btn2").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "2";
    document.getElementById("inputTexto").value = texto;


});

$("#btn3").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "3";
    document.getElementById("inputTexto").value = texto;


});

$("#btn4").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "4";
    document.getElementById("inputTexto").value = texto;


});

$("#btn5").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "5";
    document.getElementById("inputTexto").value = texto;


});


$("#btn6").click(function () {

    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    //recuperacao da informacao que está no visor.
    var texto = document.getElementById("inputTexto").value;

    //concatenacao do caracter
    texto = texto + "6";

    //atualizacao do visor.
    document.getElementById("inputTexto").value = texto;

});

$("#btn7").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "7";
    document.getElementById("inputTexto").value = texto;


});

$("#btn8").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "8";
    document.getElementById("inputTexto").value = texto;


});

$("#btn9").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "9";
    document.getElementById("inputTexto").value = texto;

});

$("#btnSoma").click(function () {

    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter + na variavel
    texto = texto + "+";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;

});

$("#btnSubtracao").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "-";
    document.getElementById("inputTexto").value = texto;

});

$("#btnMultiplicacao").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "*";
    document.getElementById("inputTexto").value = texto;
});

$("#btnDivisao").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "/";
    document.getElementById("inputTexto").value = texto;

});

$("#btnPotenciaQuadrado").click(function () {
    var texto = document.getElementById("inputTexto").value;
    texto = texto + "X";
    document.getElementById("inputTexto").value = texto;

});

$("#btnIgual").click(function () {

    var texto = document.getElementById("inputTexto").value;
    var posicao = texto.indexOf("+");

    if (posicao > -1) {

        //documentacao sobre o método substring: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
        //substring: retorna uma nova string a partir de um ponto inicial e final.
        var p1 = texto.substring(0, texto.indexOf("+"));
        p1 = parseFloat(p1);

        var p2 = texto.substring(texto.indexOf("+") + 1, texto.length);
        p2 = parseFloat(p2);

        if (isNaN(p1) || isNaN(p2)) {
            alert("Operadores inválidos !!");
        } else {
            //atualiza o input
            document.getElementById("inputTexto").value += " = ";
            document.getElementById("inputTexto").value += p1 + p2;
        }
    } else if (texto.indexOf("-") > -1) {
        var p1 = texto.substring(0, texto.indexOf("-"));
        p1 = parseFloat(p1);

        var p2 = texto.substring(texto.indexOf("-") + 1, texto.length);
        p2 = parseFloat(p2);

        if (isNaN(p1) || isNaN(p2)) {
            alert("Operadores inválidos !!");
        } else {
            document.getElementById("inputTexto").value = p1 - p2;
        }


    } else if (texto.indexOf("*") > -1) {
        var p1 = texto.substring(0, texto.indexOf("*"));
        p1 = parseFloat(p1);

        var p2 = texto.substring(texto.indexOf("*") + 1, texto.length);
        p2 = parseFloat(p2);

        if (isNaN(p1) || isNaN(p2)) {
            alert("Operadores inválidos !!");
        } else {
            document.getElementById("inputTexto").value = p1 * p2;
        }


    } else if (texto.indexOf("/") > -1) {
        var p1 = texto.substring(0, texto.indexOf("/"));
        p1 = parseFloat(p1);

        var p2 = texto.substring(texto.indexOf("/") + 1, texto.length);
        p2 = parseFloat(p2);

        if (isNaN(p1) || isNaN(p2)) {
            alert("Operadores inválidos !!");
        } else {
            document.getElementById("inputTexto").value = p1 / p2;
        }
    } else if (texto.indexOf("X") > -1) {
        var p1 = texto.substring(0, texto.indexOf("X"));
        p1 = parseFloat(p1);

        var p2 = texto.substring(texto.indexOf("X") + 1, texto.length);
        p2 = parseFloat(p2);

        if (isNaN(p1) || isNaN(p2)) {
            alert("Operadores inválidos !!");
        } else {
            document.getElementById("inputTexto").value = Math.pow(p1, p2)
        }
    }
    else {
        alert("Operação inválida!");
    }

});



