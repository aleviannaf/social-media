create table if not exists "users"(
	"id" SERIAL primary key,
	"username" VARCHAR(255) not null unique,
	"password"	VARCHAR(255) not null,
	"email"	VARCHAR(255) not null unique,
	"registrationDate" DATE not null 
);

create table if not exists "profiles" (
	"id" SERIAL primary key,
	"fullName" VARCHAR(255) not null,
	"gender" VARCHAR(255),
	"bio" TEXT,
	"profileImage" VARCHAR(255),
	"userId" INTEGER not null unique,
	foreign key ("userId") references "users" ("id")
	on delete cascade 
);

create table if not exists "posts" (
	"id" SERIAL primary key,
	"title" VARCHAR(255) not null,
	"content" text not null,
	"createAt" TIMESTAMP not null,
	"userId" INTEGER,
	foreign key ("userId")
	references "users"("id")
	on delete set null
);