import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [PanelComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PanelComponent, LoaderComponent]
})
export class SharedModule { }
