 const { uniq } = require('lodash');// importa a função
 const { arrayNumeros, arrayLetras } = require('./array');

 console.log(arrayNumeros);
 console.log(arrayLetras); // consegue pegar separado na importação devido a desestruturação


 const arrayNumeroUnico = uniq(arrayNumeros);
 const arrayLetraUnica = uniq(arrayLetras);

 console.log(arrayNumeroUnico);
 console.log(arrayLetraUnica);
