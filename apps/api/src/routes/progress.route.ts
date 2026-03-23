import { Hono } from 'hono'
import type { AppEnv } from '../types'
import { requireAuth } from '../middleware/auth'
import { getProgress } from '../controllers/progress.Controller'

const progress = new Hono<AppEnv>()

progress.get('/', requireAuth, getProgress)

export default progress
