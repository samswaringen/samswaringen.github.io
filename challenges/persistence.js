function persistence(num) {
    let persCount = 0; 
    multiply = ()=>{
      num= num.toString();
      num = num.split('');
      let total = 1;
      for(let i = 0; i< num.length; i++){
        total*= num[i];
      }
      num = total;
      persCount++;
      console.log(`Run${persCount}:${num}`);
      return num;
    }
  while (num > 9){
    multiply();  
  }
  return `Total amount of runs: ${persCount}<br>Your final number is: ${num}`
}

runPersist = ()=>{
  input = document.getElementById('persist-input').value;
  output = document.getElementById('persist-output');
  outer = document.getElementById('persist-outer');
  outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
  setTimeout(()=>{
      outer.style.textShadow = 'none';
  }, 400)
  output.innerHTML = '';
  document.getElementById('persist-input').value = '';
  output.innerHTML += persistence(input);
}
