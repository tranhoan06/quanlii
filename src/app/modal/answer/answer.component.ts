import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent  {
  @Input() newData: any;
  checked: any;
  checked1!: true


}
