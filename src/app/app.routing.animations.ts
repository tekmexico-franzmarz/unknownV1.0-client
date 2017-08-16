import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(200%)' }),
      animate('2s ease-in-out',
        style({ transform: 'translateX(-50%)' }))
      ], { optional: true }
      ),
      query(':leave', [style({ transform: 'translateX(-50%)' }),
      animate('2s ease-in-out',
        style({ transform: 'translateX(-200%)' }))
      ], { optional: true })
    ])
  ])
])
