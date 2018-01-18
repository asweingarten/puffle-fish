function hydrateSpace() {
  fetch('./cells.json')
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response)
    refresh(response);
  });
}
