(function () {
  const form = document.getElementById("add-form");
  const winesEl = document.getElementById('wines');

  const addWineNode = (wine) => {
    const wineNode = document.createElement('div');
    wineNode.innerHTML = `- Name: ${wine.name}, grape: ${wine.grape}, rating: ${wine.rating}`;
    winesEl.appendChild(wineNode);
  }

  const storedWinesJson = window.localStorage.getItem('wines');
  const allWines = JSON.parse(storedWinesJson || '[]');
  allWines.forEach(wine => {
    addWineNode(wine);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const wine = Object.fromEntries(formData);
    
    addWineNode(wine);
    allWines.push(wine);
    e.target.reset();
    window.localStorage.setItem('wines', JSON.stringify(allWines));
  });

  const enforceMinMax = (el) => {
    if (el.value !== "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  };

  const rating = document.getElementById('rating');
  rating.addEventListener('onchange', (el) => {
    enforceMinMax(el);
  });
})();