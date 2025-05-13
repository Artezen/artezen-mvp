document.getElementById("onboardingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const goal = document.getElementById("goal").value;
  const values = Array.from(document.querySelectorAll("input[name=value]:checked")).map(i => i.value);
  localStorage.setItem("goal", goal);
  localStorage.setItem("values", JSON.stringify(values));
  alert("Saved! Now build session page to continue.");
});