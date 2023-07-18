import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  isDirty = false;
  compulsory: string = 'Có';
  kind: string = 'Loại';
  checked: boolean = false;
  value: string = '';

  selectCompulsory(option: string) {
    this.compulsory = option;
  }

  selectKind(option: string) {
    this.kind = option;
  }

  onInputChange() {
    this.isDirty = true;
  }

  resetValue() {
    this.value = '';
    this.checked = false;
    this.compulsory = 'Có';
    this.kind = 'Loại';
  }

  get dataNew() {
    return {
      value: this.value,
      compulsory: this.compulsory,
      kind: this.kind,
      checked: this.checked,
    };
  }
}
