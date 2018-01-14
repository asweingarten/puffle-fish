function commitChanges() {
  console.log('yo');
  var url = '/style';
  var data = {
    selector: `#flat-bottom-pan`,
    styles: [
      `margin: 0 auto`,
      `display: block`
    ]
  };

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
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
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response)
  });
}
