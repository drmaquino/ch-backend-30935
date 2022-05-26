const { normalize, denormalize, schema } = require("normalizr");
const fs = require('fs')

const holding = JSON.parse(fs.readFileSync('./holding.json'))

// Definimos un esquema de empleado
const empleadoEntity = new schema.Entity('empleados');
// const empleadoEntity = new schema.Entity('empleados', {}, { idAttribute: 'DNI' });

// Definimos un esquema de organigrama
const empresaEntity = new schema.Entity('empresas', {
  gerente: empleadoEntity,
  encargado: empleadoEntity,
  empleados: [empleadoEntity]
}
  // , {  idAttribute: 'nombre' }
);

/* ---------------------------------------------------------------------------------------- */
const util = require('util')

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedHolding = normalize(holding, [empresaEntity]);
print(normalizedHolding)

console.log(' ------------- OBJETO DESNORMALIZADO --------------- ')
const denormalizedHolding = denormalize(normalizedHolding.result, [empresaEntity], normalizedHolding.entities);
//print(denormalizedHolding)

console.log()

const longO = JSON.stringify(holding).length
console.log('Longitud objeto original: ', longO)

const longN = JSON.stringify(normalizedHolding).length
console.log('Longitud objeto normalizado: ', longN)

const longD = JSON.stringify(denormalizedHolding).length
console.log('Longitud objeto desnormalizado: ', longD)

const porcentajeC = (longN * 100) / longO
console.log('Porcentaje de compresión: ', porcentajeC.toFixed(2) + '%')
