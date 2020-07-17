import { TutorialComponent } from './components/tutorial/tutorial.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'surpriseDeal';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(TutorialComponent);
  }
}
