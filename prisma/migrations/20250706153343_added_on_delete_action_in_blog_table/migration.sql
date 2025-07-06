-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_petId_fkey";

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
