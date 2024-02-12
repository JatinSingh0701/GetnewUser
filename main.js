let Cards = document.querySelector("#parent");
let btn = document.querySelector("#getNewCard");

const getNewUser = () => {
  fetch("https://randomuser.me/api/")
    .then((raw) => raw.json())
    .then((result) => {
      const { name, email, gender, picture } = result.results[0];
      Cards.innerHTML += `
        <div class="card w-60 p-4 rounded-xl bg-zinc-800">
          <div class="w-16 h-16 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
          <img class="w-full h-full object-cover" src="${picture.large}" alt="">
          </div>
          <h3 class="font-semibold text-2xl">${name.first} ${name.last}</h3> 
          <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
          <h6 class="opacity-60">${email}</h6>
          <p class="mt-5 text-xs font-semibold opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur aspernatur dolore incidunt dolor.
          </p>
        </div>`;
    });
};

btn.addEventListener("click", () => {
  getNewUser();
});
