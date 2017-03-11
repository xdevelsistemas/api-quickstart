import { UserDAO } from '../models/user'
import { Config, Controllers } from 'js-data-dao'
import * as JSData from 'js-data'
import * as nodemailer from 'nodemailer'

export class SignUpController extends Controllers.SignupController {

  constructor ( store: JSData.DataStore, appConfig: Config.AppConfig, userDAO: UserDAO, transport?: nodemailer.Transporter ) {
    super( appConfig, userDAO, transport )
  }
}
