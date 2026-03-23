import { getDb } from '../db/client'
import { ratings, users } from '../db/schema'
import { eq, count } from 'drizzle-orm'

export const fetchProgress = async (db: D1Database, userId: string) => {
  const ormDb = getDb(db)
  
  // Ensure the user exists in the local table explicitly to avoid issues
  await ormDb.insert(users).values({ id: userId }).onConflictDoNothing()

  const userRecord = await ormDb.select({ isCompleted: users.isCompleted }).from(users).where(eq(users.id, userId))
  const isCompleted = userRecord[0]?.isCompleted || false

  const countResult = await ormDb.select({ count: count() }).from(ratings).where(eq(ratings.userId, userId))
  const progressCount = countResult[0]?.count || 0

  return { progress: progressCount, isCompleted }
}
