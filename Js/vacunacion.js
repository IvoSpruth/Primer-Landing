document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ], 
        locale: "es", 
        events:[
            {
                title: 'Vacuna 1',
                start: '2020-06-17',
            },
            {
                title: 'Vacuna 2',
                start: '2020-07-17'
            },
            {
                title: 'Vacuna 3',
                start: '2020-08-12'
            },
            {
                title: 'Vacuna 4',
                start: '2020-08-21'
            }
        ]
    });

    calendar.render();
  });
