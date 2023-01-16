function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
  linkItem.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      linkItem.classList.add("active");
  })
})
