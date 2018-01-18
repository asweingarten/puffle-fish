function saveCells(savedCells) {
  document.querySelectorAll('.cell').forEach(c => savedCells.push(c.innerHTML));

  const cellsToSave = savedCells;
  fetch(`/spaces/${window._SPACE.name}`, {
    method: 'POST',
    body: JSON.stringify(cellsToSave),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response)
  });

}
