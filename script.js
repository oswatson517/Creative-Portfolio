
const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
  button.addEventListener("click", () => {
   
    const targetPage = button.dataset.page;

    buttons.forEach(btn => {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    });
    button.classList.add("active");
    button.setAttribute("aria-current", "page");

    pages.forEach(page => {
      page.classList.toggle("active", page.id === targetPage);
    });
  });
});
