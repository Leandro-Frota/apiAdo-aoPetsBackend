/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Adopter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Adopter_email_key" ON "Adopter"("email");
