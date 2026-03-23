import { getDb } from '../db/client'
import { stalls } from '../db/schema'
import { eq } from 'drizzle-orm'

export const fetchStall = async (db: D1Database, slug: string) => {
  const ormDb = getDb(db)
  const result = await ormDb.select().from(stalls).where(eq(stalls.qrSlug, slug)).limit(1)
  return result[0] || null
}
