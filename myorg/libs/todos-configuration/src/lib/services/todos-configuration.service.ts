import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { TodosConfiguration, TodosConfigurationKey, TodosConfigurationValue } from '../model/todos-configuration.model'

@Injectable({
  providedIn: 'root'
})
export class TodosConfigurationService {

  private readonly _configuration: TodosConfiguration

  constructor () {
    this._configuration = (window as any).configuration
  }

  /**
   * Returns a value in the configuration specified by the given key.
   * @param key The key in the configuration.
   * @returns The value specified by the given key, or undefined if the key doesn't exist.
   */
  public get<Type extends TodosConfigurationValue | undefined> (key: TodosConfigurationKey): Type {

    // if its an array, return a copy of it
    return _.isArray(this._configuration[key]) ? [...this._configuration[key]] as Type : this._configuration[key] as Type
  }
}
