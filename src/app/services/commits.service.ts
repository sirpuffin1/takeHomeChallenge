import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  commits$: any
  constructor(private api: ApiService) {
    this.commits$ = this.api.get('repos/sirpuffin1/takeHomeChallenge/commits')
  }
}
