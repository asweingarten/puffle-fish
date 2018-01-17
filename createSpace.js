function createSpace() {
  const spaceName = document.querySelector(`#space-name`).value;

  fetch('/spaces', {
    method: 'PUT',
    body: JSON.stringify({name: `${spaceName}`}),
    headers: new Headers({ 'Content-Type': 'application/json'})
  }).then(res => res.json())
  .catch(error => console.error(`Error: ${error}`))
  .then(response => {
    console.log('Space created');
    
  });
}
