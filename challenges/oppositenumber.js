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
  console.log(opposite(-56));
  console.log(opposite(4567));
  console.log(opposite(0));