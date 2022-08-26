export const Main = () => {
  const Main = document.createElement("main");

  Main.setAttribute("class", "Main");

  Main.innerHTML = `
                    <section class="first-section" id="home">
                      <div class="img-first-section">
                          <img src="/public/images/development.svg" alt="Imagem de um homem no seu computador." />
                      </div>
                      <div class="title-first-section">
                          <h1>Isso é <span>&#60App /&#62</span>.</h1>
                          <h4>Uma fábrica de software.</h4>
                      </div>
                    </section>
                  `;

  return Main;
};
