import { UserRouter } from './user-router'
import { Application } from 'express'
import * as JSData from 'js-data'
import { UserDAO } from '../models/user'
import { Auth, Config, Routes } from 'js-data-dao'
export namespace main {
  export const callRoutes = ( app: Application, store: JSData.DataStore, passport: any, appConfig: Config.AppConfig ): Application => {
    let userDAO = new UserDAO( store, appConfig )
    app.use( '/api/v1/users', Auth.authenticate( passport, appConfig ), new UserRouter( store, appConfig ).getRouter() )
    app.use( '/api/v1/signup', new Routes.SignupRouter( appConfig, userDAO ).getRouter() )
    app.use( '/api/v1/login', new Routes.LoginRouter( store, appConfig ).getRouter() )
    app.use( '/api/v1/forgot', new Routes.ForgotRouter( appConfig, userDAO ).getRouter() )
    app.use( '/api/v1/ping', new Routes.PingRouter().getRouter() )

    return app
  }
}
