const root = document.getElementById('root')


function tagMakeCall (parentName, tagName, callback){
  const element = document.createElement(tagName);
  parentName.appendChild(element);
  if(callback){
    callback(element);
  }
  return element
}

const h1Cliock = tagMakeCall(root, 'h1', function(element){
  element.setAttribute('id','h1-clock')
  element.style.width = '100vw'
  element.style.height = '100vh'
  element.style.display = 'flex'
  element.style.justifyContent = 'center'
  element.style.alignItems = 'center'
})
