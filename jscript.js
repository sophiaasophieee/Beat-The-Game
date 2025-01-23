function superawesomething() {
    const elements = document.querySelectorAll('*:not(script):not(style):not(link)');
    elements.forEach(element => {
      if (/The Game/i.test(element.innerText)) {
        const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        textNodes.forEach(textNode => {
          if (/The Game/i.test(textNode.textContent)) {
            textNode.parentElement.remove();
          }
        });
      }
    });
  }
superawesomething();

function redirection() {
  const url = window.location.href;
  const bad = "https://en.wikipedia.org/wiki/The_Game_(mind_game)";

  if (url.includes(bad)) {
    window.location.href = "https://www.google.com";
  }
}

redirection();
