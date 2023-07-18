import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { InfoComponent } from 'src/app/modal/info/info.component';

@Component({
  selector: 'app-cauhoi',
  templateUrl: './cauhoi.component.html',
  styleUrls: ['./cauhoi.component.css'],
})
export class CauhoiComponent {
  @ViewChild(InfoComponent) infoComponent!: InfoComponent;
  @Output() newDataChanged = new EventEmitter<any>();

  isVisible = false;
  istabDisabled = false;
  activeTab = 0;
  newData: any;

  value: any;
  compulsory: any;
  kind: any;
  checked: any;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
    this.activeTab = 0;
    this.istabDisabled = false;
  }

  handleOk(): void {
    this.newData = this.infoComponent.dataNew;
    setTimeout(() => {
      localStorage.setItem('newData', JSON.stringify(this.newData));
      this.istabDisabled = true;
      this.activeTab = 1;

      this.newDataChanged.emit(this.newData);
    }, 3000);

    if (this.activeTab == 1) {
      this.handleCancel();
    }
  }

  handleCancel(): void {
    this.isVisible = false;

    // Lấy data khỏi local
    const newData = localStorage.getItem('newData');
    if (newData) {
      const parsedData = JSON.parse(newData);
      this.value = parsedData.value;
      this.compulsory = parsedData.compulsory;
      this.kind = parsedData.kind;
      this.checked = parsedData.checked;
    }
    this.activeTab = 0;
    this.istabDisabled = false;
  }

  resetAllvalue() {
    this.infoComponent.resetValue();
  }
}
