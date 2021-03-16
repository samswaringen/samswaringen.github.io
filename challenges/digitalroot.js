


function digital_root(n) {
    n = n.toString();
    n = n.split('');
    if(n.length === 1){
        return Number(n);
    }else{
        let newTotal = 0;
        for(let i =0;i<n.length; i++){
            newTotal += Number(n[i]);
        }
        if(newTotal > 9){
            newTotal = newTotal.toString();
            newTotal = newTotal.split('');
            let newerTotal =0;
            for(let i =0; i<newTotal.length; i++){
                newerTotal += Number(newTotal[i]);
            }
            if(newerTotal < 9){
            return newerTotal
            }else {
                newerTotal = newerTotal.toString();
                newerTotal = newerTotal.split('');
                let newestTotal =0;
                for(let i =0; i<newerTotal.length; i++){
                    newestTotal += Number(newerTotal[i]);
                }
                return newestTotal;
            }
        }
        return newTotal;
    }
}
runDigital = ()=>{
    input = Number(document.getElementById('digital-input').value);
    output = document.getElementById('digital-output');
    outer = document.getElementById('digital-outer');
    outer.style.backgroundColor = 'white';
    outer.style.textShadow = '1px 1px 1px red, 2px 2px 1px orange, 3px 3px 1px yellow, 4px 4px 1px green, 5px 5px 1px blue';
    setTimeout(()=>{
        outer.style.backgroundColor = 'black';
        outer.style.textShadow = '-1px 1px 1px white, 1px -1px 1px white, -1px -1px 1px white, 1px 1px 1px white';
    }, 400)
    output.innerHTML = '';
    output.innerHTML += digital_root(input);
}
