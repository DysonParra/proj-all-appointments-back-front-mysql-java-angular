/*
 * @fileoverview    {ServiceProvidedComponent}
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
import { ServiceProvidedViewModel } from '../../model/service-provided.model';

/**
 * TODO: Description of {@code ServiceProvidedComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-service-provided',
    templateUrl: './service-provided.component.html',
    standalone: false,
    styleUrls: ['./service-provided.component.css']
})
export class ServiceProvidedComponent extends GenericComponent<ServiceProvidedViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ServiceProvidedViewModel) {
        super(entityInstance);
    }

}
