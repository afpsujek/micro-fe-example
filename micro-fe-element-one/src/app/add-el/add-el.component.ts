import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-el',
  templateUrl: './add-el.component.html',
  styleUrls: ['./add-el.component.scss']
})
export class AddElComponent implements OnInit {

  public mathForm = new FormGroup({
    one: new FormControl(null, [Validators.required]),
    two: new FormControl(null, [Validators.required]),
    res: new FormControl(),
  });

  constructor(private addService: AddService) { }

  ngOnInit(): void {}

  callAdd() {
    console.log(this.mathForm)
    this.mathForm.controls['res'].setValue(this.addService.add(this.mathForm.controls['one'].value, this.mathForm.controls['two'].value)); 
  }

}
