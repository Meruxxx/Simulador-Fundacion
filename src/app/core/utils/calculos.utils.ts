import { TipoCredito, TipoDeuda } from '../types/credito.types';
import { TipoAhorro } from './../types/credito.types';

export const tasaInteresLibreInversion: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  24: { tasaMensual: 1.25, tasaEA: 16.08 },
  38: { tasaMensual: 1.25, tasaEA: 16.08},
  72: { tasaMensual: 1.25, tasaEA: 16.08 },
  84: { tasaMensual: 1.25, tasaEA: 16.08 },
  96: { tasaMensual: 1.25, tasaEA: 16.08 },
  108: { tasaMensual: 1.25, tasaEA: 16.08 },
  120: { tasaMensual: 1.25, tasaEA: 16.08 },
  132: { tasaMensual: 1.25, tasaEA: 16.08 },
  156: { tasaMensual: 1.25, tasaEA: 16.08 },
  180: { tasaMensual: 1.25, tasaEA: 16.08 },
};
export const tasaInteresVivienda: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  84: { tasaMensual: 1.2, tasaEA: 15.39 },
};
export const tasaInteresComercio: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.66, tasaEA: 21.84 },
  24: { tasaMensual: 1.81, tasaEA: 24.02},
  36: { tasaMensual: 1.94, tasaEA: 25.93 },
  60: { tasaMensual: 2.15, tasaEA: 29.08 },
  72: { tasaMensual: 1.96, tasaEA: 26.08 },
};
export const tasaInteresEducativo: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 0.5, tasaEA: 6.17 },
};
export const tasaInteresCrediFacil: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.06, tasaEA: 13.49 },
  24: { tasaMensual: 1.27, tasaEA: 16.35 },
  36: { tasaMensual: 1.38, tasaEA: 17.88 },
};

export const parametrosLibreInversion: Record<
  TipoDeuda,
  { plazoMaximo: number; montoMaximo: number }
> = {
  HIPOTECA: { plazoMaximo: 180, montoMaximo: 45000000 },
  DEUDOR_SOLIDARIO: { plazoMaximo: 180, montoMaximo: 45000000 },
  NINGUNA: { plazoMaximo: 180, montoMaximo: 45000000 },
};
export const parametrosVivienda: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 84, montoMaximo: 122651010 },
};
export const parametrosComercio: Record<
  TipoDeuda,
  { plazoMaximo: number; montoMaximo: number }
> = {
  HIPOTECA: { plazoMaximo: 72, montoMaximo: 408836700 },
  DEUDOR_SOLIDARIO: { plazoMaximo: 72, montoMaximo: 408836700 },
  NINGUNA: { plazoMaximo: 72, montoMaximo: 408836700 },
};
export const parametrosEducativo: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 12, montoMaximo: 999999999 },
};
export const parametrosCrediFacil: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 36, montoMaximo: 4000000 },
};

export const parametrosAhorro: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 272557 },
};
export const parametrosAhorroContractuales: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 10000 },
};
export const tasaInteresAhorro: Record<number, { tasaEA: number }> = {
  30: { tasaEA: 1.0},
  60: { tasaEA: 1.3 },
  90: { tasaEA: 5 },
  120: { tasaEA: 5.2 },
  180: { tasaEA: 6 },
  270: { tasaEA: 6.2 },
  360: { tasaEA: 7.2 },
  450: { tasaEA: 7.5 },
  540: { tasaEA: 7.55 },
  720: { tasaEA: 8 },
};
export const tasaInteresAhorroContractuales: Record<number, { tasaEA: number }> = {
  6: { tasaEA: 4.00 },
  9: { tasaEA: 4.50 },
  12: { tasaEA: 5.00 },
  15: { tasaEA: 5.50 },
  18: { tasaEA: 5.50 },
  24: { tasaEA: 5.50 },
  36: { tasaEA: 6.50 }
};

