import { pluginFactory } from '@/util/plugins'
import { ButtonPlugin } from './Button'
import { TestMsgPlugin } from './TestMsg'

export const componentsPlugin = pluginFactory({
  plugins: { ButtonPlugin, TestMsgPlugin }
})
