function skillsMember() {
  const member = document.querySelector(".member");
  const skills = document.querySelector(".skills");
  const close = document.querySelector(".close");
  const skillsList = document.querySelector(".skills__list");

  member.addEventListener("click", () => {
    skills.classList.add("skills--active");
  });

  close.addEventListener("click", () => {
    skills.classList.remove("skills--active");
  });

  skillsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("skills__item")) {
      const currentActive = document.querySelector(".skills__item--active");
      currentActive.classList.remove("skills__item--active");
      e.target.classList.add("skills__item--active");
    }
  });
}