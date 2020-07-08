import { CreateElement } from 'vue/types/umd'
import Scope from './script'

export default function (this: Scope, h: CreateElement) {
  return (
    <div>
      <h1>{this.text}</h1>
      {Array.from(Array(this.count).keys()).map(num => <p>{num}</p>)}
    </div>
  )
}
