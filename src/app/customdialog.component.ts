import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'customdialog.component',
  templateUrl: 'customdialog.component.html',
})
export class CustomDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
