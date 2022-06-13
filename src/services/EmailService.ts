interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment ?: string[]
}

export class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`email sent to ${to.name}: ${message.subject}`)
  }
}