
let iframeDiv = document.getElementById('iframeDiv');
let newFrame = document.getElementById('newFrame');
let innerFrame = document.getElementById('inner-Frame');

for(let i = 0; i<10; i++){
    let targetDiv = document.getElementById(`extend${i}`);
    targetDiv.onmouseover = targetDiv.onmouseout = handleFile;
}

function handleFile(event){
    let name = event.target.id;
    let number = Number(name.split('d').pop());
    if(number <= 9){
        file = document.getElementById(`file${number}`);
        fileTop = parseInt(file.style.top);
    }else {
        file = document.getElementById(`file9`);
        fileTop = parseInt(file.style.top); 
    }
    let namedDiv =document.getElementById(`${name}`);
    let linkDiv = document.getElementById(`link${number}`)
    let lastLink = document.getElementById('link9'); 
    let height = parseInt(linkDiv.style.height);
    let top = parseInt(namedDiv.style.top);
    let expandTop = parseInt(lastLink.style.top);
    let website = document.getElementById(`website${number}`);

    fixNamedBorder = () => {
        linkDiv.style.borderBottom = 'none';
        linkDiv.style.borderRadius = '5px 5px 0px 0px';
        linkDiv.style.lineHeight = '29px';
        
    }
    fixLastBorder = () => {
        lastLink.style.borderBottom = '2px solid black';
        lastLink.style.borderRadius = '5px';
    }
    fixIFrame = () => {
        newFrame.style.height = '683px';
        newFrame.style.width = '550px';
        innerFrame.style.top = '33px';
        innerFrame.style.left = '870px';
    }
    fixZ = ()=>{
        let fileZ = Number(file.style.zIndex);
        let fixLink = document.getElementById(`link${number-1}`);
        if (fileZ === number + 2){
          if(number != 0){  
            fixLink.style.zIndex = number +2;
          }
          if( number <9){
          fixFile = document.getElementById(`file${number+1}`);
          fixFile.style.zIndex = number + 1; 
          } 
          file.style.zIndex = number;
        }else{
          fileZ = number + 2;
          file.style.zIndex = fileZ;
            if(number != 0){
                fixLink.style.zIndex = number;
            }
          if(number<9){
          fixFile = document.getElementById(`file${number+1}`);
          fixFile.style.zIndex = number + 2;
          }
        }  
    }
    readMeDiv = async ()=>{
        let readMe = document.createElement('div');
        readMe.classList = 'links';
        readMe.id = 'readMe';
        readMe.style.top = parseInt(linkDiv.style.top) + 55;
        readMe.style.transition = '.1s .1s';
        readMe.style.left = '285px'
        readMe.style.width = '340px';
        readMe.style.height = '115px';
        readMe.style.zIndex = number + 2;
        readMe.innerHTML = await getReadMe();
        document.getElementById('folders').appendChild(readMe);
    }
    async function getReadMe(){
        const url = document.getElementById(`website${number}`) + '/README.md';
        const response = await fetch(url);
        const text = await response.text();
        return text;
    }
    removeReadMe = ()=>{
        setTimeout(()=>{
            readMe.style.top = parseInt(readMe.style.top)+ 82; 
        },100)     
        setTimeout(()=> {
            document.getElementById('readMe').remove();
            },100);
    }
    extendDivUp = ()=>{
        let extDiv = document.getElementById(`extend${number}`)
        extWidth = parseInt(extDiv.style.width);
        console.log(extWidth);
        extWidth += 500;
        extDiv.style.width = extWidth + 'px';
        extTop = parseInt(extDiv.style.top);
        extTop -= 100;
        extDiv.style.top = extTop + 'px';
        extHeight = parseInt(extDiv.style.height);
        extHeight += 125;
        extDiv.style.height = extHeight + 'px';
    }
    extendDivDown = ()=>{
        let extDiv = document.getElementById(`extend${number}`)
        extWidth = parseInt(extDiv.style.width);
        extWidth -= 500;
        extDiv.style.width = extWidth + 'px';
        extTop = parseInt(extDiv.style.top);
        extTop += 100;
        extDiv.style.top = extTop + 'px';
        extHeight = parseInt(extDiv.style.height);
        extHeight -= 100;
        extDiv.style.height = extHeight + 'px';
    }
    fix9 = ()=>{
        document.getElementById('file9').style.zIndex = 12;
        expandTop -= 50;
        newFrame.style.height = '585px';
        newFrame.style.width = '457px';
        innerFrame.style.top = '80px';
        innerFrame.style.left = '918px';
        iframeDiv.style.background = `url('frame.jpg')`;
        iframeDiv.style.backgroundSize = '660px 776px';
        iframeDiv.style.backgroundPosition = '-40px -32px';
        iframeDiv.style.animation = 'none';
    }
    if(event.type == 'mouseover'){
        if(number === 8){
            readMeDiv();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            extendDivUp();
            fixIFrame();
            height += 25;
            linkDiv.style.borderBottom = '5px dotted white';
            linkDiv.style.borderRadius = '5px 5px 5px 5px';
            linkDiv.style.lineHeight = '58px';
            iframeDiv.style.background = 'linear-gradient(#14ffe9, #ffeb3b, #ff00e0)';
            iframeDiv.style.animation = 'rotate 1.5s linear infinite'
        }if(number === 9){
            readMeDiv();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            extendDivUp()
            fixIFrame();
            fixLastBorder();
            fix9();
        }if (number === 7){
            readMeDiv();
            extendDivUp();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            fixIFrame();
             height += 32;
             linkDiv.style.fontSize = '22px'
             linkDiv.style.lineHeight = '58px';
             linkDiv.style.borderRadius = '5px';
             linkDiv.style.borderBottom = '2px solid black';
             iframeDiv.style.background = ' center / contain repeat url(wallpaper.jpg)';
             iframeDiv.style.animation = 'none';
        }if (number === 6){
            readMeDiv();
            extendDivUp();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            fixIFrame();
            iframeDiv.style.background = `url('chalkboard_frame.jpg')`;
            iframeDiv.style.backgroundSize = '635px 769px';
            iframeDiv.style.backgroundPosition = '-33px -30px';
            iframeDiv.style.animation = 'none';
            newFrame.style.border = 'none';
            height += 32;
            linkDiv.style.fontSize = '18px'
            linkDiv.style.lineHeight = '58px';
            linkDiv.style.borderRadius = '5px';
            linkDiv.style.borderBottom = '2px solid black';
        }if (number === 5){
            readMeDiv();
            extendDivUp();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            fixIFrame();
             height += 32;
             linkDiv.style.lineHeight = '58px';
             linkDiv.style.borderRadius = '5px';
             linkDiv.style.borderBottom = '2px solid black';
             iframeDiv.style.background = ' center / contain repeat url(wallpaper.jpg)';
             iframeDiv.style.animation = 'none';
        }if(number<5){
            readMeDiv();
            extendDivUp();
            setTimeout(()=>{
                readMe.style.top = parseInt(readMe.style.top)-82;
            },100);
            fixIFrame();
             height += 32;
             linkDiv.style.fontSize = '22px'
             linkDiv.style.lineHeight = '58px';
             linkDiv.style.borderRadius = '5px';
             linkDiv.style.borderBottom = '2px solid black';
             iframeDiv.style.background = ' center / contain repeat url(wallpaper.jpg)';
             iframeDiv.style.animation = 'none';
        }
     fixZ();
     lastLink.style.top = expandTop + 'px';  
     linkDiv.style.height = height + 'px';
     top -= 100;
     linkDiv.style.top = top + 'px';
     fileTop -= 100;
     file.style.top = fileTop + 'px';
     document.getElementById('newFrame').src = website; 
}
    if(event.type == 'mouseout'){
        if(number === 8){
            removeReadMe();
            extendDivDown();
            height -=25;
            fixNamedBorder();
        }if(number === 9){
            removeReadMe();
            extendDivDown();
            fixLastBorder();
            setTimeout(()=>{
            document.getElementById('file9').style.zIndex = 9;
            },300);
            expandTop +=50;
        }if (number === 7){
            removeReadMe();
            height -= 32;
            extendDivDown();
            linkDiv.style.fontSize = '18px';
            fixNamedBorder();
            fixLastBorder(); 
        }if (number === 6){
            removeReadMe();
            height -= 32;
            extendDivDown();
            linkDiv.style.fontSize = '15px';
            fixNamedBorder();
            fixLastBorder();
        }if (number === 5){
            removeReadMe();
         height -= 32;
         extendDivDown();
         fixNamedBorder();
         fixLastBorder();
        }if (number < 5) {
         removeReadMe();
         height -= 32;
         extendDivDown();
         linkDiv.style.fontSize = '18px';
         fixNamedBorder();
         fixLastBorder();
        }
      fixZ();
      lastLink.style.top = expandTop + 'px'; 
      linkDiv.style.height = height + 'px';
      top += 100;
      linkDiv.style.top = top + 'px';
      fileTop += 100;
      file.style.top = fileTop + 'px'; 
}
}
moveFolders = ()=>{
    let top = 45;
    setTimeout(()=>{
    for(let i=1;i<10;i++){
        let folder = document.getElementById(`file${i}`);
        let link = document.getElementById(`link${i}`);
        let extend = document.getElementById(`extend${i}`);
        let folderTop = parseInt(folder.style.top) + (top*i);
        let linkTop = parseInt(link.style.top) + (top*i);
        let extendTop = parseInt(extend.style.top) + (top*i);
        folder.style.top = folderTop;
        link.style.top = linkTop;
        extend.style.top = extendTop;
    } 
}, 100); 
    setTimeout(()=>{
        for(let i=0;i<10;i++){
        let folder = document.getElementById(`file${i}`);
        let link = document.getElementById(`link${i}`);
        folder.style.transition = 'top .1s .2s';
        link.style.transition = '.1s .2s';  
        }  
    },1100)   
}
setTimeout(()=>{
    window.onload = moveFolders();
},200);