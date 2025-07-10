/*
 * @overview        {AppointmentsModule}
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
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { AppointmentFacade } from './facade/appointment.facade';
import { AppointmentService } from './service/appointment.service';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { AppointmentContainerComponent } from './container/appointment-container/appointment-container.component';
import { AppointmentViewComponent } from './view/appointment-view/appointment-view.component';

import { ClientFacade } from './facade/client.facade';
import { ClientService } from './service/client.service';
import { ClientComponent } from './component/client/client.component';
import { ClientContainerComponent } from './container/client-container/client-container.component';
import { ClientViewComponent } from './view/client-view/client-view.component';

import { EmployeeFacade } from './facade/employee.facade';
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeContainerComponent } from './container/employee-container/employee-container.component';
import { EmployeeViewComponent } from './view/employee-view/employee-view.component';

import { ScheduleFacade } from './facade/schedule.facade';
import { ScheduleService } from './service/schedule.service';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ScheduleContainerComponent } from './container/schedule-container/schedule-container.component';
import { ScheduleViewComponent } from './view/schedule-view/schedule-view.component';

import { ServiceFacade } from './facade/service.facade';
import { ServiceService } from './service/service.service';
import { ServiceComponent } from './component/service/service.component';
import { ServiceContainerComponent } from './container/service-container/service-container.component';
import { ServiceViewComponent } from './view/service-view/service-view.component';

import { ServiceBookedFacade } from './facade/service-booked.facade';
import { ServiceBookedService } from './service/service-booked.service';
import { ServiceBookedComponent } from './component/service-booked/service-booked.component';
import { ServiceBookedContainerComponent } from './container/service-booked-container/service-booked-container.component';
import { ServiceBookedViewComponent } from './view/service-booked-view/service-booked-view.component';

import { ServiceProvidedFacade } from './facade/service-provided.facade';
import { ServiceProvidedService } from './service/service-provided.service';
import { ServiceProvidedComponent } from './component/service-provided/service-provided.component';
import { ServiceProvidedContainerComponent } from './container/service-provided-container/service-provided-container.component';
import { ServiceProvidedViewComponent } from './view/service-provided-view/service-provided-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { AppointmentsRoutingModule } from '@app/module/appointments/appointments.routing.module';

/**
 * TODO: Description of {@code AppointmentsModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        AppointmentComponent,
        AppointmentContainerComponent,
        AppointmentViewComponent,
        ClientComponent,
        ClientContainerComponent,
        ClientViewComponent,
        EmployeeComponent,
        EmployeeContainerComponent,
        EmployeeViewComponent,
        ScheduleComponent,
        ScheduleContainerComponent,
        ScheduleViewComponent,
        ServiceComponent,
        ServiceContainerComponent,
        ServiceViewComponent,
        ServiceBookedComponent,
        ServiceBookedContainerComponent,
        ServiceBookedViewComponent,
        ServiceProvidedComponent,
        ServiceProvidedContainerComponent,
        ServiceProvidedViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        AppointmentsRoutingModule,
        SharedModule
    ],
    exports: [
        AppointmentViewComponent,
        ClientViewComponent,
        EmployeeViewComponent,
        ScheduleViewComponent,
        ServiceViewComponent,
        ServiceBookedViewComponent,
        ServiceProvidedViewComponent,
    ],
    providers: [
        AppointmentFacade,
        AppointmentService,
        ClientFacade,
        ClientService,
        EmployeeFacade,
        EmployeeService,
        ScheduleFacade,
        ScheduleService,
        ServiceFacade,
        ServiceService,
        ServiceBookedFacade,
        ServiceBookedService,
        ServiceProvidedFacade,
        ServiceProvidedService,
    ]
})
export class AppointmentsModule { }
