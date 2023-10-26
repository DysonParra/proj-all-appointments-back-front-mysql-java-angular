/*
 * @fileoverview    {Schedule}
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
 * TODO: Definición de {@code Schedule}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Schedule\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Schedule implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFrom;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtTo;
    @JoinColumn(name = "intEmployeeId", referencedColumnName = "intId")
    private Long intEmployeeId;

}
