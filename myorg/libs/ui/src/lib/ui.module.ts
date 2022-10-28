import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodosConfigurationModule } from '@myorg/todos-configuration';

@NgModule({
  imports: [
    CommonModule,
    TodosConfigurationModule
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
