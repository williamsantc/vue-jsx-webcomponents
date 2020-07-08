import { componentsPlugin } from './components'
import { installFactory } from './util/plugins'

const NAME = 'AppLibrary'

const install = installFactory({
  plugins: {
    componentsPlugin
  }
})

const AppPlugin = {
  install,
  NAME
}

export { install, NAME, AppPlugin }
export { Button, ButtonPlugin } from './components/Button'
export { TestMsg, TestMsgPlugin } from './components/TestMsg'

export default AppPlugin
