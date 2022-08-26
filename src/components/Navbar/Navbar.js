export const Navbar = () => {
  const Navbar = document.createElement("nav");

  Navbar.setAttribute("class", "Navbar");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) Navbar.classList.add("nav-scrolling");
    else Navbar.classList.remove("nav-scrolling");
  });

  Navbar.innerHTML = `
                      <h1 class="logo">Logo</h1>

                      <div class="toggle">
                          <i class="fa fa-angle-down"></i>
                      </div>

                      <div class="nav-menu">
                          <ul class="nav-list">
                              <li class="nav-item"><a href="#home" class="nav-link">Início</a></li>
                              <li class="nav-item"><a href="#services" class="nav-link">Serviços</a></li>
                              <li class="nav-item"><a href="#tech" class="nav-link">Tecnologias</a></li>
                          </ul>
                      </div>

                      <div class="nav-menu-mobile">
                          <ul class="nav-list-mobile">
                              <li class="nav-item-mobile"><a href="#home" class="nav-link-mobile">Início</a></li>
                              <li class="nav-item-mobile"><a href="#services" class="nav-link-mobile">Serviços</a></li>
                              <li class="nav-item-mobile"><a href="#tech" class="nav-link-mobile">Tecnologias</a></li>
                          </ul>
                      </div>
                  `;

  return Navbar;
};
