import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { TestComponent } from './components/test/test.component';
import { AlertComponent } from './components/alert/alert.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BkscComponent } from './components/bksc/bksc.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { TableComponent } from './components/table/table.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdmissionComponent,
    PnfComponent,
    TestComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ModalComponent,
    NavComponent,
    OffcanvasComponent,
    BkscComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    ScrollspyComponent,
    TableComponent,
    ToastComponent,
    TooltipComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TimepickerComponent,
    DatepickerComponent,
    TypeaheadComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
