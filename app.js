function addNote() {
  const note = document.getElementById("note").value;
  if (note === "") return;

  const li = document.createElement("li");
  li.textContent = note;
  document.getElementById("notes").appendChild(li);

  document.getElementById("note").value = "";
}
