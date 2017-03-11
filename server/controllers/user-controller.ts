import { Controllers, Config } from 'js-data-dao'
import { UserDAO } from '../models/user'
import { IUser } from '../interfaces/iuser'
import * as JSData from 'js-data'

export class UserController extends Controllers.BasePersistController<IUser> {
  public constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    super(new UserDAO(store, appConfig))
  }
}
