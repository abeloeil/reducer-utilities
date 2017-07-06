#reducer-utilities

Provide some utility functions to manage Redux reducer.
All update functions return a copy of the provided Array/Object, this does not mutate the initial variable.

### Installation

```bash
$ yarn add reducer-utilities
```

### Usage

In your reducer:

```javascript
//appReducer.js

import {createReducer, updateObject, updateArray, updateItemInArray} from 'reducer-utilities'

const FOO_BAR = 'item.foo_bar'

const reducer = createReducer([] /*our initialState */, {
  // your actions to handle
  'update': update,
  [FOO_BAR]: fooBar,
})

// A simple map to update an item by his id property. Do not mutate the provided state.
function update(state, action) {
  return updateItemInArray(state, action.id, item => {
    return updateObject(item, {
      foo: action.foo,
    })
  });
}

function fooBar(state, action) {
  return updateArray(state, action.items) // return an array instead of updateObject which return an Object.
}

```
