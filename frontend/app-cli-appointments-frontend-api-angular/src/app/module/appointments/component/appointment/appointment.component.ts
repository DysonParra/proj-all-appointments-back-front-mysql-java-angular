/*
 * @overview        {AppointmentComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { AppointmentViewModel } from '../../model/appointment.model';

/**
 * TODO: Description of {@code AppointmentComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    standalone: false,
    styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent extends GenericComponent<AppointmentViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: AppointmentViewModel) {
        super(entityInstance);
    }

}
