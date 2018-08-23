import { LitElement } from "@polymer/lit-element";


/**
 * Register as html element (customElements.define)
 * @param name Final tag name for the element
 */
export const customElement = (name: string) => (constructor: any) => {
   customElements.define(name, constructor);
}

/**
 * Store entry in properties
 */
export const property = (creator: any) => (target: any, name: string) => {

   if (!target.constructor.properties) {
      target.constructor.properties = {};
   }

   target.constructor.properties[name] = creator;

}