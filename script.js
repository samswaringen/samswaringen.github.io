let portfolioImg = document.getElementById('aside-left');
let cabinetSrc = document.getElementById('gifDiv');
portfolioImg.addEventListener('mouseenter', ()=>{
    cabinetSrc.style.backgroundImage = 'url(cabinet.gif)';
})
portfolioImg.addEventListener('mouseout', ()=>{
    cabinetSrc.style.backgroundImage = 'url(cabinet_closed.jpg)';
})