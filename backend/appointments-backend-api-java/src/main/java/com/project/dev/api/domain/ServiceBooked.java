/*
 * @fileoverview    {ServiceBooked}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
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
 * TODO: Definición de {@code ServiceBooked}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"ServiceBooked\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ServiceBooked implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    @Column(precision = 10, scale = 2)
    private BigDecimal decPrice;
    @JoinColumn(name = "intAppointmentI", referencedColumnName = "intId")
    private Long intAppointmentI;
    @JoinColumn(name = "intServiceId", referencedColumnName = "intId")
    private Long intServiceId;

}
