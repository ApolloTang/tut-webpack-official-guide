import _ from 'lodash'
import printMe from './print.js'

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  btn.innerHTML = 'click me'
  btn.onclick = () => {console.log('button click')
    printMe()
  }

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function(){
    console.log('accepting the updated printme module!')
    printMe()
  })
}
