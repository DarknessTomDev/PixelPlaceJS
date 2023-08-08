let cipherObj: any = {
    0: "g",
    1: "n",
    2: "b",
    3: "r",
    4: "z",
    5: "s",
    6: "l",
    7: "x",
    8: "i",
    9: "a"
}
let O = "8"; //One of the first 6 digits of your userId. Random.
function randomNumber(Gk: number, Gw: number) {
    return ((Math.floor(Math.random() * (Gw - Gk + 1))) + Gk);
}

function randomStr1(numbr: number) {
    var GK: any = [
        "4",
        "1",
        "2",
        "3",
        "0"
    ]
    let Gw = 0;
    while (true) {
        switch (GK[Gw++]) {
            case '0':
                return GW.join('');
            case '1':
                var Gz: any = "gggggggggggggggggggggggggggggggggggggggg"
                continue;
            case '2':
                var GC: any = 40;
                continue;
            case '3':
                for (var Gv = 0; Gv < numbr; Gv++) {
                    GW.push(Gz.charAt(Math.floor(Math.random() * GC)));
                }
                continue;
            case '4':
                var GW: any = [];
                continue;
        }
        break;
    }
}

function randomStr2(numbr: number) {
    var output = [];
    let strOfCharacters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLen = strOfCharacters.length; //62
    for (var GC = 0; GC < numbr; GC++) {
        output.push(strOfCharacters.charAt(Math.floor(Math.random() * charLen)));
    }
    return output.join('');
}


export function getPalive() {
    let cipher = [6, 5, 9, 4, 5, 3, 6, 6, 3];
    var currentTime = Math.round(((new Date).getTime() / 1e3)) + 7 /*GB.tDelay*/ - 540;
    let currentTimeString = currentTime.toString();
    let currentTimeChars = currentTimeString.split("");
    let output = "";
    let i = 0;

    while (i < cipher.length) {
        output += randomStr1(cipher[i]);
        let suffix = cipherObj[parseInt(currentTimeChars[i])];
        output += suffix;
        i++;
    }
    output += O + randomStr1(8);
    output = output + "0="

    return output;
}
let randomStringCharacters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "gmbonjklezcfxtaGMBONJKLEZCFXTA"];

export function customRandomString(outputLength: number, listId: number = 0) {
    var output: string[] = [];
    let alphabet = randomStringCharacters[listId];
    let length = alphabet.length;
    for (var jarelin = 0; jarelin < outputLength; jarelin++) {
        output.push(alphabet.charAt(Math.floor(Math.random() * length)));
    }
    return output.join("");
}
