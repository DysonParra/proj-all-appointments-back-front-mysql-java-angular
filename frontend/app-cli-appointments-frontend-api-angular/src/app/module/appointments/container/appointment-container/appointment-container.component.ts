/*
 * @overview        {AppointmentContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { AppointmentViewModel } from '../../model/appointment.model';
import { AppointmentFacade } from '../../facade/appointment.facade';

/**
 * TODO: Description of {@code AppointmentContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-appointment-container',
    templateUrl: './appointment-container.component.html',
    standalone: false,
    styleUrls: ['./appointment-container.component.css']
})
export class AppointmentContainerComponent extends GenericContainerComponent<AppointmentViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AppointmentViewModel,
        entityFacade: AppointmentFacade) {
        super(entityInstance, entityFacade);
    }

}
