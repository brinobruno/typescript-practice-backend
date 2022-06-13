import { EmailService } from '../services/EmailService'
import { app } from '../index'
import request from 'supertest'

describe('Email service use case', () => {
  it('It should send email', async () => {
    const repository = {
      mailTo: {
        name: 'Bruno Corrêa', email: 'bruno@example.com'
      },
      subject: {
        subject: 'Typescript', body: 'Typescript is really cool'
      }
    }
    
    const response = await request(app).get('/users/create', () => {
      const emailService = new EmailService()
      emailService.sendMail({
        to: repository.mailTo,
        message: repository.subject
      })
    })
    expect(response).toBeTruthy()
  })
})