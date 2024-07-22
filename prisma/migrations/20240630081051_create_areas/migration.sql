/*
  Warnings:

  - The values [Colaborador] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('Client', 'Colaborator') NOT NULL;

-- CreateTable
CREATE TABLE `Complaint_Areas` (
    `id` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
