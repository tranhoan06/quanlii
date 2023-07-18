import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isVisible = false;
  isOkLoading = false;
  formData: any;
  activeTab = 0;
  istabDisabled = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(formData: any): void {
    // this.isOkLoading = true;
    setTimeout(() => {
      // this.isVisible = false;
      this.handleFormData(formData);
      this.istabDisabled = true;
      this.activeTab = 1;
      // this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleFormData(formData: any) {
    localStorage.setItem('formData', JSON.stringify(formData));
  }
}
