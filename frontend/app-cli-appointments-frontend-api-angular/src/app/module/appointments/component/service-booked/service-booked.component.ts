/*
 * @overview        {ServiceBookedComponent}
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
import { ServiceBookedViewModel } from '../../model/service-booked.model';

/**
 * TODO: Description of {@code ServiceBookedComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-service-booked',
    templateUrl: './service-booked.component.html',
    standalone: false,
    styleUrls: ['./service-booked.component.css']
})
export class ServiceBookedComponent extends GenericComponent<ServiceBookedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ServiceBookedViewModel) {
        super(entityInstance);
    }

}
