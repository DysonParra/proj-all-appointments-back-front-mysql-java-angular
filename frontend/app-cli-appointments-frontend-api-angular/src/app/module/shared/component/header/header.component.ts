/*
 * @overview        {HeaderComponent}
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
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router } from '@angular/router';

/**
 * TODO: Description of {@code HeaderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: false,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public topMenu: any[];
    public showSubmenuModes: any;
    public showFirstSubmenuModes: any;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(private router: Router) {

        this.topMenu = [
            {
                name: 'Appointment',
                route: 'appointment',
                items: []
            },
            {
                name: 'Client',
                route: 'client',
                items: []
            },
            {
                name: 'Employee',
                route: 'employee',
                items: []
            },
            {
                name: 'Schedule',
                route: 'schedule',
                items: []
            },
            {
                name: 'Service',
                route: 'service',
                items: []
            },
            {
                name: 'ServiceBooked',
                route: 'service-booked',
                items: []
            },
            {
                name: 'ServiceProvided',
                route: 'service-provided',
                items: []
            },
        ];

        this.showSubmenuModes = [
            {
                name: "onhover",
                delay: { show: 0, hide: 0 }
            },
            {
                name: "onclick",
                delay: { show: 0, hide: 0 }
            }
        ];

        this.showFirstSubmenuModes = this.showSubmenuModes[0];

    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code itemClick}.
     *
     */
    public itemClick(data: any): void {
        if (data.route && (!data.items || data.items.length == 0))
            this.router.navigateByUrl(data.route);
    }

}
