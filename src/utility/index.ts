import { FromAdminMail, GMAIL_PASSWORD, GMAIL_USER, userSubject } from "../config/index";
import nodemailer from "nodemailer";
import google from 'googleapi';



const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER, // generated ethereal user
    pass: GMAIL_PASSWORD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});
// console.log(GMAIL_USER, GMAIL_PASSWORD, FromAdminMail );


export const mailSent = async (
  from: string, //'"Fred Foo 👻" <foo@example.com>', // sender address
  to: string, //"bar@example.com, baz@example.com", // list of receivers
  subject: string, //"Hello ✔", // Subject line
    html: string//"<b>Hello world?</b>", // html body
) => {
  try {
    const response = await transport.sendMail({
      from: FromAdminMail,
      to,
      subject: userSubject,
      html
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};


const writeDataToSheet = async (sheetId: any, sheetName: any, values: any) => {
  // create a client
  const client = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  // access the sheets api
  const sheets = google.sheets({version: 'v4', auth: client});

  // write data to the specified sheet
  const result = await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: sheetName,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: values
    }
  });

  return result.data;
}
