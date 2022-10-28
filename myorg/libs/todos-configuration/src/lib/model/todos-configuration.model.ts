  /**
   * Type of value which can be returned from the configuration. Allows no hierarchy.
   */
  export type TodosConfigurationValue = string | string[] | boolean | number | number[]
  
  /**
   * Todos Configuration Interface
   */
  export interface TodosConfiguration {
  
    [key: string]: TodosConfigurationValue | any

    'api.url': string
    }

  export type TodosConfigurationKey = keyof TodosConfiguration
  