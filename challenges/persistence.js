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
  return `Total amount of runs: ${persCount}`
}
console.log(persistence(399));
console.log(persistence(7398));