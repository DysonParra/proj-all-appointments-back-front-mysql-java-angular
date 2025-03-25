/*
 * @fileoverview    {ServiceBookedContainerComponent}
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
import { ServiceBookedViewModel } from '../../model/service-booked.model';
import { ServiceBookedFacade } from '../../facade/service-booked.facade';

/**
 * TODO: Description of {@code ServiceBookedContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-service-booked-container',
    templateUrl: './service-booked-container.component.html',
    standalone: false,
    styleUrls: ['./service-booked-container.component.css']
})
export class ServiceBookedContainerComponent extends GenericContainerComponent<ServiceBookedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ServiceBookedViewModel,
        entityFacade: ServiceBookedFacade) {
        super(entityInstance, entityFacade);
    }

}
