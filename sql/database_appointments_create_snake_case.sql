DROP DATABASE IF EXISTS appointments;
CREATE DATABASE IF NOT EXISTS appointments;
USE appointments;

CREATE TABLE IF NOT EXISTS `schedule` (
    `id`                                BIGINT              NOT NULL,
    `employee_id`                       BIGINT                  NULL DEFAULT NULL,
    `from`                              DATETIME                NULL DEFAULT NULL,
    `to`                                DATETIME                NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `employee` (
    `id`                                BIGINT              NOT NULL,
    `first_name`                        VARCHAR(64)             NULL DEFAULT NULL,
    `last_name`                         VARCHAR(64)             NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `client` (
    `id`                                BIGINT              NOT NULL,
    `client_name`                       VARCHAR(128)            NULL DEFAULT NULL,
    `contact_mobile`                    VARCHAR(128)            NULL DEFAULT NULL,
    `contact_mail`                      VARCHAR(128)            NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `service` (
    `id`                                BIGINT              NOT NULL,
    `service_name`                      VARCHAR(128)            NULL DEFAULT NULL,
    `duration`                          BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `service_provided` (
    `id`                                BIGINT              NOT NULL,
    `appointment_i`                     BIGINT                  NULL DEFAULT NULL,
    `service_id`                        BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `service_booked` (
    `id`                                BIGINT              NOT NULL,
    `appointment_i`                     BIGINT                  NULL DEFAULT NULL,
    `service_id`                        BIGINT                  NULL DEFAULT NULL,
    `price`                             DECIMAL(10, 2)          NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `appointment` (
    `id`                                BIGINT              NOT NULL,
    `date_created`                      DATETIME                NULL DEFAULT NULL,
    `employee_created`                  BIGINT                  NULL DEFAULT NULL,
    `client_id`                         BIGINT                  NULL DEFAULT NULL,
    `employee_id`                       BIGINT                  NULL DEFAULT NULL,
    `client_name`                       VARCHAR(128)            NULL DEFAULT NULL,
    `client_contact`                    VARCHAR(128)            NULL DEFAULT NULL,
    `start_time`                        DATETIME                NULL DEFAULT NULL,
    `end_time_expected`                 DATETIME                NULL DEFAULT NULL,
    `end_time`                          DATETIME                NULL DEFAULT NULL,
    `price_expected`                    DECIMAL(10, 2)          NULL DEFAULT NULL,
    `price_full`                        DECIMAL(10, 2)          NULL DEFAULT NULL,
    `discount`                          DECIMAL(10, 2)          NULL DEFAULT NULL,
    `price_final`                       DECIMAL(10, 2)          NULL DEFAULT NULL,
    `canceled`                          BIT                     NULL DEFAULT NULL,
    `cancelation_reason`                TEXT                    NULL DEFAULT NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `schedule`
    ADD INDEX `fk_schedule_employee_id_idx` (`employee_id` ASC),
    ADD CONSTRAINT `fk_schedule_employee_id`
        FOREIGN KEY (`employee_id`)
        REFERENCES `employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `service_booked`
    ADD INDEX `fk_service_booked_service_id_idx` (`service_id` ASC),
    ADD INDEX `fk_service_booked_appointment_i_idx` (`appointment_i` ASC),
    ADD CONSTRAINT `fk_service_booked_service_id`
        FOREIGN KEY (`service_id`)
        REFERENCES `service` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_service_booked_appointment_i`
        FOREIGN KEY (`appointment_i`)
        REFERENCES `appointment` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `service_provided`
    ADD INDEX `fk_service_provided_service_id_idx` (`service_id` ASC),
    ADD INDEX `fk_service_provided_appointment_i_idx` (`appointment_i` ASC),
    ADD CONSTRAINT `fk_service_provided_service_id`
        FOREIGN KEY (`service_id`)
        REFERENCES `service` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_service_provided_appointment_i`
        FOREIGN KEY (`appointment_i`)
        REFERENCES `appointment` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `appointment`
    ADD INDEX `fk_appointment_employee_created_idx` (`employee_created` ASC),
    ADD INDEX `fk_appointment_employee_id_idx` (`employee_id` ASC),
    ADD INDEX `fk_appointment_client_id_idx` (`client_id` ASC),
    ADD CONSTRAINT `fk_appointment_employee_created`
        FOREIGN KEY (`employee_created`)
        REFERENCES `employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_appointment_employee_id`
        FOREIGN KEY (`employee_id`)
        REFERENCES `employee` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_appointment_client_id`
        FOREIGN KEY (`client_id`)
        REFERENCES `client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
