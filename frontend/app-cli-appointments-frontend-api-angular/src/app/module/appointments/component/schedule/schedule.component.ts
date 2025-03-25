/*
 * @fileoverview    {ScheduleComponent}
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
import { ScheduleViewModel } from '../../model/schedule.model';

/**
 * TODO: Description of {@code ScheduleComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    standalone: false,
    styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent extends GenericComponent<ScheduleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ScheduleViewModel) {
        super(entityInstance);
    }

}
