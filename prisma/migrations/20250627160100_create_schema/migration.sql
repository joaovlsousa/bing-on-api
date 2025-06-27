-- CreateTable
CREATE TABLE "bingos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bingos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "has_saled" BOOLEAN NOT NULL DEFAULT false,
    "amount_of_numbers_maked" INTEGER NOT NULL DEFAULT 0,
    "column_b" INTEGER[],
    "column_i" INTEGER[],
    "column_n" INTEGER[],
    "column_g" INTEGER[],
    "column_o" INTEGER[],
    "buyer_name" TEXT,
    "buyer_address" TEXT,
    "buyer_phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);
