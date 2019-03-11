# entidia Prompt

Quick and easy floating notifications

## How to use
The entidia prompt is very easy to use, just copy paste the following code or use the npm package.
A few customization such as localstorage to appear only once, color, position are availables check the options below.

### Easy way (using the CDN)
Just add this code to your html page:
```html
<script src="https://cdn.entidia.net/js/entidiaprompt.min.js"></script>
<script>
  entidiaprompt({
    text:'We have some great news for you', 
    url:'/some/great/news'
  });
</script>
```

### Custom way (copy lib)
Just copy the js file frome lib and add this code to your html page:
```html
<script src="lib/entidiaprompt.min.js"></script>
<script>
  entidiaprompt({
    text:'We have some great news for you', 
    url:'/some/great/news'
  });
</script>
```

## Options
Here are the option availables:
```javascript
var options = {
  url: 'https://domain.com/some/url', // default: false - if false button click will close prompt.
  target: '_blank', // default: ''
  text: 'My customized text', // default: This is just a simple notification.
  buttonText: 'My customized button', // default: OK, I got it!
  width: '500px', // default: 300px
  bottom: '32px', // default: 32px - postition from the bottom
  right: 'unset', // default: 32px - position from the right
  left: '32px', // default: unset - position from the left
  colorOne: '#da552f', // default: #5e8d00 - first color of the gradient
  colorTwo: '#ea8e39', // default: #89c400 - second color of the gradient
  name: 'newsinfo', // default: 'prompt' - used as element.id and to saveCookies
  saveInCookies: false // default: true - if true it will use localStorage to appear only once
}

entidiaprompt(options);
```

## Development

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode
