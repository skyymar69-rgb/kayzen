import { Router, Request, Response } from 'express'

const router = Router()

router.post('/create', (req: Request, res: Response) => {
  const { url } = req.body

  if (!url) {
    return res.status(400).json({ error: 'URL required' })
  }

  res.json({
    id: 'audit-' + Date.now(),
    url,
    score: 85,
    errors: [],
  })
})

router.get('/list', (req: Request, res: Response) => {
  res.json({
    audits: [],
  })
})

export default router
