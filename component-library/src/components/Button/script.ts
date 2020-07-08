import Template from './template'
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue/types/umd'

@Component
export default class extends Vue {
  public render (h: CreateElement) {
    return Template.call(this, h)
  }
}
