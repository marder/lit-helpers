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
   
   const prototype = target.constructor.prototype;

   if (!prototype.properties) {
      prototype.properties = {};
   }

   prototype.properties[name] = creator;

}