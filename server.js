import dotenv from 'dotenv'//importing to read the env file
dotenv.config()//Looks for a file named .env in the root of your project imports all .env file variables from .env

import app from "./app.js"
import { ConnectDB } from './config/db.config.js';
//mongoose connection
ConnectDB( )

