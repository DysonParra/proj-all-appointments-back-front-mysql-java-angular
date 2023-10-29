/*
 * @fileoverview    {Appointment}
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
 * @since 11
 */
@Entity
@Table(name = "\"Appointment\"")
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
    @Column(length = 128)
    private String strClientName;
    @Column(length = 128)
    private String strClientContact;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtStartTime;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtEndTimeExpected;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtEndTime;
    @Column(precision = 10, scale = 2)
    private BigDecimal decPriceExpected;
    @Column(precision = 10, scale = 2)
    private BigDecimal decPriceFull;
    @Column(precision = 10, scale = 2)
    private BigDecimal decDiscount;
    @Column(precision = 10, scale = 2)
    private BigDecimal decPriceFinal;
    private Boolean bitCanceled;
    @Lob
    @Column(length = 65535, columnDefinition = "TEXT")
    private String txtCancelationReason;
    @JoinColumn(name = "intClientId", referencedColumnName = "intId")
    private Long intClientId;
    @JoinColumn(name = "intEmployeeCreated", referencedColumnName = "intId")
    private Long intEmployeeCreated;
    @JoinColumn(name = "intEmployeeId", referencedColumnName = "intId")
    private Long intEmployeeId;

}
