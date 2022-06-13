import { Request, Response } from 'express'
import { EmailService } from '../services/EmailService'

const users = [
  { name: 'Bruno', email: 'bruno@example.com' }
]

export default {
  async index(request: Request, response: Response) {
    return response.json(users)
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService()

    emailService.sendMail(
      { name: 'Bruno Corrêa', email: 'bruno@example.com' },
      { subject: 'Typescript', body: 'Typescript is really cool' },
    )

    return response.send()
  }
}