/*
 * @overview        {ClientFacade}
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
import { ClientViewModel } from '../model/client.model';
import { ClientState } from '../state/client.state';
import { ClientService } from '../service/client.service';

/**
 * TODO: Description of {@code ClientFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ClientFacade extends GenericFacade<ClientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ClientService,
        entityState: ClientState) {
        super(entityService, entityState);
    }

}
