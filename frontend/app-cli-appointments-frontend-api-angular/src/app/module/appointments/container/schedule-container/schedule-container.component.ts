/*
 * @fileoverview    {ScheduleContainerComponent}
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
import { ScheduleViewModel } from '../../model/schedule.model';
import { ScheduleFacade } from '../../facade/schedule.facade';

/**
 * TODO: Description of {@code ScheduleContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-schedule-container',
    templateUrl: './schedule-container.component.html',
    standalone: false,
    styleUrls: ['./schedule-container.component.css']
})
export class ScheduleContainerComponent extends GenericContainerComponent<ScheduleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ScheduleViewModel,
        entityFacade: ScheduleFacade) {
        super(entityInstance, entityFacade);
    }

}
