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

let changes = [];

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': () => alert('Hello world!'),
    'smaller': () => {
      makeStyleChanges(selection, [
        { attr: 'width', value: '50%'}]
      );
    },
    'center': () => {
      makeStyleChanges(selection, [
        { attr: 'margin', value: `0 auto`},
        { attr: 'display', value: `block`},
      ]);
      // selection.style.margin = `0 auto`;
      // selection.style.display = `block`;
    },
    'commit changes': () => commitChanges(changes);
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

function makeStyleChanges(target, styleChanges) {
  const cssChanges = {
    selector: `#${target.id}`, // what if no id?
    styles: styleChanges.map(c => `${c.attr}: ${c.value}`)
  };
  styleChanges.forEach(c => {
    target.style[c.attr] = c.value;
  });

  const changesToSameElement = changes.filter(c => c.selector === cssChanges.selector);

  if (changesToSameElement.length === 0) {
    changes.push(cssChanges);
  } else {
    changes.forEach((c, i) => {
      if (c.selector === cssChanges.selector) {
        changes[i].styles = changes[i].styles.concat(cssChanges.styles);
      }
    });
  }
}
