import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  commits$: any
  constructor(private api: ApiService) { }
}
