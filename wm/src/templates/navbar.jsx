const Navbar = () => {
  return (
    <>
      <nav id="navbar" class="navbar navbar-expand-lg sticky-sm-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="assets/logo.png" alt="Bootstrap" width="50" height="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#destination">
                  Destination
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#galeri">
                  Galeri
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
