makeSign = ()=>{
    let sign = document.createElement('img');
    sign.src = 'comingsoon.png';
    sign.classList = 'sign';
    sign.style.position = 'absolute';
    sign.style.height = '100px';
    sign.style.width = '200px';
    let signX = Math.random()*100;
    let signY = Math.random()*100;
    sign.style.top = signX + '%';
    console.log(sign.style.top);
    sign.style.left = signY + '%';
    console.log(sign.style.left);
    document.getElementById('signArea').appendChild(sign);
    setTimeout(makeSign,1000)
}
setTimeout(makeSign(),1000)