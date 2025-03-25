/*
 * @fileoverview    {AppointmentFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { AppointmentViewModel } from '../model/appointment.model';
import { AppointmentState } from '../state/appointment.state';
import { AppointmentService } from '../service/appointment.service';

/**
 * TODO: Description of {@code AppointmentFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class AppointmentFacade extends GenericFacade<AppointmentViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: AppointmentService,
        entityState: AppointmentState) {
        super(entityService, entityState);
    }

}
