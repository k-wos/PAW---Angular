import { Component, Input } from '@angular/core';
import { CssInputComponent } from '../css-input/css-input.component';
@Component({
  selector: 'app-check-css',
  templateUrl: './check-css.component.html',
  styleUrls: ['./check-css.component.scss']
})
export class CheckCssComponent {
  @Input() css: any;
}
