DROP DATABASE IF EXISTS appointments;
CREATE DATABASE IF NOT EXISTS appointments;
USE appointments;

CREATE TABLE IF NOT EXISTS `Schedule` (
    `intId`                             BIGINT              NOT NULL,
    `intEmployeeId`                     BIGINT                  NULL DEFAULT NULL,
    `dtFrom`                            DATETIME                NULL DEFAULT NULL,
    `dtTo`                              DATETIME                NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Employee` (
    `intId`                             BIGINT              NOT NULL,
    `strFirstName`                      VARCHAR(64)             NULL DEFAULT NULL,
    `strLastName`                       VARCHAR(64)             NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Client` (
    `intId`                             BIGINT              NOT NULL,
    `strClientName`                     VARCHAR(128)            NULL DEFAULT NULL,
    `strContactMobile`                  VARCHAR(128)            NULL DEFAULT NULL,
    `strContactMail`                    VARCHAR(128)            NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Service` (
    `intId`                             BIGINT              NOT NULL,
    `strServiceName`                    VARCHAR(128)            NULL DEFAULT NULL,
    `intDuration`                       BIGINT                  NULL DEFAULT NULL,
    `decPrice`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ServiceProvided` (
    `intId`                             BIGINT              NOT NULL,
    `intAppointmentI`                   BIGINT                  NULL DEFAULT NULL,
    `intServiceId`                      BIGINT                  NULL DEFAULT NULL,
    `decPrice`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ServiceBooked` (
    `intId`                             BIGINT              NOT NULL,
    `intAppointmentI`                   BIGINT                  NULL DEFAULT NULL,
    `intServiceId`                      BIGINT                  NULL DEFAULT NULL,
    `decPrice`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Appointment` (
    `intId`                             BIGINT              NOT NULL,
    `dtDateCreated`                     DATETIME                NULL DEFAULT NULL,
    `intEmployeeCreated`                BIGINT                  NULL DEFAULT NULL,
    `intClientId`                       BIGINT                  NULL DEFAULT NULL,
    `intEmployeeId`                     BIGINT                  NULL DEFAULT NULL,
    `strClientName`                     VARCHAR(128)            NULL DEFAULT NULL,
    `strClientContact`                  VARCHAR(128)            NULL DEFAULT NULL,
    `dtStartTime`                       DATETIME                NULL DEFAULT NULL,
    `dtEndTimeExpected`                 DATETIME                NULL DEFAULT NULL,
    `dtEndTime`                         DATETIME                NULL DEFAULT NULL,
    `decPriceExpected`                  DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decPriceFull`                      DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decDiscount`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `decPriceFinal`                     DECIMAL(10, 2)          NULL DEFAULT NULL,
    `bitCanceled`                       BIT                     NULL DEFAULT NULL,
    `txtCancelationReason`              TEXT                    NULL DEFAULT NULL,
    PRIMARY KEY (
        `intId` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Schedule`
    ADD INDEX `fkScheduleEmployeeIdIdx` (`intEmployeeId` ASC),
    ADD CONSTRAINT `fkScheduleEmployeeId`
        FOREIGN KEY (`intEmployeeId`)
        REFERENCES `Employee` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ServiceBooked`
    ADD INDEX `fkServiceBookedServiceIdIdx` (`intServiceId` ASC),
    ADD INDEX `fkServiceBookedAppointmentIIdx` (`intAppointmentI` ASC),
    ADD CONSTRAINT `fkServiceBookedServiceId`
        FOREIGN KEY (`intServiceId`)
        REFERENCES `Service` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkServiceBookedAppointmentI`
        FOREIGN KEY (`intAppointmentI`)
        REFERENCES `Appointment` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ServiceProvided`
    ADD INDEX `fkServiceProvidedServiceIdIdx` (`intServiceId` ASC),
    ADD INDEX `fkServiceProvidedAppointmentIIdx` (`intAppointmentI` ASC),
    ADD CONSTRAINT `fkServiceProvidedServiceId`
        FOREIGN KEY (`intServiceId`)
        REFERENCES `Service` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkServiceProvidedAppointmentI`
        FOREIGN KEY (`intAppointmentI`)
        REFERENCES `Appointment` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Appointment`
    ADD INDEX `fkAppointmentEmployeeCreatedIdx` (`intEmployeeCreated` ASC),
    ADD INDEX `fkAppointmentEmployeeIdIdx` (`intEmployeeId` ASC),
    ADD INDEX `fkAppointmentClientIdIdx` (`intClientId` ASC),
    ADD CONSTRAINT `fkAppointmentEmployeeCreated`
        FOREIGN KEY (`intEmployeeCreated`)
        REFERENCES `Employee` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkAppointmentEmployeeId`
        FOREIGN KEY (`intEmployeeId`)
        REFERENCES `Employee` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkAppointmentClientId`
        FOREIGN KEY (`intClientId`)
        REFERENCES `Client` (`intId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
