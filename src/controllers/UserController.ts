import { Request, Response } from 'express'
import { EmailService } from '../services/EmailService'

const users = [
  { name: 'Bruno', email: 'bruno@example.com' }
]

export default {
  async index(_request: Request, response: Response) {
    return response.json(users)
  },

  async create(_request: Request, response: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { 
        name: 'Bruno Corrêa',
        email: 'bruno@example.com'
      },
      message: {
        subject: 'Typescript',
        body: 'Typescript is really cool'
      },
    })

    return response.send()
  }
}