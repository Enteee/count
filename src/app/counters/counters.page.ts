import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; count: number;}> = [];
  constructor() {
    for (let i = 1; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        count: 123,
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/counters', JSON.stringify(item)]);
  // }
}
