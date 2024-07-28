-- CreateTable
CREATE TABLE "Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentAt" DATETIME NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "singlePrice" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    CONSTRAINT "OrderCategory_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ismainimg" BOOLEAN NOT NULL DEFAULT false,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "typeName" TEXT NOT NULL,
    "isInStock" BOOLEAN NOT NULL DEFAULT true,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "stocknum" INTEGER NOT NULL,
    "createtime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ProductSize" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "colorid" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "stocknum" INTEGER NOT NULL,
    CONSTRAINT "ProductSize_colorid_fkey" FOREIGN KEY ("colorid") REFERENCES "ProductColor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productid" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "availblenum" INTEGER NOT NULL,
    CONSTRAINT "ProductColor_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductImg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productid" INTEGER NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "ismainpage" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "ProductImg_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MainPageImageConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgSrc" TEXT NOT NULL,
    "btnText" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MidPageImageConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
