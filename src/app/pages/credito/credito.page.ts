import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { TipoDeuda } from 'src/app/core/types/credito.types';
import {
  CALCULOS_UTILS,
  parametrosLibreInversion
} from 'src/app/core/utils/calculos.utils';

@Component({
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditoPage {
  isBold = false;
  isItalic = true;
  isUnderline = false;
  title = 'Informción Crédito';
  cuota: number = 0;
  _Tem: number = 1;
  selectedItemNgModel: any;
  valorCuota = 0;
  interes = 0;
  interesEA = 0;
  totalCredito = 0;
  haSimulado = false;
  montomaximo = 0;
  plazomaximo = 0;
  form!: FormGroup;

  options: any = [
    {
      text: '2 año',
      value: 24,
    },
    {
      text: '3 años',
      value: 38,
    },
    {
      text: '6 años',
      value: 72,
    },
    {
      text: '7 años',
      value: 84,
    },
    {
      text: '8 años',
      value: 96,
    },
    {
      text: '9 años',
      value: 108,
    },
    {
      text: '10 años',
      value: 120,
    },
    {
      text: '11 años',
      value: 132,
    },
    {
      text: '13 años',
      value: 156,
    },
    {
      text: '15 años',
      value: 180,
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService
  ) {
    this.form = formBuilder.group({
      tipoDeuda: ['hipoteca', [Validators.required]],
      montoPrestamo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      numeroCuotas: [''],
      plazo: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      valorCuota: [''],
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.OnRadioChange(this.tipoDeudaF.value);
  }
  get tipoDeudaF() {
    return this.form.controls['tipoDeuda']; //
  }
  get montoPrestamo() {
    return this.form.controls['montoPrestamo']; //
  }

  get numeroCuotas() {
    return this.form.controls['numeroCuotas'];
  }
  get plazo() {
    return this.form.controls['plazo'];
  }

  CalcularCuota(Monto: number, Plazo: number): number {
    let tinteres: number = this._Tem / 100;
    let tplazo: number = parseFloat(
      Math.pow(1 + tinteres, -Plazo).toPrecision(2)
    );
    let tdivision: number = 1 - tplazo;
    // console.log(tdivision);
    let vc: number = (tinteres * Monto) / tdivision;
    return vc;
  }

  onClick(): void {
    let valorCuota: any;

    if (this.form.valid) {
      this.form.get('montoPrestamo')?.hasError('required');

      const tipoDeuda: Record<string, TipoDeuda> = {
        hipoteca: 'HIPOTECA',
        deudorSolidario: 'DEUDOR_SOLIDARIO',
        ninguna: 'NINGUNA',
      };
      // this.form.get('tipoDeuda')?.valueChanges.subscribe((selectedValue) => {
      //   setTimeout(() => {
      //   });
      // });
      // console.log(this.form.value); //shows the latest first name
      valorCuota = CALCULOS_UTILS.calcularValorCuota(
        'LIBRE_INVERSION',
        tipoDeuda[this.form.get('tipoDeuda')?.value],
        this.montoPrestamo.value,
        this.plazo.value
      );
      if (valorCuota) {
        if (valorCuota[3]) {
          this.toastrService.show(`${valorCuota[3]}`, 'Advertencia', {
            status: 'warning',
          });
        } else {
          this.valorCuota = valorCuota[0];
          this.interes = valorCuota[1];
          this.interesEA = valorCuota[2];
          // this.totalCredito =this.valorCuota * parseFloat(this.numeroCuotas.value);
          this.totalCredito = this.montoPrestamo.value;//this.valorCuota * parseFloat(this.plazo.value);
          this.haSimulado = true;
          // console.log(valorCuota);
        }
      } else {
        this.toastrService.show(
          'No se ha generado datos para simular la cuota',
          `'Error '${this.montoPrestamo.value}`,
          {
            status: 'warning',
          }
        );
      }
    }
  }
  onClickContacto(): void {}

  onClickNumCuotas(e: any) {
    this.resetValues();
    this.form.patchValue({ numeroCuotas: e.value });
    this.haSimulado = false;
  }

  private resetValues(): void {
    this.valorCuota = 0;
    this.interes = 0;
    this.totalCredito = 0;
    this.interesEA = 0;
  }
  onEnter(event: any) {
    this.resetValues();
    this.haSimulado = false;
  }
  onEnterNuevo() {
    this.resetValues();
    this.montoPrestamo.setValue(0);
    this.plazo.setValue(0);
    this.haSimulado = false;
  }
  OnRadioChange(event: any) {
    // console.log(event);
    // this.form.get("tipoDeuda")?.valueChanges.subscribe(selectedValue => {
    //   setTimeout(() => {
    //     console.log(this.form.value)   //shows the latest first name
    //   })
    // })
    let parametros;
    const tipoDeuda: Record<string, TipoDeuda> = {
      hipoteca: 'HIPOTECA',
      deudorSolidario: 'DEUDOR_SOLIDARIO',
      ninguna: 'NINGUNA',
    };
    parametros = parametrosLibreInversion[tipoDeuda[event]];

    this.form.controls.plazo.addValidators(
      Validators.max(parametros.plazoMaximo)
    );
    this.form.controls.montoPrestamo.addValidators(
      Validators.max(parametros.montoMaximo)
    );
    this.montomaximo = parametros.montoMaximo;
    this.plazomaximo = parametros.plazoMaximo;
    this.montoPrestamo.updateOn;
  }
}
