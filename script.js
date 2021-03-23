
document.getElementById('leftDiv').addEventListener('mouseover', ()=>{
    document.getElementById('board').style.transform = 'rotate(20deg)';
    document.getElementById('board').style.transform = 'rotate(10deg)';
    document.getElementById('board').style.transform = 'rotate(20deg)';
})
document.getElementById('leftDiv').addEventListener('mouseleave', ()=>{
    document.getElementById('board').style.transform = 'rotate(0deg)';
})
document.getElementById('rightDiv').addEventListener('mouseover', ()=>{
    document.getElementById('aboutme').style.transform = 'rotate(-20deg)';
})
document.getElementById('rightDiv').addEventListener('mouseleave', ()=>{
    document.getElementById('aboutme').style.transform = 'rotate(0deg)';
})
document.getElementById('nav-container').classList.add('navbar-light');
