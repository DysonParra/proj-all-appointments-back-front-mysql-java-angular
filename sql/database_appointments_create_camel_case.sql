DROP DATABASE IF EXISTS appointments;
CREATE DATABASE IF NOT EXISTS appointments;
USE appointments;

CREATE TABLE IF NOT EXISTS `Schedule` (
    `id`                                BIGINT              NOT NULL,
    `employeeId`                        BIGINT                  NULL DEFAULT NULL,
    `from`                              DATETIME                NULL DEFAULT NULL,
    `to`                                DATETIME                NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Employee` (
    `id`                                BIGINT              NOT NULL,
    `firstName`                         VARCHAR(64)             NULL DEFAULT NULL,
    `lastName`                          VARCHAR(64)             NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Client` (
    `id`                                BIGINT              NOT NULL,
    `clientName`                        VARCHAR(128)            NULL DEFAULT NULL,
    `contactMobile`                     VARCHAR(128)            NULL DEFAULT NULL,
    `contactMail`                       VARCHAR(128)            NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Service` (
    `id`                                BIGINT              NOT NULL,
    `serviceName`                       VARCHAR(128)            NULL DEFAULT NULL,
    `duration`                          BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ServiceProvided` (
    `id`                                BIGINT              NOT NULL,
    `appointmentI`                      BIGINT                  NULL DEFAULT NULL,
    `serviceId`                         BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ServiceBooked` (
    `id`                                BIGINT              NOT NULL,
    `appointmentI`                      BIGINT                  NULL DEFAULT NULL,
    `serviceId`                         BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Appointment` (
    `id`                                BIGINT              NOT NULL,
    `dateCreated`                       DATETIME                NULL DEFAULT NULL,
    `employeeCreated`                   BIGINT                  NULL DEFAULT NULL,
    `clientId`                          BIGINT                  NULL DEFAULT NULL,
    `employeeId`                        BIGINT                  NULL DEFAULT NULL,
    `clientName`                        VARCHAR(128)            NULL DEFAULT NULL,
    `clientContact`                     VARCHAR(128)            NULL DEFAULT NULL,
    `startTime`                         DATETIME                NULL DEFAULT NULL,
    `endTimeExpected`                   DATETIME                NULL DEFAULT NULL,
    `endTime`                           DATETIME                NULL DEFAULT NULL,
    `priceExpected`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `priceFull`                         DECIMAL(10, 2)          NULL DEFAULT NULL,
    `discount`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `priceFinal`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `canceled`                          BIT                     NULL DEFAULT NULL,
    `cancelationReason`                 TEXT                    NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Schedule`
    ADD INDEX `fkScheduleEmployeeIdIdx` (`employeeId` ASC),
    ADD CONSTRAINT `fkScheduleEmployeeId`
        FOREIGN KEY (`employeeId`)
        REFERENCES `Employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ServiceBooked`
    ADD INDEX `fkServiceBookedServiceIdIdx` (`serviceId` ASC),
    ADD INDEX `fkServiceBookedAppointmentIIdx` (`appointmentI` ASC),
    ADD CONSTRAINT `fkServiceBookedServiceId`
        FOREIGN KEY (`serviceId`)
        REFERENCES `Service` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkServiceBookedAppointmentI`
        FOREIGN KEY (`appointmentI`)
        REFERENCES `Appointment` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ServiceProvided`
    ADD INDEX `fkServiceProvidedServiceIdIdx` (`serviceId` ASC),
    ADD INDEX `fkServiceProvidedAppointmentIIdx` (`appointmentI` ASC),
    ADD CONSTRAINT `fkServiceProvidedServiceId`
        FOREIGN KEY (`serviceId`)
        REFERENCES `Service` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkServiceProvidedAppointmentI`
        FOREIGN KEY (`appointmentI`)
        REFERENCES `Appointment` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Appointment`
    ADD INDEX `fkAppointmentEmployeeCreatedIdx` (`employeeCreated` ASC),
    ADD INDEX `fkAppointmentEmployeeIdIdx` (`employeeId` ASC),
    ADD INDEX `fkAppointmentClientIdIdx` (`clientId` ASC),
    ADD CONSTRAINT `fkAppointmentEmployeeCreated`
        FOREIGN KEY (`employeeCreated`)
        REFERENCES `Employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkAppointmentEmployeeId`
        FOREIGN KEY (`employeeId`)
        REFERENCES `Employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkAppointmentClientId`
        FOREIGN KEY (`clientId`)
        REFERENCES `Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
