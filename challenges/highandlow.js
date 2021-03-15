
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
  output.innerHTML = 'Answer: ';
  output.innerHTML += highAndLow(input);
}
  console.log(highAndLow('3461349363'));
  console.log(highAndLow('20864'))