import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './component/shared/shared.module';
import { MainComponent } from './component/components/main/main.component';
import { ProductComponent } from './component/components/pages/product/product.component';
import { DashboardComponent } from './component/components/dashboard/dashboard.component';
import { AdminPanelComponent } from './component/components/pages/admin-panel/admin-panel.component';
import { LoginComponent } from './component/components/login/login.component';
import { LoginUpdateComponent } from './component/components/login-update/login-update.component';
import { NotfoundComponent } from './component/components/notfound/notfound.component';
import { HttpConfigInterceptor } from './component/interceptor/httpconfig.interceptor';
import { AdminProductsComponent } from './component/components/pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/components/pages/admin-orders/admin-orders.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    DashboardComponent,
    AdminPanelComponent,
    LoginComponent,
    LoginUpdateComponent,
    NotfoundComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],

  providers: [
    HttpClientModule,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
