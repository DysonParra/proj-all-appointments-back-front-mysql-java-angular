/*
 * @overview        {AppointmentsRoutingModule}
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentViewComponent } from './view/appointment-view/appointment-view.component';
import { ClientViewComponent } from './view/client-view/client-view.component';
import { EmployeeViewComponent } from './view/employee-view/employee-view.component';
import { ScheduleViewComponent } from './view/schedule-view/schedule-view.component';
import { ServiceViewComponent } from './view/service-view/service-view.component';
import { ServiceBookedViewComponent } from './view/service-booked-view/service-booked-view.component';
import { ServiceProvidedViewComponent } from './view/service-provided-view/service-provided-view.component';

const routes: Routes = [
    {
        path: 'appointment',
        component: AppointmentViewComponent
    },
    {
        path: 'client',
        component: ClientViewComponent
    },
    {
        path: 'employee',
        component: EmployeeViewComponent
    },
    {
        path: 'schedule',
        component: ScheduleViewComponent
    },
    {
        path: 'service',
        component: ServiceViewComponent
    },
    {
        path: 'service-booked',
        component: ServiceBookedViewComponent
    },
    {
        path: 'service-provided',
        component: ServiceProvidedViewComponent
    },
];

/**
 * TODO: Description of {@code AppointmentsRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
