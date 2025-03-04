CREATE TABLE "messageRequests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"companyName" varchar(30),
	"email" varchar(100) NOT NULL,
	"message" varchar(300) NOT NULL,
	CONSTRAINT "messageRequests_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "newsletterUsers" (
	"email" varchar(100) PRIMARY KEY NOT NULL,
	"signUpDate" date DEFAULT now() NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "newsletterUsers_email_unique" UNIQUE("email")
);
