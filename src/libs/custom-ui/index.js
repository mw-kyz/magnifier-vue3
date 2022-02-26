import Magnifier from './components/Magnifier'

let CustomUI = {}

CustomUI.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier)
}

export default CustomUI