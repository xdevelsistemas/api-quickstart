import { Config, Models } from 'js-data-dao'
import { IUser } from '../interfaces/iuser'
import * as JSData from 'js-data'
/**
 * Model User
 *
 * @class User
 * @implements {Model.DAO<Model.User>}
 */

export class User extends Models.BaseModel implements IUser {
  name: string
  companyAlias: string
  email: string
  username: string
  password: string
  isAdmin: boolean
  active: boolean
  constructor ( obj: IUser ) {
    super( obj )
    this.email = obj.email
    this.password = obj.password
    this.name = obj.name
    this.email = obj.email
    this.username = obj.username
  }
}

export class UserDAO extends Models.DAO<IUser> {
  constructor ( store: JSData.DataStore, appConfig: Config.AppConfig ) {
    const schema: Object = {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        companyAlias: { type: 'string' },
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        isAdmin: { type: 'boolean' }
      },
      required: [ 'id', 'name', 'username', 'email', 'password' ]
    }
    super( store, appConfig.getUsersTable(), schema)
  }

  /**
   * Método para para facilitar a criação dos usuários
   *
   * @param {*} val
   * @returns {IUser}
   *
   * @memberOf UserDAO
   */
  public parseModel ( val: any ): IUser {
    return new User( val )
  }
}
