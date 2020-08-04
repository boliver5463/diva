function generatePassword(){
    return  Array(20)
            .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$')
            .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)])
            .join('');
}