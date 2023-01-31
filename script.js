const btn = document.querySelector(".btn");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((r) => r.json())
    .then((json) => {
      const advice = json.slip.advice;
      document.querySelector("p").innerHTML = advice;
      document.querySelector(".container-advice").classList.add("active");
    })
    .catch((error) => {
      console.log(error);
    });
  setTimeout(addTranslateButton, 800);
};

const addTranslateButton = () => {
  const lastDiv = document.querySelector(".translate");
  if (lastDiv) {
    document.querySelector(".container").removeChild(lastDiv);
  }
  const p = document.querySelector("p");
  const div = document.createElement("div");
  div.classList.add("translate");
  div.innerHTML = `<a href="https://translate.google.com.br/?hl=pt-BR&sl=en&tl=pt&text=${p.innerText}&op=translate" target="_blank">Traduzir texto</a>`;
  document.querySelector(".container").appendChild(div);
};

btn.addEventListener("click", getAdvice);
