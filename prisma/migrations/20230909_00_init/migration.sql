-- CreateTable
CREATE TABLE "Views" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255),
    "count" INTEGER DEFAULT 0,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("id")
);

