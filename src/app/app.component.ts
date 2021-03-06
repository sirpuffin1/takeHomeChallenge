import { Component } from '@angular/core';
import { CommitsService } from './services/commits.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'takeHomeChallenge';
  commits: any;
  constructor(private commitsService: CommitsService){
    this.commitsService.commits$.subscribe((item: any) => this.commits = item)
  }
}
