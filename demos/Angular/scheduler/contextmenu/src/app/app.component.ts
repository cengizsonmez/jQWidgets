﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('scheduler', {static: false}, {static: false}) myScheduler: jqxSchedulerComponent;

    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id1');
    }
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}	

    generateAppointments() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Quarterly Project Review Meeting',
            calendar: 'Room 1',
            start: new Date(2018, 10, 23, 9, 0, 0),
            end: new Date(2018, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'IT Group Mtg.',
            calendar: 'Room 2',
            start: new Date(2018, 10, 24, 10, 0, 0),
            end: new Date(2018, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Course Social Media',
            calendar: 'Room 3',
            start: new Date(2018, 10, 27, 11, 0, 0),
            end: new Date(2018, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'New Projects Planning',
            calendar: 'Room 2',
            start: new Date(2018, 10, 23, 16, 0, 0),
            end: new Date(2018, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Interview with James',
            calendar: 'Room 1',
            start: new Date(2018, 10, 25, 15, 0, 0),
            end: new Date(2018, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Interview with Nancy',
            calendar: 'Room 4',
            start: new Date(2018, 10, 26, 14, 0, 0),
            end: new Date(2018, 10, 26, 16, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        return appointments;
    };

    date: any = new jqx.date(2016, 11, 23);

    source: any =
    {
        dataType: 'array',
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    resources: any =
    {
        colorScheme: 'scheme02',
        dataField: 'calendar',
        source: new jqx.dataAdapter(this.source)
    };

    appointmentDataFields: any =
    {
        from: 'start',
        to: 'end',
        id: 'id',
        description: 'description',
        location: 'place',
        subject: 'subject',
        resourceId: 'calendar'
    };

    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];

    /**
       * called when the context menu is created.
       * @param {Object} menu - jqxMenu's jQuery object.
       * @param {Object} settings - Object with the menu's initialization settings.
       */
    contextMenuCreate = (menu, settings) => {
        let source = settings.source;
        source.push({ id: 'delete', label: 'Delete Appointment' });
        source.push({
            id: 'status', label: 'Set Status', items:
            [
                { label: 'Free', id: 'free' },
                { label: 'Out of Office', id: 'outOfOffice' },
                { label: 'Tentative', id: 'tentative' },
                { label: 'Busy', id: 'busy' }
            ]
        });
    };

    /**
    * called when the user clicks an item in the Context Menu. Returning true as a result disables the built-in Click handler.
    * @param {Object} menu - jqxMenu's jQuery object.
    * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
    * @param {jQuery.Event Object} the jqxMenu's itemclick event object.
    */
    contextMenuItemClick = (menu, appointment, event) => {
        let args = event.args;
        switch (args.id) {
            case 'delete':
                this.myScheduler.deleteAppointment(appointment.id);
                return true;
            case 'free':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'free');
                return true;
            case 'outOfOffice':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
                return true;
            case 'tentative':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'tentative');
                return true;
            case 'busy':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'busy');
                return true;
        }
    };

    /**
    * called when the menu is opened.
    * @param {Object} menu - jqxMenu's jQuery object.
    * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
    * @param {jQuery.Event Object} the open event.
    */
    contextMenuOpen = (menu, appointment, event) => {
        if (!appointment) {
            menu.jqxMenu('hideItem', 'delete');
            menu.jqxMenu('hideItem', 'status');
        }
        else {
            menu.jqxMenu('showItem', 'delete');
            menu.jqxMenu('showItem', 'status');
        }
    };

    /**
    * called when the menu is closed.
    * @param {Object} menu - jqxMenu's jQuery object.
    * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
    * @param {jQuery.Event Object} the close event.
    */
    contextMenuClose = () => {
    };
}