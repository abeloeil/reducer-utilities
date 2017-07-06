module.exports = {
  /**
   * Shortcut for Object.assign() which return an object
   *
   * @param oldObject: {}
   * @param newValues: {}
   * @returns {*}
   */
  updateObject: function (oldObject, newValues) {
      return Object.assign({}, oldObject, newValues);
  },

  /**
   * Shortcut for Object.assign() which return an array
   *
   * @param oldArray
   * @param newValues
   * @returns {*}
   */
  updateArray: function (oldArray, newValues) {
      return Object.assign([], oldArray, newValues);
  },

  /**
   * Update an item in array with custom function
   *
   * @param array: []
   * @param itemId: int
   * @param updateItemCallback: fn()
   * @returns {*}
   */
  updateItemInArray: function (array, itemId, updateItemCallback) {
      return array.map(function(item) {
          if (item.id !== itemId) {
              return item;
          }

          return updateItemCallback(item);
      });
  },

  /**
   * Create a reducer without using a switch
   *
   * @param initialState: []|{}
   * @param handlers: {}
   */
  createReducer: function (initialState, handlers) {
      return function reducer(state = initialState, action) {
          if (handlers.hasOwnProperty(action.type)) {
              return handlers[action.type](state, action);
          } else {
              return state;
          }
      };
  }

}
