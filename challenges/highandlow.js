
function highAndLow(numbers){
    numbers = numbers.split('');
    numbers.sort((a,b)=>{
      return b -a;
    });
  return `High: ${numbers[0]} Low: ${numbers[numbers.length -1]}`
  }

  console.log(highAndLow('3461349363'));
  console.log(highAndLow('20864'))