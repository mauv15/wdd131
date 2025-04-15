// Year update in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Region filter
document.getElementById("region-filter").addEventListener("change", function () {
  const selected = this.value;
  const cards = document.querySelectorAll(".temple-card");

  cards.forEach(card => {
    if (selected === "all" || card.dataset.region === selected) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
