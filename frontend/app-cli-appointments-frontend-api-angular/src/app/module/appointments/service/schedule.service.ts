/*
 * @fileoverview    {ScheduleService}
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
import { GenericService } from '@app/module/essential/service/generic.service';
import { ScheduleViewModel } from '../model/schedule.model';

/**
 * TODO: Description of {@code ScheduleService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ScheduleService extends GenericService<ScheduleViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/schedule/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/schedule`;
    public dtoList: string = `scheduleDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ScheduleViewModel) {
        super(entityInstance);
    }

}
