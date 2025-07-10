/*
 * @overview        {ScheduleFacade}
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
import { ScheduleViewModel } from '../model/schedule.model';
import { ScheduleState } from '../state/schedule.state';
import { ScheduleService } from '../service/schedule.service';

/**
 * TODO: Description of {@code ScheduleFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ScheduleFacade extends GenericFacade<ScheduleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ScheduleService,
        entityState: ScheduleState) {
        super(entityService, entityState);
    }

}
