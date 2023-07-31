const lodash = require('lodash');

const array = [1, 2, 4, 4, 6, 7, 1];

const arrayUnico = lodash.uniq(array);
// retorna os valores unicos do array

console.log(arrayUnico);

/**
 * é possivel usar a desestruturação para realizar
 * a mesma função acima descrita sem importar toda
 * a biblioteca.
 * 
 * const { uniq } = require('lodash');
 * const array = [1, 2, 4, 4, 6, 7, 1];
 * const arrayUnico = uniq(array);
 */