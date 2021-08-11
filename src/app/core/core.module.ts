import { HttpTokenInterceptor } from './../../../angular-realworld-example-app-master/src/app/core/interceptors/http.token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpTokenInterceptor,
            multi: true
        }
    ],
})
export class CoreModule { }