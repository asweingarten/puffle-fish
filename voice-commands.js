let selection = null;
let selectionStyleHistory = null;

window.addEventListener('click', (event) => {
  if (selection) {
    selection.style = selectionStyleHistory;
  }

  selection = event.srcElement;
  selectionStyleHistory = selection.style;
  selection.style['border'] = `3px solid lightblue`;
  selection.style['border-radius'] = `3px`;
});

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
