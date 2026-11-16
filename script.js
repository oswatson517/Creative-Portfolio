
// Get all navigation buttons
const buttons = document.querySelectorAll("nav button");

// Get all portfolio pages
const pages = document.querySelectorAll(".page");

// Go through each navigation button
buttons.forEach(button => {

  button.addEventListener("click", () => {

    // Get the page connected to the button
    const targetPage = button.dataset.page;

    // Remove the active style from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    });

   
    button.classList.add("active");
    button.setAttribute("aria-current", "page");

  
    pages.forEach(page => {

      if (page.id === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});
