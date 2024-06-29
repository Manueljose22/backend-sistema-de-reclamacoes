-- CreateTable
CREATE TABLE `Complaint_Messages` (
    `id` VARCHAR(191) NOT NULL,
    `complaint_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,
    `client_id` VARCHAR(191) NULL,
    `area` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `attachments` VARCHAR(1000) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complaint_Messages` ADD CONSTRAINT `Complaint_Messages_complaint_id_fkey` FOREIGN KEY (`complaint_id`) REFERENCES `Complaints`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complaint_Messages` ADD CONSTRAINT `Complaint_Messages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complaint_Messages` ADD CONSTRAINT `Complaint_Messages_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
