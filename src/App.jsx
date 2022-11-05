
function App() {

  /* LOGICA DEL COCOMO 1*/

  //caso de uso
  const CasoUso = 12;
  //lineas de codigo
  const LDC = 90;
  //coste personal por mes
  const SUELDO_P = 2250;
  //nivel de complejidad 1 organico; 2 semi empotrado; 3 empotrado
  const complejidad= 1;


  //miles de lineas de codigo
  const KLDC = (LDC*CasoUso) / 1000;
  console.log("Miles de linea de codigo: ", KLDC);

  //calculamos el esfuerzo
  let Esfuerzo = 0;
  if(complejidad===1){
    Esfuerzo = (3.2*Math.pow(KLDC,1.05)).toFixed(3);
  }else if(complejidad == 2){
    Esfuerzo = (3.0*Math.pow(KLDC,1.12)).toFixed(3);
  }else if(complejidad == 3){
    Esfuerzo = (2.8*Math.pow(KLDC,1.20)).toFixed(3);
  }
  console.log("Esfuerzo: : ", Esfuerzo," personas - mes");

  //calculo de tiempo de desarrollo
  let TD= 0;
  if(complejidad===1){
    TD = (2.5*Math.pow(Esfuerzo,0.38)).toFixed(3);
  }else if(complejidad == 2){
    TD = (2.5*Math.pow(Esfuerzo,0.35)).toFixed(3);
  }else if(complejidad == 3){
    TD = (2.5*Math.pow(Esfuerzo,0.32)).toFixed(3);
  }
  console.log("Tiempo de desarrollo: ", TD," meses")

  //Estimacion personal necesario
  const PN = (Esfuerzo/TD).toFixed(3);
  console.log("Personal Necesario: ",PN," personas - mes");

  //Estimacion de productividad
  const P = ((KLDC*1000)/Esfuerzo).toFixed(3);
  console.log("Isntrucciones a realizar: ", P, " persona - mes");

  //Estimacion de costos
  const C = Esfuerzo*SUELDO_P;
  console.log("Costo Total: ", C," Bs")
  return (
    <>
      COCOMO
    </>
  )
}

export default App
