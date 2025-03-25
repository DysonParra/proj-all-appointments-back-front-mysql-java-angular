/*
 * @fileoverview    {ServiceFacade}
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
import { ServiceViewModel } from '../model/service.model';
import { ServiceState } from '../state/service.state';
import { ServiceService } from '../service/service.service';

/**
 * TODO: Description of {@code ServiceFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ServiceFacade extends GenericFacade<ServiceViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ServiceService,
        entityState: ServiceState) {
        super(entityService, entityState);
    }

}
