import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseCardComponent } from './expense-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExpenseCardComponent],
  exports: [ExpenseCardComponent]
})
export class ExpenseCardComponentModule {}
