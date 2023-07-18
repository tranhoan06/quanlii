import { Component, EventEmitter, Output, Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Injectable()
@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css'],
})
export class ThongtinComponent {
  @Output() formDataEvent = new EventEmitter<any>();
  constructor(private appComponent: AppComponent) {}

  value?: string;
  selectedOption: string = 'Loại khảo sát';
  priorities: string = 'Ưu tiên';
  selectedDateRange: Date[] | null = null;
  goalString?: string;
  noteString?: string;

  isDirty = false;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectPrority(option: string) {
    this.priorities = option;
  }

  // Checkbox
  checked = false;

  // btn reset
  onInputChange() {
    this.isDirty = true;
  }

  handleSave() {
    const formData = {
      value: this.value,
      selectedOption: this.selectedOption,
      priorities: this.priorities,
      selectedDateRange: this.selectedDateRange,
      checked: this.checked,
      goalString: this.goalString,
      noteString: this.noteString,
    };
    this.formDataEvent.emit(formData);
    this.appComponent.isVisible = true;
  }

  // reset
  resetValues() {
    this.value = ''; // Thiết lập giá trị ban đầu cho input "Tiêu đề"
    this.selectedOption = 'Loại khảo sát'; // Thiết lập giá trị ban đầu cho dropdown "Loại khảo sát"
    this.priorities = 'Ưu tiên'; // Thiết lập giá trị ban đầu cho dropdown "Ưu tiên"
    this.selectedDateRange = null;
    this.checked = false; // Thiết lập giá trị ban đầu cho checkbox "Hiển thị/Ẩn"
    this.goalString = '';
    this.noteString = '';
  }
}
