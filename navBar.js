addNavBar = ()=>{
    let navDiv = document.getElementById('navBarDiv');
    navDiv.innerHTML = `<nav id = 'nav-container' class="navbar navbar-expand-lg">
    <div class="container-fluid" id = 'navBar'>
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" onfocus = 'fixZInd()' aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href='https://samswaringen.github.io/'>Home</a>
         </li>
          <li class="nav-item">
            <a class="nav-link" href='https://samswaringen.github.io/portfolio%20webpage'>Project Landing Page</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu" id = 'dropdownPro' aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" id = 'painter' href='https://samswaringen.github.io/week3'>Random Painter</a></li>
              <li><a class="dropdown-item" id = 'eraser' href='https://samswaringen.github.io/week4'>PacMan Eraser</a></li>
              <li><a class="dropdown-item" id = 'tracker' href="https://samswaringen.github.io/bustracker">Bus Tracker</a></li>
              <li><a class="dropdown-item" id = 'challenges' href="https://samswaringen.github.io/challenges">Coding Challenges</a></li>
              <li><a class="dropdown-item" id = 'eyes' href="https://samswaringen.github.io/eyes">EYES</a></li>
            </ul>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GitHub Links
          </a>
            <ul class="dropdown-menu" id = 'dropdownGit' aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" id = 'portfolio-git' href='https://github.com/samswaringen/samswaringen.github.io/tree/main/portfolio%20webpage'>Project Portfolio GitHub</a></li>
              <li><a class="dropdown-item" id = 'painter-git' href='https://github.com/samswaringen/samswaringen.github.io/tree/main/week3'>Random Painter Github</a></li>
              <li><a class="dropdown-item" id = 'eraser-git' href='https://github.com/samswaringen/samswaringen.github.io/tree/main/week4'>PacMan Eraser Github</a></li>
              <li><a class="dropdown-item" id = 'tracker-git' href="https://github.com/samswaringen/samswaringen.github.io/tree/main/bustracker">Bus Tracker GitHub</a></li>
              <li><a class="dropdown-item" id = 'challenges-git' href="https://github.com/samswaringen/samswaringen.github.io/tree/main/challenges">Coding Challenges GitHub</a></li>
              <li><a class="dropdown-item" id = 'eyes-git' href="https://github.com/samswaringen/samswaringen.github.io/tree/main/eyes">EYES GitHub</a></li>
            </ul>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
}
window.onload = addNavBar();