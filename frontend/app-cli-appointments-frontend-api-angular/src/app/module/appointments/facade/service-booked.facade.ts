/*
 * @overview        {ServiceBookedFacade}
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
import { ServiceBookedViewModel } from '../model/service-booked.model';
import { ServiceBookedState } from '../state/service-booked.state';
import { ServiceBookedService } from '../service/service-booked.service';

/**
 * TODO: Description of {@code ServiceBookedFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ServiceBookedFacade extends GenericFacade<ServiceBookedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ServiceBookedService,
        entityState: ServiceBookedState) {
        super(entityService, entityState);
    }

}
