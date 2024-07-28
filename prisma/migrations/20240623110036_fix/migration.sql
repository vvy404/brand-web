/*
  Warnings:

  - Added the required column `color` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgSrc` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `madeof` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productid" INTEGER NOT NULL,
    "colorid" INTEGER NOT NULL,
    "sizeid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "madeof" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    CONSTRAINT "CartItem_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_colorid_fkey" FOREIGN KEY ("colorid") REFERENCES "ProductColor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_sizeid_fkey" FOREIGN KEY ("sizeid") REFERENCES "ProductSize" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CartItem" ("colorid", "id", "productid", "quantity", "sizeid") SELECT "colorid", "id", "productid", "quantity", "sizeid" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
