
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
runLikes = ()=>{
    input = document.getElementById('likes-input').value;
    inputArr = input.split(' ');
    output = document.getElementById('likes-output');
    outer = document.getElementById('likes-outer');
    outer.style.backgroundColor = 'white';
    outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
    setTimeout(()=>{
        outer.style.backgroundColor = 'black';
        outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
    }, 400)
    output.innerHTML ='';
    output.innerHTML += likes(inputArr);
}   
