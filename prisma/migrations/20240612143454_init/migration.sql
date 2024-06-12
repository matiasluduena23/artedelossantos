-- CreateTable
CREATE TABLE "Mueble" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "high" INTEGER NOT NULL,
    "broad" INTEGER NOT NULL,
    "deep" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mueble_pkey" PRIMARY KEY ("id")
);
