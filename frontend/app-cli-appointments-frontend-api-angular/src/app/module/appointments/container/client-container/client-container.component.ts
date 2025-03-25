/*
 * @fileoverview    {ClientContainerComponent}
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
import { ClientViewModel } from '../../model/client.model';
import { ClientFacade } from '../../facade/client.facade';

/**
 * TODO: Description of {@code ClientContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-client-container',
    templateUrl: './client-container.component.html',
    standalone: false,
    styleUrls: ['./client-container.component.css']
})
export class ClientContainerComponent extends GenericContainerComponent<ClientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ClientViewModel,
        entityFacade: ClientFacade) {
        super(entityInstance, entityFacade);
    }

}
