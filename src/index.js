const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let fromArr = Object.keys(MORSE_TABLE);
    let toArr = Object.values(MORSE_TABLE);
    let arrResult =[];
    let letterString;
    let wordsArr = expr.split('**********');
    let newString ='';
    for(let i=0; i < wordsArr.length; i++){
        if (i!==0){
            arrResult.push(' ');
        };
    let k=0;
    while (k<=wordsArr[i].length){
     letterString='';
     letterString=wordsArr[i].slice(k,k+10);
     console.log( letterString);
     newString =''
     for (let n=0; n<=10; n+=2){
        if (letterString.slice(n,n+2)==='10'){
            newString=newString +'.';
        };
        if (letterString.slice(n,n+2)==='11'){
            newString = newString +'-';
        };
     }
     arrResult.push(toArr[fromArr.indexOf(newString)]);
     k+=10;
    }
   
         
    }
    return arrResult.join('');

}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));

module.exports = {
    decode
}
