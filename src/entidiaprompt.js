export default function entidiaprompt(options) {

  /* eslint-disable */
  const target = '';
  const name = options.name ? options.name : 'prompt';
  const url = options.url ? options.url : '' ;
  const text = options.text ? options.text : `This is just a simple notification.`;
  const buttonText = options.buttonText ? options.buttonText : `OK, I got it!`;
  const width = options.width ? options.width : '300px';
  const bottom = options.bottom ? options.bottom : '32px';
  const right = options.right ? options.right : '32px';
  const left = options.left ? options.left : 'unset';
  const colorOne = options.colorOne ? options.colorOne : '#5e8d00';
  const colorTwo = options.colorTwo ? options.colorTwo : '#89c400';
  const saveInCookies = typeof options.saveInCookies  === 'boolean' ? options.saveInCookies : true;
  const id = `entidiaprompt-${name.toLowerCase().replace(/[^a-zA-Z]+/g, "-")}`;
  const html_button = options.url ? `<a href="${url}" class="ep-button" target="${target}">${buttonText}</a>` : `#` ;
  //const html_button = `<a href="${url}" class="ep-button" target="${target}">${buttonText}</a>`;
  const html = `<div class="entidiaprompt" id="${id}"> <span class="entidianotify__close" id="${id}-close">×</span><p class="entidianotify__text">${text}</p> ${html_button}</div>`;
  const css = `
  .ep-button {
    background: linear-gradient(65deg,${colorOne},${colorTwo});
    font-family: sans-serif;
    color: #fff !important;
    display: block;
    letter-spacing: 0;
    font-weight: 700;
    line-height: 16px;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none!important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    padding: 16px 16px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(32,43,54,.12);
    transition: all .3s ease;
    margin-top: 16px;
    font-size: 14px;
  }
  .ep-button:hover {
    box-shadow: 0 6px 24px rgba(32,43,54,.4);
  }
  .entidiaprompt {
    position: fixed;
    background-color: #fff;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);
    z-index: 10;
    font-size: 16px;
    color: #41454b;
    font-family: sans-serif;
    opacity: 1;
    transition: all .3s ease;
  }
  .entidianotify__close {
    position: absolute;
    right: 16px;
    top: 8px;
    cursor: pointer;
  }
  .entidianotify__text {
    margin: 0;
  }
  @media (max-width: 768px) {
    .entidiaprompt {
      width: calc(100% - 48px) !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;
    }
  }`;


  if(!window.localStorage.getItem(id) || saveInCookies == false) {
    createModal(html);
    setStyle(id, bottom, left, right, width);
    addClosingEvent(`${id}-close`);
    if(url == '') {
      addClosingEvent(`${id}-button`);
    }
    addStyle(css);
  }
  /* eslint-enable */
}

function createModal(html) {
  const prompt = document.createElement('div');

  prompt.innerHTML = html;
  document.body.appendChild(prompt);
}

function setStyle(id, bottom, left, right, width) {
  const promptModal = document.getElementById(id);

  promptModal.style.bottom = bottom;
  promptModal.style.left = left ? left : 'unset';
  promptModal.style.right = right ? right : 'unset';
  promptModal.style.width = width;
}

function addClosingEvent(id) {
  const promptModal = document.getElementById(id);
  const entidiapromptCloseButton = document.getElementById(id);

  entidiapromptCloseButton.addEventListener('click', () => {
    promptModal.style.opacity = 0;
    setTimeout(() => {
      promptModal.parentNode.removeChild(promptModal);
      window.localStorage.setItem(id, true);
    }, 300);
  });
}

function addStyle(css) {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}
