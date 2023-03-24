import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CSS } from '../models/css.model';

@Component({
  selector: 'app-css-input',
  templateUrl: './css-input.component.html',
  styleUrls: ['./css-input.component.scss']
})
export class CssInputComponent {
  protected css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }
 @Input() color: undefined 
  @Output() styles = new EventEmitter();
  protected onGenerateCSS() {
    console.log(this.css.color)
    this.css.color = 'czerwony'
  }
}
