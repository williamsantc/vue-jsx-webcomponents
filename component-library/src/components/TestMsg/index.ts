import TestMsg from './TestMsg.vue'
import { pluginFactory } from '@/util/plugins'

const TestMsgPlugin = pluginFactory({
  components: { TestMsg }
})

export { TestMsg, TestMsgPlugin }
