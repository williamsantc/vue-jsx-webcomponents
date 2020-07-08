import Template from './template'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue/types/umd'

@Component
export default class extends Vue {
    @Prop(String) readonly text: string | undefined;
    @Prop(Number) readonly count!: number | undefined;
    public render (h: CreateElement) {
      return Template.call(this, h)
    }
}
