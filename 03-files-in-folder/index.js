const fs = require('fs');
const path = require('path');

const myFolder = path.join(__dirname, 'secret-folder');

fs.readdir(myFolder, {withFileTypes: true}, (err, files) => {
    if (err) console.log('Файл не найден'); 
    else{
      files.forEach(file => {
        if (file.isFile()) {
          fs.stat(path.join(myFolder, file.name), (err, stats) => {
            let [name, ext] = file.name.split('.');
            console.log(`${name} - ${(path.extname(path.join(myFolder, file.name))).slice(1)} - ${stats.size}b`);
          });
        }
      });
    }
});