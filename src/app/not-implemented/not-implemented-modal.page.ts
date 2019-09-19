import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-implemented-modal',
  templateUrl: './not-implemented-modal.page.html',
  styleUrls: ['./not-implemented-modal.page.scss'],
})
export class NotImplementedModalPage {

  @Input() issueId: number;
  @Input() description: string;

  constructor() { }

}
