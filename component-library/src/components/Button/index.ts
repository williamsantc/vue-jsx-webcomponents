import Button from './Button.vue'
import { pluginFactory } from '@/util/plugins'

const ButtonPlugin = pluginFactory({
  components: { Button }
})

export { Button, ButtonPlugin }
