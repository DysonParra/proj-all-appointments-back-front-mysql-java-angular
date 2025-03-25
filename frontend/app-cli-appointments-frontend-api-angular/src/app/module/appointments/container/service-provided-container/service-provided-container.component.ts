/*
 * @fileoverview    {ServiceProvidedContainerComponent}
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
import { ServiceProvidedViewModel } from '../../model/service-provided.model';
import { ServiceProvidedFacade } from '../../facade/service-provided.facade';

/**
 * TODO: Description of {@code ServiceProvidedContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-service-provided-container',
    templateUrl: './service-provided-container.component.html',
    standalone: false,
    styleUrls: ['./service-provided-container.component.css']
})
export class ServiceProvidedContainerComponent extends GenericContainerComponent<ServiceProvidedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ServiceProvidedViewModel,
        entityFacade: ServiceProvidedFacade) {
        super(entityInstance, entityFacade);
    }

}
