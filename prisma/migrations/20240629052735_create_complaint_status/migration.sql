-- CreateTable
CREATE TABLE `Complaint_Status` (
    `id` VARCHAR(191) NOT NULL,
    `complaint_id` VARCHAR(191) NULL,
    `context` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Pendente',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complaint_Status` ADD CONSTRAINT `Complaint_Status_complaint_id_fkey` FOREIGN KEY (`complaint_id`) REFERENCES `Complaints`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
