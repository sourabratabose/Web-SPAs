CREATE TYPE "public"."update" AS ENUM('unsubscribe', 'subscribe');--> statement-breakpoint
CREATE TABLE "messageRequest" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"companyName" varchar(30),
	"email" varchar NOT NULL,
	"message" varchar(300) NOT NULL,
	CONSTRAINT "messageRequest_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "newsletterUser" (
	"email" varchar(50) PRIMARY KEY NOT NULL,
	"signUpDate" date DEFAULT now() NOT NULL,
	"active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "newsletterUpdates" (
	"email" varchar(50) PRIMARY KEY NOT NULL,
	"date" date DEFAULT now() NOT NULL,
	"update" "update" DEFAULT 'unsubscribe' NOT NULL
);
