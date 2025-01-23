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