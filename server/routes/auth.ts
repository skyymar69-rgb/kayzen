import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token, user: { email } })
})

router.post('/register', (req: Request, res: Response) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'All fields required' })
  }

  res.json({ message: 'User registered successfully' })
})

router.get('/me', (req: Request, res: Response) => {
  res.json({ user: { email: 'user@example.com', name: 'User' } })
})

export default router
