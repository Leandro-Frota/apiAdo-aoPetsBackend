-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "species" VARCHAR(100) NOT NULL,
    "dateBorn" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "status" VARCHAR(30) NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adopter" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "address" VARCHAR(150) NOT NULL,

    CONSTRAINT "Adopter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdoptionProcess" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "adopter_id" TEXT NOT NULL,
    "data_adocao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdoptionProcess_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AdoptionProcess" ADD CONSTRAINT "fk_pet" FOREIGN KEY ("pet_id") REFERENCES "Pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AdoptionProcess" ADD CONSTRAINT "fk_adopter" FOREIGN KEY ("adopter_id") REFERENCES "Adopter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
