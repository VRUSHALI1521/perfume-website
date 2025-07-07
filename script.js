document.getElementById("search-btn").onclick = function () {
  const box = document.getElementById("search-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
};


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('span').textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      header.querySelector('span').textContent = '-';
    }
  });
});