export const CALCULOS_UTILS = {
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  getintervalo(tipoCredito: TipoCredito, numerocuota: number): number {
    let intervalocuota:number=0;
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota < 39) {
          intervalocuota = 38;
        }
        else if (numerocuota <73){
          intervalocuota = 72;
        }

          else if (numerocuota <85){
            intervalocuota = 84;
          }

          else if (numerocuota <97){
            intervalocuota = 96;
          }

          else if (numerocuota >109){
            intervalocuota = 108;
        }
        else if (numerocuota >121){
          intervalocuota = 120;
        }
        else if (numerocuota >133){
          intervalocuota = 132;
        }
        else if (numerocuota >157){
          intervalocuota = 156;
        }
        else if (numerocuota >181){
          intervalocuota = 180;
        }
        break;
        case 'VIVIENDA':
          intervalocuota = 84;
          break;
      case 'COMERCIO':
        if (numerocuota < 13) {
          intervalocuota = 12;
        }
        else if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota <37){
          intervalocuota = 36;
        }

          else if (numerocuota <61){
            intervalocuota = 60;
          }

          else if (numerocuota <73){
            intervalocuota = 72;
          }

          else if (numerocuota >72){
            intervalocuota = 72;
          }
        break;
      case 'EDUCATIVO':
        intervalocuota = 12;
        break;
      case 'CREDIFACIL':
        if (numerocuota < 13) {
          intervalocuota = 12;
        }
        else if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota <37){
          intervalocuota = 36;
        }

          else if (numerocuota <61){
            intervalocuota = 60;
          }

          else if (numerocuota <73){
            intervalocuota = 72;
          }

          else if (numerocuota >72){
            intervalocuota = 73;
          }
        break;
    }
    return intervalocuota;
  },

  calcularValorCuota(
    tipoCredito: TipoCredito,
    tipoDeuda: TipoDeuda,
    monto: number,
    numeroCuotas: number
  ): [valor:number,interes:number,interesesEA:number,error:string]{
    let parametros;
    let tasaMensual;
    let tasaEA;
    let intervalocuota;
    intervalocuota = this.getintervalo(tipoCredito, numeroCuotas);
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        parametros = parametrosLibreInversion[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas

        ) {
          return  [0,0,0,'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0,0,0,'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }

        tasaMensual = tasaInteresLibreInversion[intervalocuota].tasaMensual;
        tasaEA = tasaInteresLibreInversion[intervalocuota].tasaEA;
        break;
      case 'VIVIENDA':
        parametros = parametrosVivienda['NINGUNA'];
        // console.log(parametros);
        if (
          parametros.plazoMaximo < numeroCuotas

        ) {
          return  [0,0,0,'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0,0,0,'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresVivienda[intervalocuota].tasaMensual;
        tasaEA = tasaInteresVivienda[intervalocuota].tasaEA;
        // console.log('la variables de tasa son' + tasaMensual + tasaEA);
        break;
      case 'COMERCIO':
        parametros = parametrosComercio[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas

        ) {
          return  [0,0,0,'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0,0,0,'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresComercio[intervalocuota].tasaMensual;
        tasaEA = tasaInteresComercio[intervalocuota].tasaEA;
        break;
      case 'EDUCATIVO':
        parametros = parametrosEducativo['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas

        ) {
          return  [0,0,0,'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0,0,0,'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresEducativo[intervalocuota].tasaMensual;
        tasaEA = tasaInteresEducativo[intervalocuota].tasaEA;
        break;
      case 'CREDIFACIL':
        parametros = parametrosCrediFacil['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas

        ) {
          return  [0,0,0,'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0,0,0,'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresCrediFacil[intervalocuota].tasaMensual;
        tasaEA = tasaInteresCrediFacil[intervalocuota].tasaEA;
        break;
    }

    const interes = tasaMensual / 100;
    const tasaPlazo = parseFloat(
      Math.pow(1 + interes, -numeroCuotas).toPrecision(2)
    );
    const division = 1 - tasaPlazo;
    const valorCuota = (interes * monto) / division;
    return [valorCuota,tasaMensual,tasaEA,''];
  },
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  calcularInteresAhorro(
    tipoAhorro: TipoAhorro,
    monto: number,
    plazo: number
  ): [valor:number,interes:number] | null {
    let parametros;
    let tasaEA = 0;
    let interestotal = 0;
    console.log(tipoAhorro);
    switch (tipoAhorro) {
      case 'CDAT':
        console.log('se consulta parametros de cdat');
        parametros = parametrosAhorro['NINGUNA'];
        // console.log('Validacion del monto'+' '+monto+' '+parametros.montoMinimo);
        if (parametros.montoMinimo > monto) {
          return null;
        }
        // console.log(plazo);
        tasaEA = tasaInteresAhorro[plazo].tasaEA;
        // console.log(tasaEA);
        var TeaT = 1 + (tasaEA / 100);

        var plazoT = (plazo / 365);

        var Tea = Math.pow(TeaT, plazoT) - 1;

        interestotal = monto * Tea;
        console.log('interestotal cdat ' + interestotal);
        return [interestotal, tasaEA];
        break;
      case 'CONTRACTUALES':
        parametros = parametrosAhorroContractuales['NINGUNA'];
        // console.log('Validacion del monto'+' '+monto+' '+parametros.montoMinimo);
        if (parametros.montoMinimo > monto) {
          return null;
        }
        // console.log(plazo);
        tasaEA = tasaInteresAhorroContractuales[plazo].tasaEA;
        plazo = plazo * 30;
        var TeaT = 1 + (tasaEA / 100);
        var plazoT = (30 / 360);
        var Tna = Math.pow(TeaT, plazoT) - 1;
        var valorsup = ((Math.pow(1 + Tna, plazo / 30)) - 1);
        interestotal = (monto * (valorsup / Tna)) - (monto * plazo / 30);
        console.log('interestotal ' + interestotal);
        return [interestotal, tasaEA];
        break;
    }
    //todo al momento de guardar se debe verificar que los parentesis persistan ya que si el autoformateo los quita puede generar error en los calculos

  },
};
//
