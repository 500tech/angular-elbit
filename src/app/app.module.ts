import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
// import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TaskEffects } from './store/effects/task.effects';
import { TaskFooterComponent } from './task-footer/task-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskComponent,
    TodosComponent,
    TaskFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
    AppRoutingModule,
    // AuthModule,
    EffectsModule.forRoot([AppEffects, TaskEffects])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
