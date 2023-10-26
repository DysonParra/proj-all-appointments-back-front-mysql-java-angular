/*
 * @fileoverview    {AppointmentDTO}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code AppointmentDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class AppointmentDTO {

    private Long intId;
    private Date dtDateCreated;
    private String strClientName;
    private String strClientContact;
    private Date dtStartTime;
    private Date dtEndTimeExpected;
    private Date dtEndTime;
    private BigDecimal decPriceExpected;
    private BigDecimal decPriceFull;
    private BigDecimal decDiscount;
    private BigDecimal decPriceFinal;
    private Boolean bitCanceled;
    private String txtCancelationReason;
    private Long intClientId;
    private Long intEmployeeCreated;
    private Long intEmployeeId;

}
