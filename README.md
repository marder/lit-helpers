# lit-helpers

## Install

```sh
yarn add @rammbulanz/lit-helpers
```

## Usage

```typescript
import { LitElement } from '@polymer/lit-element'
import { customElement, property } from '@rammbulanz/lit-helpers/lib/decorators'

@customElement("my-sample-element")
class MySampleElement extends LitElement {

   @property(String)
   mySampleProperty: string

}
```