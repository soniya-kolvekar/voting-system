import type { Context } from 'hono'
import type { AppEnv } from '../types'
import { fetchStall } from '../services/stalls.Service'

export const getStallBySlug = async (c: Context<AppEnv>) => {
  const slug = c.req.param('slug')
  
  if (!slug) {
    return c.json({ success: false, message: 'Slug is required' }, 400)
  }

  try {
    const stall = await fetchStall(c.env.DB, slug)
    if (!stall) {
       return c.json({ success: false, message: 'Stall not found' }, 404)
    }
    return c.json({ success: true, data: stall })
  } catch (e: any) {
    console.error('Stall lookup error:', e)
    return c.json({ success: false, message: 'Internal Server Error' }, 500)
  }
}
