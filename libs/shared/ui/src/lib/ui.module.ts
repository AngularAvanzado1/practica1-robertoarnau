import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemsListComponent],
  exports: [ItemsListComponent]
})
export class UiModule {}
