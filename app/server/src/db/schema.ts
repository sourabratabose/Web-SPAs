import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const newsletterUpdates = pgEnum("update", ["unsubscribe", "subscribe"]);

export const newsletterSchema = pgTable("newsletterUser", {
  email: varchar({ length: 50 }).notNull().primaryKey(),
  signUpDate: date().notNull().defaultNow(),
});

export const newsletterUpdatesSchema = pgTable("newsletterUpdates", {
  email: varchar({ length: 50 }).notNull().primaryKey(),
  date: date().notNull().defaultNow(),
  update: newsletterUpdates().notNull().default("unsubscribe"),
});

export const messageRequestSchema = pgTable("messageRequest", {
  id: integer().unique().notNull().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  companyName: varchar({ length: 30 }),
  email: varchar().notNull(),
  message: varchar({ length: 300 }).notNull(),
});
