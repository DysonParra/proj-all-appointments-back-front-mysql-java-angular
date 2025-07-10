/*
 * @overview        {Appointment}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Appointment}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"appointment\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Appointment implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtDateCreated;
    private Long intEmployeeCreated;
    private Long intClientId;
    private Long intEmployeeId;
    private String strClientName;
    private String strClientContact;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtStartTime;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtEndTimeExpected;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtEndTime;
    private BigDecimal decPriceExpected;
    private BigDecimal decPriceFull;
    private BigDecimal decDiscount;
    private BigDecimal decPriceFinal;
    private Boolean bitCanceled;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String txtCancelationReason;

}
