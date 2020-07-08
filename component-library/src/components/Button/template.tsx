import { CreateElement } from 'vue/types/umd'
import Scope from './script'

export default function (this: Scope, h: CreateElement) {
  return <div class="primary"><button>Hola!</button><span>Hola!!!</span></div>
}
