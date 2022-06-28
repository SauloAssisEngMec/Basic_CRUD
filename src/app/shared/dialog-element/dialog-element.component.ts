import { Component, OnInit, Inject } from '@angular/core';
import { PeriodicElement } from 'src/app/views/home/home.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-element',
  templateUrl: './dialog-element.component.html',
  styleUrls: ['./dialog-element.component.scss']
})
export class DialogElementComponent implements OnInit {
  element!: PeriodicElement;
  isChange!: boolean;


  constructor(
    public dialogRef: MatDialogRef<DialogElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
  ) {}

  

  ngOnInit(): void {
    if (this.data.position != null ){
      this.isChange = true;
    } else {
      this.isChange
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
