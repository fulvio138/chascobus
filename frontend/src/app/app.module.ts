import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PassengersComponent } from './components/passengers/passengers.component';
import { PassengerService } from './services/passenger.service';

import { PeopleComponent} from './components/people/people.component';
import { PersonService } from './services/person.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatIconModule } from '@angular/material'
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


import { TravelsComponent } from './components/travels/travels.component';
import { SearchByDniPipe } from './pipes/search-by-dni.pipe';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

/* Firebase 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
*/
@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    PeopleComponent,
    TravelsComponent,
    SearchByDniPipe,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [PassengerService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
