import { ImobService } from './services/imob.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatDialogModule,MatMenuModule, MatListModule, MatToolbarModule, MatGridListModule, MdButtonModule,MatCardModule, MatIconModule } from '@angular/material';
import { ImobListComponent } from './imob-list/imob-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImobElemComponent } from './imob-list/imob-elem/imob-elem.component';
import { ImobComponent } from './imob/imob.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImobListComponent,
    ImobElemComponent,
    ImobComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule

  ],
  providers: [ImobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
