/*
  Warnings:

  - You are about to drop the column `colorid` on the `ProductSize` table. All the data in the column will be lost.
  - Added the required column `madeof` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productid` to the `ProductSize` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productid" INTEGER NOT NULL,
    "colorid" INTEGER NOT NULL,
    "sizeid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "CartItem_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_colorid_fkey" FOREIGN KEY ("colorid") REFERENCES "ProductColor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_sizeid_fkey" FOREIGN KEY ("sizeid") REFERENCES "ProductSize" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MainPageImageConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgSrc" TEXT NOT NULL,
    "btnText" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_MainPageImageConfig" ("btnText", "id", "imgSrc", "link") SELECT "btnText", "id", "imgSrc", "link" FROM "MainPageImageConfig";
DROP TABLE "MainPageImageConfig";
ALTER TABLE "new_MainPageImageConfig" RENAME TO "MainPageImageConfig";
CREATE TABLE "new_MidPageImageConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_MidPageImageConfig" ("id", "imgSrc", "link", "title") SELECT "id", "imgSrc", "link", "title" FROM "MidPageImageConfig";
DROP TABLE "MidPageImageConfig";
ALTER TABLE "new_MidPageImageConfig" RENAME TO "MidPageImageConfig";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ismainimg" BOOLEAN NOT NULL DEFAULT false,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "typeName" TEXT NOT NULL,
    "madeof" TEXT NOT NULL,
    "isInStock" BOOLEAN NOT NULL DEFAULT true,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "stocknum" INTEGER NOT NULL,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("createtime", "id", "imgSrc", "isInStock", "isLiked", "isNew", "ismainimg", "price", "stocknum", "title", "type", "typeName") SELECT "createtime", "id", "imgSrc", "isInStock", "isLiked", "isNew", "ismainimg", "price", "stocknum", "title", "type", "typeName" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_ProductSize" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productid" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "stocknum" INTEGER NOT NULL,
    CONSTRAINT "ProductSize_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductSize" ("id", "size", "stocknum") SELECT "id", "size", "stocknum" FROM "ProductSize";
DROP TABLE "ProductSize";
ALTER TABLE "new_ProductSize" RENAME TO "ProductSize";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
