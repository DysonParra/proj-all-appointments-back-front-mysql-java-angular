/*
 * @fileoverview    {AppointmentViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code AppointmentViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class AppointmentViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intId: number;
    @Temporal(TemporalType.TIMESTAMP)
    public dtDateCreated: string;
    public intEmployeeCreated: number;
    public intClientId: number;
    public intEmployeeId: number;
    public strClientName: string;
    public strClientContact: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtStartTime: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtEndTimeExpected: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtEndTime: string;
    public decPriceExpected: number;
    public decPriceFull: number;
    public decDiscount: number;
    public decPriceFinal: number;
    public bitCanceled: boolean;
    public txtCancelationReason: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): AppointmentViewModel {
        return new AppointmentViewModel();
    }

}
