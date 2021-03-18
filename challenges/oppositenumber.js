function opposite(number) {
    //your code here
    if(number < 0){
      number = Math.abs(number);
      return number;
    }else {
      number = number - (number*2);
      return number;
    }
  }
  runOpposite = ()=>{
    input = Number(document.getElementById('opposite-input').value);
    document.getElementById('opposite-input').onfocusout = "this.value = 'Enter Number'";
    output = document.getElementById('opposite-output');
    outer = document.getElementById('opposite-outer');
    outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
    setTimeout(()=>{
        outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
    }, 400)
    output.innerHTML = '';
    document.getElementById('opposite-input').value = '';
    output.innerHTML += opposite(input);
  }
