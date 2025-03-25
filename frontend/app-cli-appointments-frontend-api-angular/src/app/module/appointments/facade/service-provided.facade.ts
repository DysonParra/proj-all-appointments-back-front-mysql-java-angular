/*
 * @fileoverview    {ServiceProvidedFacade}
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
import { ServiceProvidedViewModel } from '../model/service-provided.model';
import { ServiceProvidedState } from '../state/service-provided.state';
import { ServiceProvidedService } from '../service/service-provided.service';

/**
 * TODO: Description of {@code ServiceProvidedFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ServiceProvidedFacade extends GenericFacade<ServiceProvidedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ServiceProvidedService,
        entityState: ServiceProvidedState) {
        super(entityService, entityState);
    }

}
