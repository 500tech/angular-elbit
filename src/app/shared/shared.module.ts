import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';
import { PrettyCountPipe } from './pretty-count.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PanelComponent, LoaderComponent, PrettyCountPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule, PanelComponent, LoaderComponent, PrettyCountPipe, CommonModule]
})
export class SharedModule { }
