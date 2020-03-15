import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
// import { Options } from 'fullcalendar';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css', '../styles/cardcontent.css']
})
export class EventosComponent implements OnInit {
  /*calendarOptions: Options;
 displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;*/
  public calendar: any[] = [
    {
      name: 'Dezembro',
      events: [
        {
          day: '14',
          description: 'Ultima reunião do ano!',
          lobitos: true,
          exploradores: false,
          pioneiros: false,
          caminheiros: false
        }
      ]
    },
    {
      name: 'Janeiro',
      events: [
        {
          day: '4',
          description: 'Conga e Encargos',
          lobitos: true,
          exploradores: true,
          pioneiros: true,
          caminheiros: true
        },
        {
          day: '11 a 12',
          description: 'Acantonamento dos Lobitos!',
          lobitos: true,
          exploradores: false,
          pioneiros: false,
          caminheiros: false
        },
        {
          day: 'O mês todo',
          description: 'Janeiras!',
          lobitos: true,
          exploradores: true,
          pioneiros: true,
          caminheiros: true
        }
      ]
    }
  ];
  ngOnInit() {
     /*this.calendarOptions = {
        editable: false,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: null
      };*/
  }

  /*clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    };
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    };
    this.displayEvent = model;
  }*/
}
