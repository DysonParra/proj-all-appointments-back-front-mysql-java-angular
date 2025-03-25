/*
 * @fileoverview    {EmployeeComponent}
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
import { EmployeeViewModel } from '../../model/employee.model';

/**
 * TODO: Description of {@code EmployeeComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    standalone: false,
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends GenericComponent<EmployeeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EmployeeViewModel) {
        super(entityInstance);
    }

}
