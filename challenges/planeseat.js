function planeSeat(a){
    let a1 = 0;
    let a2 = 0;
    let position = 'Your seat is located in the ';
    a = a.split('');
    if(a.length === 2){
        a1 = Number(a[0]);
        a2 = a[1];
    }else{
        a1 = Number(a[0]+a[1]);
        a2 = a[2].toUpperCase();
    }
    if (a1 < 21){
        position += 'Front';
    }else if (a1>20 && a1<41){
        position += 'Middle';
    }else if (a1>40 && a1<61){
        position += 'Back';
    }else {
        position = 'No Seat!!';
    }
    if (a1<61){
        if (a2 === 'A' || a2 === 'B' || a2 === 'C'){
            position += '-Left of the plane';
        }else if(a2 === 'D' || a2 === 'E' || a2 === 'F'){
            position += '-Middle of the plane';
        }else if(a2 === 'G' || a2 === 'H' || a2 === 'K'){
            position += '-Right of the plane';
        }else {
            position = 'No Such Seat!!';
        }
    }else {
        position = 'No Such Seat!!';
}
    return `Row:${a1} Seat:${a2} ${position}`;
}
runPlaneSeat = ()=>{
    input = document.getElementById('planeSeat-input').value;
    output = document.getElementById('planeSeat-output');
    outer = document.getElementById('planeSeat-outer');
    outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
    setTimeout(()=>{
        outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
    }, 400)
    output.innerHTML = ''; 
    document.getElementById('planeSeat-input').value = '';
    output.innerHTML += planeSeat(input);
}
