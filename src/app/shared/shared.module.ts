import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';
import { PrettyCountPipe } from './pretty-count.pipe';

@NgModule({
  declarations: [PanelComponent, LoaderComponent, PrettyCountPipe],
  imports: [
    CommonModule
  ],
  exports: [PanelComponent, LoaderComponent, PrettyCountPipe]
})
export class SharedModule { }
