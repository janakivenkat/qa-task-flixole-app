import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  validemail: process.env.FLIXOLE_VALIDEMAIL || '',
  validpassword: process.env.FLIXOLE_VALIDPASSWORD || '',
  invalidemail: process.env.FLIXOLE_INVALIDEMAIL || '',
};