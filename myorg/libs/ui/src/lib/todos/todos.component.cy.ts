import { MountConfig } from 'cypress/angular';
import { TodosComponent } from './todos.component';

describe(TodosComponent.name, () => {
  const config: MountConfig<TodosComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     cy.mount(TodosComponent, {
           ...config,
           componentProperties: {
               todos:  [],
          }
       });
  })
})
