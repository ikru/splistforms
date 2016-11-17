import angular from 'angular';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';

import {MainSection} from './app/components/todo/MainSection';
import {TodoTextInput} from './app/components/todo/TodoTextInput';
import {TodoItem} from './app/components/todo/TodoItem';

import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import 'angular-schema-form';
import routesConfig from './routes';

import './index.scss';

import {SP} from './app/sp/SP';

angular
  .module('app', ['ui.router', 'schemaForm'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .component('sp', SP);

