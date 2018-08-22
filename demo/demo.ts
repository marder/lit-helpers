import { html, LitElement } from '@polymer/lit-element'
import { customElement, property } from '../lib/decorators'

@customElement("demo-app")
export class DemoApp extends LitElement {

   @property(String)
   title: string

   _render() {
      return html`

         <h1>Demo App</h1>
         <br/>
         <h2>${this.title}</h2>

      `
   }

}