import { Hono } from 'hono'
import type { AppEnv } from '../types'
import { getStallBySlug } from '../controllers/stalls.Controller'

const stalls = new Hono<AppEnv>()

stalls.get('/:slug', getStallBySlug)

export default stalls
