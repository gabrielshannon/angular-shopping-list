import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

// import { LoggingService } from '../logging.service';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    SharedModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}
