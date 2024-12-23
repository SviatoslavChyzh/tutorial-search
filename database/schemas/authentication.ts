import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import type { InferSelectModel } from 'drizzle-orm';

export const userTable = sqliteTable('user', {
  id: integer('id').primaryKey(),
  username: text('username').notNull().unique(),
  password_hash: text('password_hash').notNull(),
});

export const sessionTable = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer('expires_at', {
    mode: 'timestamp',
  }).notNull(),
});

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;
