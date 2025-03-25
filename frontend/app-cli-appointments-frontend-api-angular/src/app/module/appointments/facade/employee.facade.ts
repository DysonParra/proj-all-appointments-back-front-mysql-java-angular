/*
 * @fileoverview    {EmployeeFacade}
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
import { EmployeeViewModel } from '../model/employee.model';
import { EmployeeState } from '../state/employee.state';
import { EmployeeService } from '../service/employee.service';

/**
 * TODO: Description of {@code EmployeeFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class EmployeeFacade extends GenericFacade<EmployeeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: EmployeeService,
        entityState: EmployeeState) {
        super(entityService, entityState);
    }

}
