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
    output = document.getElementById('opposite-output');
    output.innerHTML = 'Answer: ';
    output.innerHTML += opposite(input);
  }
  console.log(opposite(-56));
  console.log(opposite(4567));
  console.log(opposite(0));