const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`La base: "${base}" no es un número`);
      return;
    }
    let data = '';
    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
      console.log('Tabla creada de forma exitosa..'.green);
        resolve(`tabla - ${base}.txt`);
    });
  });
}
module.exports = {
  crearArchivo
}
