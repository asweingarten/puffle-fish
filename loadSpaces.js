fetch('/spaces')
  .then(res => res.json())
  .catch(error => console.error(`Error: ${error}`))
  .then(response => {
    console.log(response);
    addSpaces(response);
  })

function addSpaces(spaceNames) {
  spaceNames.forEach(s => {
    const div = document.createElement('div');
    div.classList.add('space');
    div.innerHTML = `<h2>  <a href="${s}"> ${s}</a> </h2>`;
    spaces.appendChild(div);
  })
}
