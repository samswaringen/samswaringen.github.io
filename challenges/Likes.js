
function likes(names) {
    // TODO
        if(names.length < 1){
            return 'no one likes this';
        }else if(names.length < 2){
            return `${names[0]} likes this`;
        }else if(names.length < 3){
            return `${names[0]} and ${names[1]} like this`;
        }else if(names.length < 4){
            let likeList = `${names[0]}, `;
            for( let i = 1; i < names.length -1; i++){
                likeList += `${names[i]} `;
            }
            likeList += `and ${names[names.length-1]} like this`
            return likeList
        }else {
            return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
        }
  }

  console.log(likes(['Sam']));
  console.log(likes(['Sam', 'Kayleigh']));
  console.log(likes(['Sam', 'Kayleigh', 'Lilly']));
  console.log(likes(['Sam', 'Kayleigh', 'Lilly', 'Buddy']));
  console.log(likes(['Sam','Kayleigh', 'Lilly', 'Buddy', 'Anne']));