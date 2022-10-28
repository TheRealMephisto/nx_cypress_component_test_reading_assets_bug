 import { TodosConfigurationService } from '@myorg/todos-configuration'
 import { Injectable } from '@angular/core'
 
 @Injectable({
   providedIn: 'root'
 })
 export class TodosService {
   public basePath = '/'
 
   constructor (private readonly TodosConfigurationService: TodosConfigurationService) {
     this.basePath = this.TodosConfigurationService.get('api.url')
   }
 }
 
 