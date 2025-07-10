function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

const namesData = [
  { name: "Aarav", gender: "male", origin: "indian", meaning: "Peaceful" },
  { name: "Luna", gender: "female", origin: "latin", meaning: "Moon" },
  { name: "Alex", gender: "unisex", origin: "greek", meaning: "Defender of mankind" },
  { name: "Noah", gender: "male", origin: "hebrew", meaning: "Rest" },
  { name: "Zara", gender: "female", origin: "arabic", meaning: "Princess" },
];

function displayResults(filteredNames) {
  const resultsContainer = document.querySelector(".results-grid");
  resultsContainer.innerHTML = "";

  if (filteredNames.length === 0) {
    resultsContainer.innerHTML = "<p>No matching names found.</p>";
    return;
  }

  filteredNames.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "name-card";
    card.innerHTML = `
      <h3>${entry.name}</h3>
      <p><strong>Gender:</strong> ${entry.gender}</p>
      <p><strong>Origin:</strong> ${entry.origin}</p>
      <p><strong>Meaning:</strong> ${entry.meaning}</p>
    `;
    resultsContainer.appendChild(card);
  });
}  

document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector('input[name="name"]').value.toLowerCase();
  const gender = document.querySelector('select[name="gender"]').value.toLowerCase();
  const origin = document.querySelector('select[name="origin"]').value.toLowerCase();
  const startsWith = document.querySelector('select[name="startsWith"]').value.toLowerCase();

  const filtered = namesData.filter((item) => {
    return (
      (nameInput === "" || item.name.toLowerCase().includes(nameInput)) &&
      (gender === "" || item.gender === gender) &&
      (origin === "" || item.origin === origin) &&
      (startsWith === "" || item.name.toLowerCase().startsWith(startsWith))
    );
  });

  displayResults(filtered);
});