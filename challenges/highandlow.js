
function highAndLow(numbers){
    numbers = numbers.split('');
    numbers.sort((a,b)=>{
      return b -a;
    });
  return `High: ${numbers[0]} Low: ${numbers[numbers.length -1]}`
  }
runHighLow=()=>{
  input = document.getElementById('highlow-input').value;
  output = document.getElementById('highlow-output');
  outer = document.getElementById('highlow-outer');
  outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
  setTimeout(()=>{
      outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
  }, 400)
  output.innerHTML = '';
  document.getElementById('highlow-input').value = '';
  output.innerHTML += highAndLow(input);
}
