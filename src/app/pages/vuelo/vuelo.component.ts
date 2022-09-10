import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  reservaFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  /* vueloFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    fechaRequisicion: ['', Validators.required],
  }); */

  vueloFormGroup = new FormGroup({
    fechaSalida: new FormControl(null, Validators.required),
    secondCtrl: new FormControl(null, Validators.required),
    fechallegada: new FormControl(null, Validators.required),
  });  

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public limpiarForm(stepper: MatHorizontalStepper) {
    stepper.reset();
    this.onCancel.emit(null);
  }
}
