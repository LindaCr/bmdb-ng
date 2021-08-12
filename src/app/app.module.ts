import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './features/movie/movie-list/movie-list.component';
import { ActorListComponent } from './features/actor/actor-list/actor-list.component';
import { CreditListComponent } from './features/credit/credit-list/credit-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { MovieCreateComponent } from './features/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './features/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './features/movie/movie-detail/movie-detail.component';
import { ActorDetailComponent } from './features/actor/actor-detail/actor-detail.component';
import { ActorCreateComponent } from './features/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './features/actor/actor-edit/actor-edit.component';
import { CreditDetailComponent } from './features/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './features/credit/credit-edit/credit-edit.component';
import { CreditCreateComponent } from './features/credit/credit-create/credit-create.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserCreateComponent } from './features/user/user-create/user-create.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserEditComponent } from './features/user/user-edit/user-edit.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MenuComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    ActorCreateComponent,
    ActorEditComponent,
    CreditDetailComponent,
    CreditEditComponent,
    CreditCreateComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
