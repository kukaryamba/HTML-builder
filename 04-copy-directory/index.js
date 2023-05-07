const fs = require('fs');
const path = require('path');

const srcFolder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files-copy');

fs.rm(copyFolder, {recursive: true}, err => {
  fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, err => {
    console.log('Папка создана');
  });

  fs.readdir(srcFolder, {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
      fs.copyFile( path.join(srcFolder, file.name), path.join(copyFolder, file.name), err => {
        if (err) console.log('Error');
      });
    });
    console.log('Файлы скопированы')
  });
});