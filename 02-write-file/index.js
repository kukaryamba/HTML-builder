const fs = require('fs');
const path = require('path');

const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), console.log('Приветствую тебя, уважаемый проверяющий! Введи текст ниже:'));

const {stdin} = process;
stdin.on('data', data => {
    if(data.toString().trim().toLowerCase() === 'exit') {
        console.log('Всего хорошего, до новых проверок!');
        process.exit();
    }
    
    writableStream.write(data);
}
);

process.on('SIGINT', function() {
    console.log('Всего хорошего, до новых проверок!');
    process.exit();
});