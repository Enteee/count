import { Type } from '@angular/core';

import { Model } from './model';

interface AnalyticsItemInfo {
  name: string;
  description: string;
  icon: string;
  url: string;
}

export class AnalyticsItem extends Model {
  constructor(public component: Type<any>, public info: AnalyticsItemInfo) {
    super();
    this.id = this.info.url;
  }
}
