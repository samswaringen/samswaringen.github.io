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
runAtoi = ()=>{
    input = document.getElementById('myAtoi-input').value;
    output = document.getElementById('myAtoi-output');
    outer = document.getElementById('myAtoi-outer');
    outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
    setTimeout(()=>{
        outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
    }, 400)
    output.innerHTML = '';
    document.getElementById('myAtoi-input').value = '';
    output.innerHTML += myAtoi(input); 
}
