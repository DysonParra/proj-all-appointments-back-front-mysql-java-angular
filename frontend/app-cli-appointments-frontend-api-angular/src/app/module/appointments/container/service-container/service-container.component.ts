/*
 * @overview        {ServiceContainerComponent}
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
import { ServiceViewModel } from '../../model/service.model';
import { ServiceFacade } from '../../facade/service.facade';

/**
 * TODO: Description of {@code ServiceContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-service-container',
    templateUrl: './service-container.component.html',
    standalone: false,
    styleUrls: ['./service-container.component.css']
})
export class ServiceContainerComponent extends GenericContainerComponent<ServiceViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ServiceViewModel,
        entityFacade: ServiceFacade) {
        super(entityInstance, entityFacade);
    }

}
