var bs58 = require('bs58');

var encodedHexWallet = '00b8eb4a03cb02f3a7a243dd2ef435f938dacacadbd43557ca';
//console.log(restoreWallet(fromHex(encodedHexWallet.toString().slice(0,-14))))
console.log(restoreWallet(fromHex(encodedHexWallet.toString(16))))

function fromHex(bytes){
    bytesToString = bytes.toString('hex')    
    var str = ''
    for (var i = 0; i < bytesToString.length; i += 2)
        str += String.fromCharCode(parseInt(bytesToString.substr(i, 2), 16));
    return str.toString().trim();
}

function toHex(bytes){
    var arr = [];
    for (var i = 0, l = bytes.length; i < l; i ++) {
        var hex = Number(bytes.charCodeAt(i)).toString(16);
        if(hex < 10) hex='0'+hex;
        arr.push(hex);
    }

    arrayJoin = arr.join('');
    return arrayJoin;
}

function restoreWallet(bytes){
    var arrayJoin = toHex(bytes);
    bs58Encoded = bs58.encode(Buffer.from(arrayJoin,'hex'));
    //return bs58Encoded.substr(1);
    return bs58Encoded;
}

function convertWallet(address){
    var bytes = bs58.decode(address);
    bytesToString = bytes.toString('hex')

    return fromHex(bytesToString);
}