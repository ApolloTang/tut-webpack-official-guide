function component() {
  let element = document.createElement('div');

  element.innerHTML = Array.prototype.join.call(['hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
