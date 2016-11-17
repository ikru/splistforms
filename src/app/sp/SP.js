// import {SHOW_ALL} from '../app/constants/TodoFilters';
// import {initialTodo} from '../app/todos/todos';

class SPController {
  constructor() {
    this.schema = {
      type: "object",
      properties: {
        title: {
          type: "string",
          title: "Title",
          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'dj']
        },
        name: {type: "string", minLength: 2, title: "Name", description: "Name or alias"}
      }};
    this.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];
    this.model = {};
    this.header = "Form";
    this.onSubmit = function (form) {
      // First we broadcast an event so all fields validate themselves
      // Couldn't find an option to broadcast events for ES6
      // this.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      this.header = `${this.header} submitted`;
      if (form.$valid) {
        // ... do whatever you need to do with your data.
      }
    };
  }
}

export const SP = {
  template: require('./SP.html'),
  controller: SPController
};

