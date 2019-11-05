import { Injectable } from '@angular/core';

import { contributors, ContributorInfo } from '../contributors';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor() { }

  get all(): Array<ContributorInfo> {
    return contributors;
  }

  getDonatable(): Array<ContributorInfo> {
    return contributors.filter(
      c => c.donateUrl
    );
  }
}
