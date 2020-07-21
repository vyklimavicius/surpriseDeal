import { Component, OnInit } from '@angular/core';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(TutorialComponent);
  }

}
