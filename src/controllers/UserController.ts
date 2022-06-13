import { Request, Response } from 'express'

const users = [
  { name: 'Bruno', email: 'bruno@example.com' }
]

export default {
  async index(request: Request, response: Response) {
    return response.json(users)
  }
}