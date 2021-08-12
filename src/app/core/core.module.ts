import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { JwtService } from './services/jwt.service';
import { currentUserReducer } from './store/currentUser.reducer';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forRoot({
            currentUser: currentUserReducer
        })
    ],
    providers: [
        JwtService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpTokenInterceptor,
            multi: true
        }
    ],
})
export class CoreModule { }