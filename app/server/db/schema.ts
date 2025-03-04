import {
  boolean,
  date,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const newsletterUsersSchema = pgTable("newsletterUsers", {
  email: varchar("email", { length: 100 }).notNull().unique().primaryKey(),
  signUpDate: date("signUpDate").notNull().defaultNow(),
  active: boolean("active").notNull().default(true),
});

export const messageRequestsSchema = pgTable("messageRequests", {
  id: serial("id").unique().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  companyName: varchar("companyName", { length: 30 }),
  email: varchar("email", { length: 100 }).notNull(),
  message: varchar("message", { length: 300 }).notNull(),
});
