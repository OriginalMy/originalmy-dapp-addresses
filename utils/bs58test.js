var bs58 = require('bs58');

const address = '1HrmCUM58wZ4bwrbRXqJZUyf1yXesRbtru';
const bytes = bs58.decode(address.toString(hex));
console.log('Encodando para base58: ' + bs58.encode(bytes));
console.log('Decodificando base58: ' + bytes.toString('hex'));
console.log('bytes length: ' + bytes.toString('hex').length);
bytesToString = bytes.toString('hex')


// Convertendo hex para string
var str = ''
for (var i = 0; i < bytesToString.length; i += 2)
    str += String.fromCharCode(parseInt(bytesToString.substr(i, 2), 16));

console.log("Convertido hex para str: " + str)
console.log("Str length: " + str.length);

// Conversao da string para hex
var arr = [];
for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    if(hex < 10) hex='0'+hex;
    arr.push(hex);
}

arrayJoin = arr.join('');
console.log("str para hex: " + arrayJoin)
console.log("hex length: " + arrayJoin.length)

console.log("Endereço original: " + address)
console.log("Endereço convertido do bs.decode: " + bs58.encode(bytes));
console.log("Endereço convertido da string: " + bs58.encode(Buffer.from(arrayJoin,'hex')));
