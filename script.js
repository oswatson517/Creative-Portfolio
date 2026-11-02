/*
Title: One-page navigation
Description: Shows the selected section when a navigation button is clicked.
Name: Olivia Watson | Date: November 1, 2026
*/

// Find all navigation buttons and all page sections.
const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

// Add a click event to each navigation button.
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Read the name of the section connected to the clicked button.
    const targetPage = button.dataset.page;

    // Remove the active style from every button, then highlight the clicked one.
    buttons.forEach(btn => {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    });
    button.classList.add("active");
    button.setAttribute("aria-current", "page");

    // Show the section whose ID matches the button's data-page value.
    pages.forEach(page => {
      page.classList.toggle("active", page.id === targetPage);
    });
  });
});
