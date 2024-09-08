var numero1 = '';
var numero2 = '';
var operacion = '';

function agregarNumero(numero) {
    if (operacion === '') {
        numero1 += numero;
        document.getElementById('pantalla').value = numero1;
    } else {
        numero2 += numero;
        document.getElementById('pantalla').value = numero1 + ' ' + operacion + ' ' + numero2;
    }
}

function limpiar() {
    numero1 = '';
    numero2 = '';
    operacion = '';
    document.getElementById('pantalla').value = '';
}

function setOperacion(op) {
    if (numero1 !== '') {
        operacion = op;
        document.getElementById('pantalla').value = numero1 + ' ' + operacion;
    }
}

function calcular() {
    if (numero1 !== '' && numero2 !== '' && operacion !== '') {
        var resultado;
        var n1 = parseFloat(numero1);
        var n2 = parseFloat(numero2);
        
        switch (operacion) {
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case '*':
                resultado = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    alert('No se puede dividir entre cero.');
                    limpiar();
                    return;
                }
                resultado = n1 / n2;
                break;
            default:
                alert('Operación no válida.');
                limpiar();
                return;
        }
        
        document.getElementById('pantalla').value = resultado;
        numero1 = resultado.toString();
        numero2 = '';
        operacion = '';
    }
}