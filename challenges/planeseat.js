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
        a2 = a[2];
    }
    console.log(`Row:${a1}`);
    console.log(`Seat:${a2}`);
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
    return position;
}
console.log(planeSeat('2B'));
console.log(planeSeat('22K'));
console.log(planeSeat('32I'));