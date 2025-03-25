/*
 * @fileoverview    {EmployeeContainerComponent}
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
import { EmployeeViewModel } from '../../model/employee.model';
import { EmployeeFacade } from '../../facade/employee.facade';

/**
 * TODO: Description of {@code EmployeeContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-employee-container',
    templateUrl: './employee-container.component.html',
    standalone: false,
    styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent extends GenericContainerComponent<EmployeeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EmployeeViewModel,
        entityFacade: EmployeeFacade) {
        super(entityInstance, entityFacade);
    }

}
