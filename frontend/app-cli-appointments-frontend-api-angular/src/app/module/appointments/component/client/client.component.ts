/*
 * @fileoverview    {ClientComponent}
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
import { ClientViewModel } from '../../model/client.model';

/**
 * TODO: Description of {@code ClientComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    standalone: false,
    styleUrls: ['./client.component.css']
})
export class ClientComponent extends GenericComponent<ClientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ClientViewModel) {
        super(entityInstance);
    }

}
