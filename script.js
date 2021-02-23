
let iframeDiv = document.getElementById('iframeDiv');
let newFrame = document.getElementById('newFrame');
let innerFrame = document.getElementById('inner-Frame');

for(let i = 0; i<11; i++){
    let targetDiv = document.getElementById(`link${i}`);
    targetDiv.onmouseover = targetDiv.onmouseout = handleFile;
}

function handleFile(event){
    let name = event.target.id;
    let number = Number(name.split('k').pop());
    if(number <= 9){
        file = document.getElementById(`file${number}`);
        fileTop = parseInt(file.style.top);
    }else {
        file = document.getElementById(`file9`);
        fileTop = parseInt(file.style.top); 
    }
    let namedDiv =document.getElementById(`${name}`);
    let lastLink = document.getElementById('link9'); 
    let height = parseInt(namedDiv.style.height);
    let top = parseInt(namedDiv.style.top);
    let expandTop = parseInt(lastLink.style.top);
    let website = document.getElementById(`website${number}`);
    fixNamedBorder = () => {
        namedDiv.style.borderBottom = 'none';
        namedDiv.style.borderRadius = '5px 5px 0px 0px';
        namedDiv.style.lineHeight = '29px';
        
    }
    fixLastBorder = () => {
        lastLink.style.borderBottom = '2px solid black';
        lastLink.style.borderRadius = '5px';
    }
    fixIFrame = () => {
        newFrame.style.height = '683px';
        newFrame.style.width = '550px';
        innerFrame.style.top = '33px';
        innerFrame.style.left = '890px';
    }
    if(event.type == 'mouseover'){
        if(number === 8){
            fixIFrame();
            height += 41 ;
            namedDiv.style.borderBottom = '5px dotted white';
            namedDiv.style.borderRadius = '5px 5px 5px 5px';
            namedDiv.style.lineHeight = '68px';
            iframeDiv.style.background = 'linear-gradient(#14ffe9, #ffeb3b, #ff00e0)';
            iframeDiv.style.animation = 'rotate 1.5s linear infinite'
        } if(number === 9){
            fixIFrame();
            fixLastBorder();
            expandTop -= 50;
            newFrame.style.height = '585px';
            newFrame.style.width = '457px';
            innerFrame.style.top = '80px';
            innerFrame.style.left = '938px';
            iframeDiv.style.background = `url('frame.jpg')`;
            iframeDiv.style.backgroundSize = '660px 776px';
            iframeDiv.style.backgroundPosition = '-40px -32px';
            iframeDiv.style.animation = 'none';
        }if(number === 10){
            fixLastBorder();
            height += 50;
            expandTop -= 50;
            newFrame.style.height = '585px';
            newFrame.style.width = '457px';
            innerFrame.style.top = '80px';
            innerFrame.style.left = '938px';
            iframeDiv.style.background = `url('frame.jpg')`;
            iframeDiv.style.backgroundSize = '660px 776px';
            iframeDiv.style.backgroundPosition = '-40px -32px';
            iframeDiv.style.animation = 'none';
        }else if(number<8){
            fixIFrame();
             height += 41;
             namedDiv.style.fontSize = '25px'
             namedDiv.style.lineHeight = '68px';
             namedDiv.style.borderRadius = '5px';
             namedDiv.style.borderBottom = '2px solid black';
             iframeDiv.style.background = ' center / contain repeat url(wallpaper.jpg)';
             iframeDiv.style.animation = 'none';
        }
     lastLink.style.top = expandTop + 'px';  
     namedDiv.style.height = height + 'px';
     top -= 50;
     namedDiv.style.top = top + 'px';
     fileTop -= 50;
     file.style.top = fileTop + 'px';
     document.getElementById('newFrame').src = website; 
}
    if(event.type == 'mouseout'){
        if(number === 8){
            height -=41;
            fixNamedBorder();
        }if(number === 9){
            fixLastBorder();
            expandTop +=50;
        }if(number === 10){
            fixLastBorder();
            height -=50;
            expandTop +=50;
        }else if (number < 8) {
             height -= 41;
             namedDiv.style.fontSize = '18px';
             fixNamedBorder();
             fixLastBorder();
        }
      lastLink.style.top = expandTop + 'px'; 
      namedDiv.style.height = height + 'px';
      top += 50;
      namedDiv.style.top = top + 'px';
      fileTop += 50;
      file.style.top = fileTop + 'px'; 
}
}