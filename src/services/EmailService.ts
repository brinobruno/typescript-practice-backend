interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment ?: string[]
}

// Data Transfer Object
interface IMessageDTO { 
  to: IMailTo
  message: IMailMessage
}

interface IEmailService {
  sendMail(request: IMessageDTO): void
}

export class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`email sent to ${to.name}: ${message.subject}`)
  }
}