addNavBar = ()=>{
    let navDiv = document.getElementById('navBarDiv');
    navDiv.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://samswaringen.github.io">Where to?</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" onfocus = 'fixZInd()' aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://samswaringen.github.io">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='https://samswaringen.github.io/default%20page/aboutme.html'>About Me</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu" id = 'dropdown' aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href='https://samswaringen.github.io/week3'>Random Painter</a></li>
              <li><a class="dropdown-item" href='https://samswaringen.github.io/week4'>PacMan Eraser</a></li>
              <li><a class="dropdown-item" href="https://samswaringen.github.io/bustracker">Bus Tracker</a></li>
              <li><a class="dropdown-item" href="https://samswaringen.github.io/challenges">Coding Challenges</a></li>
              <li><a class="dropdown-item" href="https://samswaringen.github.io/eyes">EYES</a></li>
            </ul>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GitHub Links
          </a>
            <ul class="dropdown-menu" id = 'dropdown' aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href='https://github.com/samswaringen/samswaringen.github.io/tree/main/week3'>Random Painter Github</a></li>
              <li><a class="dropdown-item" href='https://github.com/samswaringen/samswaringen.github.io/tree/main/week4'>PacMan Eraser Github</a></li>
              <li><a class="dropdown-item" href="https://github.com/samswaringen/samswaringen.github.io/tree/main/bustracker">Bus Tracker GitHub</a></li>
              <li><a class="dropdown-item" href="https://github.com/samswaringen/samswaringen.github.io/tree/main/challenges">Coding Challenges GitHub</a></li>
              <li><a class="dropdown-item" href="https://github.com/samswaringen/samswaringen.github.io/tree/main/eyes">EYES GitHub</a></li>
            </ul>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
}
window.onload = addNavBar();