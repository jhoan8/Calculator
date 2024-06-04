const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (pantalla.textContent == "0") {
      pantalla.textContent = botonApretado;
    }
    if (boton.id == "c") {
      pantalla.textContent = "0";
      return;
    }
    if (boton.id == "borrar") {
      if (pantalla.textContent.length == 1) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }

      return;
    } else {
      pantalla.textContent += botonApretado;
    }
    try {
      if (boton.id == "igual") {
        pantalla.textContent = eval(pantalla.textContent);
      }
    } catch (error) {
      pantalla.textContent = "Error!";
    }
  });
});
