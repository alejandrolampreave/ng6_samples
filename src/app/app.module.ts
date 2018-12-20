import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CommunicationService } from './services/communication.service';
import { CalculatorService } from './services/calculator.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { TransformationPipe } from './transformation.pipe';
import { AbvPipe } from './pipes/abv.pipe';
import { SwComponent } from './components/sw/sw.component';
import { MenuComponent } from './components/menu/menu.component';
import { DateComponent } from './components/date/date.component';
import { MyformComponent } from './components/myform/myform.component';
import {UIRouterModule} from '@uirouter/angular';
import { TrivialComponent } from './components/trivial/trivial.component';
import { CardComponent } from './components/card/card.component';

const todayState = { name: 'today', url: '/today',  component: MainComponent };
const anydayState = { name: 'antday', url: '/anyday',  component: DateComponent };

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    ButtonsComponent,
    HeroListComponent,
    ListComponent,
    FormComponent,
    MainComponent,
    TransformationPipe,
    AbvPipe,
    SwComponent,
    MenuComponent,
    DateComponent,
    MyformComponent,
    TrivialComponent,
    CardComponent
  ],
  imports: [
    UIRouterModule.forRoot({ states: [ todayState, anydayState ], useHash: true }),
    BrowserModule, FormsModule, NgbModule, HttpClientModule
  ],
  providers: [CommunicationService, CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
