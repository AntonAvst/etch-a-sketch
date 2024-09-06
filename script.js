function createTwoDivs() {
  // Create first div
  const firstDiv = document.createElement("div");
  firstDiv.textContent = "This is the first div!";
  firstDiv.classList.add("flex-item");

  // Create second div
  const secondDiv = document.createElement("div");
  secondDiv.textContent = "This is the second div!";
  secondDiv.classList.add("flex-item");

  // Append the new divs to the container div
  const container = document.getElementById("container");
  container.appendChild(firstDiv);
  container.appendChild(secondDiv);
}
