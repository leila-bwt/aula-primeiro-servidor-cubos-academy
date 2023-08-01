const arrayNumeros = [1, 2, 4, 4, 6, 7, 1];

const arrayLetras = ['a', 'a', 's', 'c'];

// importando objetos

module.exports = {
    arrayNumeros,                // se o nome da propriedade for igual ao nome do valor
    arrayLetras: arrayLetras,   // passa somente o um nome
}; 

// isso é igual a:

/* const objeto = {
*   arrayNumeros: arrayNumeros,
    arrayletras: arrayLetras,
*};

module.exports = objetos;
*/

