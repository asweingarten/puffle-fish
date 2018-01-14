let selection = null;
let selectionStyleHistory = null;

window.addEventListener('click', (event) => {
  if (selection) {
    selection.style = Object.assign(selection.style, selectionStyleHistory);
  }

  selection = event.srcElement;
  selectionStyleHistory = {
    border: selection.style.border,
    'border-radius': selection.style['border-radius']
  };
  selection.style['border'] = `3px solid lightblue`;
  selection.style['border-radius'] = `3px`;

  changes.selector = `#${event.srcElement.id}`
});

let changes = {

};

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': () => alert('Hello world!'),
    'smaller': () => selection.style.width = '50%',
    'center': () => {
      selection.style.margin = `0 auto`;
      selection.style.display = `block`;
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
