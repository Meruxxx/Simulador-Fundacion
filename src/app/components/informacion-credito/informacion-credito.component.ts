import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { EmailService } from 'src/app/core/services/email.service';
import { EnviarCorreoPage } from './../../components/enviar-correo/enviar-correo.page';

@Component({
  selector: 'app-informacion-credito',
  templateUrl: './informacion-credito.component.html',
  styleUrls: ['./informacion-credito.component.scss'],
  providers: [CurrencyPipe]
})
export class InformacionCreditoComponent {
  @Input() valorCuota!: number;
  @Input() title!: any;
  @Input() intereses!: any;
  @Input() interesesEA!: any;
  @Input() TotalAhorro!: any;
  @Input() TotalCredito!: any;
  @Input() plazo!: any;
  @Input() tipoSolicitud!: any;

  _Tem: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private dialogService: NbDialogService,
    private currencyPipe: CurrencyPipe
  ) {

  }

  get informacion() {
    if (this.title === 'Informción Crédito') {
      return {
        titleLabel: 'Cuota fija mensual',
        title: this.valorCuota,
        footerFirstLabel: 'Tasa' ,
        footerFirstValue:  `${this.intereses}%`,
        footerSecondLabel: 'Tiempo de pago',
        footerSecondValue: `${this.plazo}`,
        footerThirdLabel: 'Valor del crédito',
        footerThirdValue: `${this.TotalCredito}`,
      }
    } else if(this.title === 'Informción Ahorro CDAT') {
      return {
        titleLabel: 'Inversión + rentabilidad',
        title: this.TotalAhorro,
        footerFirstLabel: '% Tasa EA',
        footerFirstValue: `${this.intereses}%`,
        footerSecondLabel: 'Rendimientos Brutos',
        footerSecondValue: this.toCurrency(this.valorCuota),
      }

    }
    else {
      return {
        titleLabel: 'Monto ahorrado',
        title: this.TotalAhorro,
        footerFirstLabel: '% Tasa EA',
        footerFirstValue: `${this.intereses}%`,
        footerSecondLabel: 'Rendimientos',
        footerSecondValue: this.toCurrency(this.valorCuota),
      }
    }
  }


  open(): void {
        this.dialogService.open(EnviarCorreoPage, {
      autoFocus: true,
      context: {
        tipo_contacto:this.title,
        tipo_solicitud:this.tipoSolicitud
      }
    });
  }

  private toCurrency(value: number): string {
    return this.currencyPipe.transform(value) || '';
  }
}
