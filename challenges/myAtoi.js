myAtoi = (s)=>{
    s = s.split('');
    let regex = /[.,'<>?/!_@#$%^&*`~+-]/;
    let regexAlpha = /[abcdefghijklmnopqrstuvwxyz]/
    let numArray = [];
    let lengArr = s.length;
    let negSym = [];
    if(s.length < 1 ){
        return 0;
    }
    for(let i =0; i < lengArr; i++){
        if(s[i] === ' '){
            s.splice(0,1);
            i = i-1;
        }else{
            lengArr = i;
        }
    }
    console.log(s);
    //(/[a-zA-Z]/).test(s[0])
    for(let i = 0; i<s.length; i++){
        if (s[0] === '-' && s[1] === '+'){
            return 0;
        }else if (s[0] === '+' && s[1] === '-'){
            return 0;
        }else if (s[0] === 0 && s[1] === '-'){
            return 0;
        }
        else if (s[0] === '-' && Number.isInteger(parseInt(s[1]))){
         negSym.push(s[0]);
         s.splice(0,1);
            i = i -1;
        }else if(s[0] === '+' && Number.isInteger(parseInt(s[1]))){
            s.splice(0,1);
            i = i-1;
        }else if(isNaN(Number(s[0]))){
            return 0;
        }else if(Number.isInteger(parseInt(s[i]))){
                numArray.push(s[i]);
                if (regex.test(s[i+1]) || s[i+1] === ' ' || regexAlpha.test(s[i+1])){
                    s.length = i;
                }else if (s[0] === 0 && s[1] === '-'){
                    return 0;
                }

        }
    }
    if(numArray.length < 1){
        return 0;
    }
    numArray.unshift(negSym[0]);
    let numNum = parseInt(numArray.join(''));
    if(numNum > 2**31){
        numNum = 2147483647;
    }else if (numNum < -(2**31)){
        numNum = -2147483648;
    }
    return numNum;
}
console.log(myAtoi(""));
console.log(myAtoi("-  42"));
console.log(myAtoi('+1'));
console.log(myAtoi('+  1'));
console.log(myAtoi('0000-+1'));
console.log(myAtoi('-000012a42'));