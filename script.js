function showMessage(event) {
  event.preventDefault();

  const message = document.getElementById("message");
  message.textContent = "Add your GitHub or LinkedIn link here.";
}
