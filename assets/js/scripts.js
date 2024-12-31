const ul = document.querySelector("ul");
const lis = ul.querySelectorAll("li");
const as = ul.querySelectorAll("a");

ul.addEventListener("click", function(event) {
  const target = event.target.closest("li");
  if (!target) return;

  lis.forEach(li => li.classList.remove("active"));
  as.forEach(a => a.classList.remove("active-text"));

  target.classList.add("active");
  target.querySelector("a").classList.add("active-text");
});