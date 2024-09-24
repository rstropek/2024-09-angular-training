import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { NumberGuessingComponent } from './number-guessing/number-guessing.component';
import { NumberGuessingSignalsComponent } from './number-guessing-signals/number-guessing-signals.component';
import { TwoWayDemoComponent } from './two-way-bindings/two-way-demo/two-way-demo.component';
import { TicketListComponent } from './starship-traveler/ticket-list/ticket-list.component';

export const routes: Routes = [
  { path: 'greeting', component: GreetingComponent },
  { path: 'goodbye', component: GoodbyeComponent },
  { path: 'number-guessing', component: NumberGuessingComponent },
  { path: 'number-guessing-signals', component: NumberGuessingSignalsComponent },
  { path: 'two-way-demo', component: TwoWayDemoComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/number-guessing' }
];
