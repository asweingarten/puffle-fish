function commitChanges(changes) {
  console.log('yo');
  var url = '/style';

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(changes),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response)
    prependCodeChanges(response);
  });
}

function prependCodeChanges(changes) {
  const codeChangeCell = document.createElement('div');
  codeChangeCell.classList.add('cell');
  codeChangeCell.id = 'code-changes';
  codeChangeCell.innerHTML = `
    <h2>${changes.changeSummary}</h2>
    <pre>${changes.codeChanges}</pre>
    <button onclick="actOnChanges('accept')">Accept</button>
    <button onclick="actOnChanges('reject')">Reject</button>
  `;
  cells.prepend(codeChangeCell);
}

function actOnChanges(action) {
  const url = `/change/${action}`
  fetch(url, {
    method: 'PUT', // or 'PUT'
    headers: new Headers({
    })
  }).then(res => res)
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response)
    document.querySelector('#code-changes').remove()
  });
}
