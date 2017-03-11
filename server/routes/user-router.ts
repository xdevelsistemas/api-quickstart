import { UserController } from '../controllers/user-controller'
import { IUser } from '../interfaces/iuser'
import { Router } from 'express'
import * as JSData from 'js-data'
import { Routes, Config } from 'js-data-dao'

export class UserRouter extends Routes.PersistRouter<IUser, UserController> {
  router: Router
  constructor (store: JSData.DataStore, appConfig: Config.AppConfig) {
    let ctrl = new UserController(store, appConfig)
    super(store, ctrl)
  }
}
