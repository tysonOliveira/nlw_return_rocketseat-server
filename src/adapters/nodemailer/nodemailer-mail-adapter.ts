import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "04af6408d10839",
    pass: "c85fdb7e0db940"
  }
});

export class nodemailerAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feddget <oi@feedget.com>',
      to: 'Thaison Oliveira <thaisonoliveira@gmail.com>',
      subject,
      html: body,
    });    
  };
}