let HORA = 10000;

// 1MMDD00000
const FECHA_PARTIDO_MANANA = 1052100000;
// CAMBIAR ESTA
// CAMBIAR ESTA
// CAMBIAR ESTA
// CAMBIAR ESTA
// CAMBIAR ESTA
HORA += 0; // CAMBIAR ESTA

let FECHA_PARTIDO_HOY = FECHA_PARTIDO_MANANA - 100000;
// let FECHA_PARTIDO_HOY      = 1083100000
FECHA_PARTIDO_HOY += HORA;

const fs = require("node:fs");
const readline = require("node:readline");


const { LIGAS_OBJETOS } = require("./ligas_objetos");
const {
  convertirArrayEnTextoPlanoConFormato,
} = require("./helper-escribir-archivo-plano-como-array");

let inputPartidosFlashscore = "01-input-partidos-flashscore.txt";
let inputPartidosWplay = "02-input-partidos-wplay.txt";
let inputSeMarcaraEnLaPrimeraMitad =
  "03-input-se-marcara-en-la-primera-mitad.txt";
let inputAmbosMarcan = "04-input-ambos-marcan.txt";
let inputOver = "05-input-over.txt";
let inputLocalPrimeraMitad = "06-input-local-primera-mitad.txt";
let inputVisitantePrimeraMitad = "07-input-visitante-primera-mitad.txt";
let inputFavorito = "08-input-favorito.txt";
let inputApuestasAbiertas = "09-input-apuestas-abiertas.txt";
let inputMasPrimeraMitad = "10-input-mas-primera-mitad.txt";
let inputMasMenosPrimeraMitad = "11-input-mas-primera-mitad.txt";
let inputPartidosConFavorito = "12-partidos-con-favorito.txt";

let archivoSalida = "partidos_optimizados.js";
let archivoSalida2 = "ligas.js";
let archivoSalida3 = "partidos_optimizados_flashscore.js";

let outputPartidosWplay = "partidos_optimizados_wplay.js";
let outputSeMarcaraEnLaPrimeraMitad =
  "03-output-se-marcara-en-la-primera-mitad.txt";
let outputAmbosMarcan = "04-output-ambos-marcan.txt";
let outputOver = "05-output-over.txt";
let outputLocalPrimeraMitad = "06-output-local-primera-mitad.txt";
let outputVisitantePrimeraMitad = "07-output-visitante-primera-mitad.txt";
let outputFavorito = "08-output-favorito.txt";
let outputApuestasAbiertas = "apuestas-abiertas.js";

let PartidosWplay = [];
let PartidosSeMarcaraEnLaPrimeraMitad = [];
let PartidosAmbosMarcan = [];
let PartidosOver = [];
let PartidosLocalPrimeraMitad = [];
let PartidosVisitantePrimeraMitad = [];
let PartidosFavorito = [];
let PartidosMasPrimeraMitad = [];
let PartidosMasMenosPrimeraMitad = [];
let PartidosConFavorito = [];

let partidosGlobal = [];

async function main() {
  async function sacarLigasPartidosSinCuota() {
    const fileStream = fs.createReadStream(inputPartidosFlashscore);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let lineas = [];
    let ligas = [];

    let opciones = ["Tabla En Directo", "Clasificación", "Cuadro"];

    let indice = 0;
    let esMundial = false;
    let esHora = false;
    let indiceEsHora = 0;

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      if (!line || line === "-" || line === ": ") {
        continue;
      }
      // console.log(`Line from file: ${line}`);
      lineas.push(line);

      if (esMundial) {
        let liga = `${lineas[indice]}`;
        let ligaEncontrada = LIGAS_OBJETOS.find(
          (ligaObjeto) => ligaObjeto.nombreFlashcore === liga
        );
        if (!ligaEncontrada) {
          let mensajeDeError = `No se encontró, Editar manualmente y volver a ejecutar ${liga}`;
          console.log({ nombreFlashcore: liga, error: mensajeDeError });
          throw new Error(mensajeDeError);
        }
        let ligaObjeto = {
          liga: ligaEncontrada.abreviado,
          mitad: ligaEncontrada.mitad,
          mitadFavorito: ligaEncontrada.favorito,
          codigoWplay: ligaEncontrada.codigoWplay,
        };
        if (ligaEncontrada.abreviado === "I-AMI") {
          // console.log({ testigo: 'esMundial y amistoso', ligaObjeto })
          let ligasAmistosos = [
            {
              liga: "I-AMI",
              mitad: false,
              mitadFavorito: true,
              codigoWplay: 19287,
            },
            {
              liga: "I-AMI23",
              mitad: false,
              mitadFavorito: false,
              codigoWplay: 20182,
            },
            {
              liga: "I-AMI21",
              mitad: false,
              mitadFavorito: false,
              codigoWplay: 19345,
            },
            {
              liga: "I-OLIH",
              codigoWplay: 45631,
              mitad: false,
              mitadFavorito: true,
            },
            {
              liga: "I-CUP",
              codigoWplay: 51339,
              mitad: false,
              mitadFavorito: true,
            },
          ];
          ligas = ligas.concat(...ligasAmistosos);
          // console.log({ ligas })
        } else if (ligaEncontrada.abreviado === "AMIE") {
          let ligasAmistosos = [
            {
              liga: "AMIE",
              codigoWplay: 617783,
              mitad: false,
              mitadFavorito: true,
            },
            {
              liga: "AMIC",
              codigoWplay: 20183,
              mitad: false,
              mitadFavorito: true,
            },
          ];
          ligas = ligas.concat(...ligasAmistosos);
        } else {
          ligas.push(ligaObjeto);
          // console.log({ mensaje: 'LIGA NO ES AMISTOSO', ligaObjeto })
        }

        lineas = [];
        indice = 0;
        esMundial = false;
        continue;
      }

      if (opciones.includes(line) && !esMundial) {
        let liga = `${lineas[indice - 2]} - ${lineas[indice - 1]}`;
        console.log({ liga });

        let ligaEncontrada = LIGAS_OBJETOS.find(
          (ligaObjeto) => ligaObjeto.nombreFlashcore === liga
        );

        console.log({
          testigo: "opciones.includes(line)",
          indice,
          line,
          lineas,
          liga,
        });
        if (!ligaEncontrada) {
          console.log({
            testigo: "opciones.includes(line)",
            indice,
            line,
            lineas,
            liga,
            ligaEncontrada,
          });
          // console.log({ nombreFlashcore: liga, error: 'No se encontró, Editar manualmente y volver a ejecutar' })
          let mensajeDeError = `No se encontró, Editar manualmente y volver a ejecutar ${liga}`;
          throw new Error(mensajeDeError);
        }
        let ligaObjeto = {
          liga: ligaEncontrada.abreviado,
          mitad: ligaEncontrada.mitad,
          mitadFavorito: ligaEncontrada.favorito,
          codigoWplay: ligaEncontrada.codigoWplay,
        };
        // if (ligaEncontrada.abreviado === 'I-AMI') {
        // console.log({ mensaje: 'Es MUNDIAL pero esta en toro lado' })
        // }
        ligas.push(ligaObjeto);
        // console.log({ testigo: 'opciones.includes(line)', ligas })
        lineas = [];
        indice = 0;
        continue;
      }

      if (line === "MUNDIAL") {
        esMundial = true;
      }

      if (esHora && indiceEsHora + 4 === indice) {
        let partido = {
          hora: 10000 + lineas[0].replace(":", "") * 1,
          ...ligas[ligas.length - 1],
          local: lineas[1],
          visitante: lineas[3],
          cuotaLocal: 1,
          empate: 1,
          cuotaVisitante: 1,
          cantidadDeApuestas: 0,
          cuotaCualquiera: 1,
          ambosAnotan: 1,
          over: 1,
          cuotaFavorito: 1,
          rate: 1,
          stake: 0,
        };

        // console.log({ 'lineas[indice - 1]': lineas[indice - 1], 'lineas[indice]': lineas[indice], lineas, indice, indiceEsHora, esHora, line })

        // console.log({ hora: partido.hora })

        // console.log({ partido })

        partidosGlobal.push(partido);
        esHora = false;
        indiceEsHora = 0;
        lineas = [];
        indice = 0;
        continue;
      }

      if (line.length === 5 && line.charAt(2) === ":") {
        esHora = true;
        indiceEsHora = indice;
      }

      indice++;
    }

    if (partidosGlobal.length === 0)
      throw new Error(`${inputPartidosFlashscore} Vacio`);

    const LIGAS_RESPONSE = await convertirArrayEnTextoPlanoConFormato(
      ligas,
      "LIGAS",
      archivoSalida2
    );
    partidosGlobal.sort((a, b) => a.hora - b.hora)
    const PARTIDOS_RESPONSE = await convertirArrayEnTextoPlanoConFormato(
      partidosGlobal,
      "PARTIDOS_OPTIMIZADOS",
      archivoSalida3
    );

    console.log({ LIGAS_RESPONSE, PARTIDOS_RESPONSE });
  }

  await sacarLigasPartidosSinCuota();

  let meses = {
    Ene: "01",
    Feb: "02",
    Mar: "03",
    Abr: "04",
    Mayo: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dic: "12",
  };

  let arrayMeses = Object.keys(meses);

  const convertirFechaANumero = (fechaEnString) => {
    fechaEnString = fechaEnString.replace(":", "");
    let fechaArray = fechaEnString.split(" ");
    let fechaEnStringModificado = `1${meses[fechaArray[2]]}${fechaArray[1]}1${fechaArray[0]
      }`;
    // console.log({fechaEnString, fechaArray, fechaEnStringModificado})
    return fechaEnStringModificado * 1;
  };

  async function sacarPartidosWplay() {
    const fileStream = fs.createReadStream(inputPartidosWplay);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let lineas = [];
    let indice = 0;

    let partidos = [];

    let ligaDelPartido = "";

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      // console.log(`Line from file: ${line}`);
      // continue

      if (line.includes("LIGA---")) {
        ligaDelPartido = line.replace("LIGA---", "");
        continue;
      }

      if (line.startsWith(" ★ ")) {
        let ligaWplayName = line.replace(" ★ ", "");
        console.log({ line: 306, ligaWplayName });
        // if (ligaWplayName === 'Olympics Matches Men') {
        //     console.log({ ligaWplayName })
        // }
        ligaDelPartido =
          LIGAS_OBJETOS.find(
            (l) => l.nombreWplay.toLowerCase() === ligaWplayName.toLowerCase()
          )?.abreviado || "";
        if (ligaWplayName === "Olympics Matches Men") {
          console.log({ ligaWplayName, ligaDelPartido });
        }
        if (ligaDelPartido === "") {
          console.log({ line: 315, ligaWplayName });
          throw new Error("Una liga no fue encontrada, arregla para seguir");
        }
        continue;
      }

      if (!line || line === "Streaming" || line === "★") {
        continue;
      }
      lineas.push(line);

      if (line.includes(">")) {
        let partido = {
          hora: convertirFechaANumero(
            lineas[indice - 8] + " " + lineas[indice - 7]
          ),
          liga: ligaDelPartido, // TODO
          mitad: LIGAS_OBJETOS.find((liga) => liga.abreviado === ligaDelPartido)
            ?.mitad,
          mitadFavorito: LIGAS_OBJETOS.find(
            (liga) => liga.abreviado === ligaDelPartido
          )?.favorito,
          codigoWplay: LIGAS_OBJETOS.find(
            (liga) => liga.abreviado === ligaDelPartido
          )?.codigoWplay,
          local: lineas[indice - 6],
          visitante: lineas[indice - 2],
          cuotaLocal: lineas[indice - 5] * 1, // cuotalocal
          empate: lineas[indice - 3] * 1,
          cuotaVisitante: lineas[indice - 1] * 1,
          cantidadDeApuestas: lineas[indice - 0].split(" ")[0] * 1,
          cuotaCualquiera: 1,
          ambosAnotan: 1,
          over: 1,
          cuotaFavorito: 1,
          rate: 1,
          stake: 0,
          localMitad: 1,
          visitanteMitad: 1,
        };

        // console.log({ hora: partido.hora })

        if (
          partido.hora < FECHA_PARTIDO_MANANA &&
          partido.hora >= FECHA_PARTIDO_HOY
        ) {
          // console.log({ ligaDelPartido })
          if (ligaDelPartido === "I-OLIHE") {
            // console.log({ partido })
          }

          let partidoTemp = PartidosWplay.find(
            (p) =>
              p.local === partido.local && p.visitante === partido.visitante
          );
          if (!partidoTemp) {
            PartidosWplay.push(partido);
          }
          // console.log({ partido })
        }

        lineas = [];
        indice = 0;
        continue;
      }

      indice++;
    }

    if (PartidosWplay.length < 1) {
      console.log({ FECHA_PARTIDO_MANANA });
      throw new Error("No hay suficientes partidos");
    }

    await convertirArrayEnTextoPlanoConFormato(
      PartidosWplay,
      "PARTIDOS_OPTIMIZADOS",
      outputPartidosWplay
    );

    // console.log({
    //     inputPartidosWplay,
    //     outputPartidosWplay
    // })
  }

  await sacarPartidosWplay();

  async function sacarPartidosGolEnLaPrimeraMitad() {
    const fileStream = fs.createReadStream(inputSeMarcaraEnLaPrimeraMitad);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;
        PartidosSeMarcaraEnLaPrimeraMitad.push(partido);
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Si") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        line = line.trim();
        // console.log(line)
        let [local, resto] = line.split(" v ");
        if (!resto) {
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");
        // console.log({ fecha })
        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");
        partido = [
          // convertirFechaANumero(lineas[indice - 7]),
          // convertirFechaANumero(fecha),
          local,
          visitante,
          "cuota",
        ];
        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_CON_CUOTA', outputSeMarcaraEnLaPrimeraMitad)

    // console.log({
    //     inputSeMarcaraEnLaPrimeraMitad,
    //     outputSeMarcaraEnLaPrimeraMitad
    // })
  }

  await sacarPartidosGolEnLaPrimeraMitad();

  async function sacarPartidosAmbosMarcan() {
    const fileStream = fs.createReadStream(inputAmbosMarcan);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;
        PartidosAmbosMarcan.push(partido);
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Si") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        line = line.trim();
        let [local, resto] = line.split(" v ");
        // console.log({ line })
        if (!resto) {
          // console.log({ line })
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }

        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");

        let dia = arrayResto[indiceMes - 1];
        dia = dia * 1;

        // console.log({dia})

        if (Number.isNaN(dia) || dia > 31) {
          let valorParaArreglar = arrayResto[indiceMes - 1];
          let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length;
          let ultimoValorVisitante = valorParaArreglar.substring(
            0,
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          let valorDia = valorParaArreglar.substring(
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

          arrayResto.splice(indiceMes - 1, 1);
          arrayResto.splice(indiceMes - 1, 0, valorDia);
          arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante);
          // console.log({ arrayResto })

          visitante = arrayResto.slice(0, indiceMes).join(" ");
          fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(" ");
        }

        // console.log({ fecha, visitante })
        // console.log({ local, indiceMes, arrayResto, fecha })

        // console.log({ fecha })
        partido = [
          // convertirFechaANumero(lineas[indice - 7]),
          // convertirFechaANumero(fecha),
          local,
          visitante,
          "cuota",
        ];
        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_AMBOS_ANOTAN', outputAmbosMarcan)

    // console.log({
    //     inputAmbosMarcan,
    //     outputAmbosMarcan
    // })
  }

  await sacarPartidosAmbosMarcan();

  async function sacarPartidosOver() {
    const fileStream = fs.createReadStream(inputOver);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;
        PartidosOver.push(partido);
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Más de (2.5)") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        // console.log({ line })
        if (line[0] !== " ") {
          continue;
        }
        line = line.trim();
        let [local, resto] = line.split(" v ");
        if (!resto) {
          // console.log({ line })
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");
        // console.log({ fecha })
        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");

        let dia = arrayResto[indiceMes - 1];
        dia = dia * 1;

        // console.log({dia})

        if (Number.isNaN(dia) || dia > 31) {
          let valorParaArreglar = arrayResto[indiceMes - 1];
          let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length;
          let ultimoValorVisitante = valorParaArreglar.substring(
            0,
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          let valorDia = valorParaArreglar.substring(
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

          arrayResto.splice(indiceMes - 1, 1);
          arrayResto.splice(indiceMes - 1, 0, valorDia);
          arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante);
          // console.log({ arrayResto })

          visitante = arrayResto.slice(0, indiceMes).join(" ");
          fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(" ");
        }

        partido = [
          // convertirFechaANumero(lineas[indice - 7]),
          // convertirFechaANumero(fecha),
          local,
          visitante,
          "cuota",
        ];
        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_OVER', outputOver)

    // console.log({
    //     inputOver,
    //     outputOver
    // })
  }

  await sacarPartidosOver();

  async function sacarPartidosLocal() {
    const fileStream = fs.createReadStream(inputLocalPrimeraMitad);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;
        PartidosLocalPrimeraMitad.push(partido);
        // console.log({ partido })
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Más de (0.5)") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        // console.log({ line })
        if (line[0] !== " ") {
          continue;
        }
        line = line.trim();
        let [local, resto] = line.split(" v ");
        if (!resto) {
          // console.log({ line })
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");
        // console.log({ fecha })
        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");

        let dia = arrayResto[indiceMes - 1];
        dia = dia * 1;

        // console.log({dia})

        if (Number.isNaN(dia) || dia > 31) {
          let valorParaArreglar = arrayResto[indiceMes - 1];
          let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length;
          let ultimoValorVisitante = valorParaArreglar.substring(
            0,
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          let valorDia = valorParaArreglar.substring(
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

          arrayResto.splice(indiceMes - 1, 1);
          arrayResto.splice(indiceMes - 1, 0, valorDia);
          arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante);
          // console.log({ arrayResto })

          visitante = arrayResto.slice(0, indiceMes).join(" ");
          fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(" ");
        }

        partido = [
          // convertirFechaANumero(lineas[indice - 7]),
          // convertirFechaANumero(fecha),
          local,
          visitante,
          "cuota",
        ];
        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_OVER', outputLocalPrimeraMitad)

    // console.log({
    //     inputLocalPrimeraMitad,
    //     outputLocalPrimeraMitad
    // })
  }

  await sacarPartidosLocal();

  async function sacarPartidosVisitante() {
    const fileStream = fs.createReadStream(inputVisitantePrimeraMitad);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;
        PartidosVisitantePrimeraMitad.push(partido);
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Más de (0.5)") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        // console.log({ line })
        if (line[0] !== " ") {
          continue;
        }
        line = line.trim();
        let [local, resto] = line.split(" v ");
        if (!resto) {
          // console.log({ line })
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");
        // console.log({ fecha })
        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");

        let dia = arrayResto[indiceMes - 1];
        dia = dia * 1;

        // console.log({dia})

        if (Number.isNaN(dia) || dia > 31) {
          let valorParaArreglar = arrayResto[indiceMes - 1];
          let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length;
          let ultimoValorVisitante = valorParaArreglar.substring(
            0,
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          let valorDia = valorParaArreglar.substring(
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

          arrayResto.splice(indiceMes - 1, 1);
          arrayResto.splice(indiceMes - 1, 0, valorDia);
          arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante);
          // console.log({ arrayResto })

          visitante = arrayResto.slice(0, indiceMes).join(" ");
          fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(" ");
        }

        partido = [
          // convertirFechaANumero(lineas[indice - 7]),
          // convertirFechaANumero(fecha),
          local,
          visitante,
          "cuota",
        ];
        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(PartidosVisitantePrimeraMitad, 'PARTIDOS_OVER', outputVisitantePrimeraMitad)

    // console.log({
    //     inputVisitantePrimeraMitad,
    //     outputVisitantePrimeraMitad
    // })
  }

  await sacarPartidosVisitante();

  async function sacarPartidosFavorito() {
    const fileStream = fs.createReadStream(inputFavorito);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let lineas = [];
    let indice = 0;

    let partidos = [];

    let ligaDelPartido = "";

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      // console.log(`Line from file: ${line}`);
      // continue

      let lineModificado = "";

      if (line.includes("	1ª Mitad más/Menos de ")) {
        // console.log(line)
        lineModificado = line.replace("	1ª Mitad más/Menos de ", "***");
        lineModificado = lineModificado.replace(
          " Total Goles	Más de (0.5)	",
          "***"
        );
        lineModificado = lineModificado.replace("	 -", "");
        lineModificado = lineModificado.replace(" v ", "***");
        lineModificado = lineModificado.replace("	", "***");

        let arrayLine = lineModificado.split("***");

        let partidoMitad = [
          // convertirFechaANumero(arrayLine[0]),
          arrayLine[1],
          arrayLine[2],
          arrayLine[3] === arrayLine[1] ? "local" : "visitante",
          arrayLine[4] * 1,
        ];

        PartidosFavorito.push(partidoMitad);

        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_CON_CUOTA', outputFavorito)
  }

  await sacarPartidosFavorito();

  async function sacarPartidosConFavorito() {
    let partidosTemp = JSON.parse(fs.readFileSync(inputPartidosConFavorito));

    if (!Array.isArray(partidosTemp)) {
      return;
    }

    for (const partidoTemp of partidosTemp) {
      // console.log({ partidoTemp })

      let partidoMitad = [
        // convertirFechaANumero(arrayLine[0]),
        partidoTemp.local,
        partidoTemp.visitante,
        partidoTemp.favorito,
        partidoTemp.favorito === "local"
          ? partidoTemp.localMitad
          : partidoTemp.favorito === "visitante"
            ? partidoTemp.visitanteMitad
            : 1,
      ];

      if (partidoMitad[2] === "") {
        console.log(partidoMitad);
        // throw new Error('No se eligio favorito en un partido')
        continue;
      }

      if (partidoMitad[3] === 1) {
        console.log({ partidoMitad });
        // throw new Error('La cuota del favorito es 1')
        continue;
      }

      PartidosFavorito.push(partidoMitad);
    }
  }

  await sacarPartidosConFavorito();

  async function sacarPartidosMasPrimeraMitad() {
    const fileStream = fs.createReadStream(inputMasPrimeraMitad);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let lineas = [];
    let indice = 0;

    let partidos = [];

    let ligaDelPartido = "";

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      // console.log(`Line from file: ${line}`);
      // continue

      let lineModificado = "";

      if (line.includes("	Primera Mitad Total Goles Más/Menos de	Más de (0.5)	")) {
        // console.log(line)
        lineModificado = line.replace(
          "	Primera Mitad Total Goles Más/Menos de	Más de (0.5)	",
          "***"
        );
        lineModificado = lineModificado.replace("	 -", "");
        lineModificado = lineModificado.replace(" v ", "***");
        lineModificado = lineModificado.replace("	", "***");

        let arrayLine = lineModificado.split("***");

        let partidoMitad = [
          // convertirFechaANumero(arrayLine[0]),
          arrayLine[1],
          arrayLine[2],
          arrayLine[3] * 1,
        ];

        // console.log({ arrayLine, partidoMitad })

        PartidosMasPrimeraMitad.push(partidoMitad);

        continue;
      }
    }

    // await convertirArrayEnTextoPlanoConFormato(partidos, 'PARTIDOS_CON_CUOTA', outputFavorito)
  }

  await sacarPartidosMasPrimeraMitad();

  async function sacarPartidosMasMenosPrimeraMitad() {
    const fileStream = fs.createReadStream(inputMasMenosPrimeraMitad);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let partidos = [];

    let partido = ["local", "visitante", "cuota"];
    let indiceSi = false;

    for await (let line of rl) {
      if (indiceSi) {
        partido[2] = line * 1;

        // console.log({ partido })
        PartidosMasMenosPrimeraMitad.push(partido);
        partido = ["local", "visitante", "cuota"];
        indiceSi = false;
        continue;
      }

      if (line === "Más de (0.5)") {
        indiceSi = true;
        continue;
      }

      if (line.includes(">")) {
        // console.log({ line })
        if (line[0] !== " ") {
          continue;
        }
        line = line.trim();
        let [local, resto] = line.split(" v ");
        if (!resto) {
          // console.log({ line })
          continue;
        }
        let arrayResto = resto.split(" ");
        let indiceMes = -1;
        for (const mes of arrayMeses) {
          indiceMes = arrayResto.findIndex((r) => r === mes);
          if (indiceMes >= 0) {
            break;
          }
        }
        let fecha = arrayResto.slice(indiceMes - 1, indiceMes + 2).join(" ");
        // console.log({ fecha })
        let visitante = arrayResto.slice(0, indiceMes - 1).join(" ");

        let dia = arrayResto[indiceMes - 1];
        dia = dia * 1;

        // console.log({dia})

        if (Number.isNaN(dia) || dia > 31) {
          let valorParaArreglar = arrayResto[indiceMes - 1];
          let cantidadDeLetrasDelValorParaArreglar = valorParaArreglar.length;
          let ultimoValorVisitante = valorParaArreglar.substring(
            0,
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          let valorDia = valorParaArreglar.substring(
            cantidadDeLetrasDelValorParaArreglar - 2
          );
          // console.log({ valorParaArreglar, ultimoValorVisitante, valorDia })

          arrayResto.splice(indiceMes - 1, 1);
          arrayResto.splice(indiceMes - 1, 0, valorDia);
          arrayResto.splice(indiceMes - 1, 0, ultimoValorVisitante);
          // console.log({ arrayResto })

          visitante = arrayResto.slice(0, indiceMes).join(" ");
          fecha = arrayResto.slice(indiceMes, indiceMes + 3).join(" ");
        }

        partido = [local, visitante, "cuota"];
        continue;
      }
    }
  }

  await sacarPartidosMasMenosPrimeraMitad();



  let partidos_optimizados = PartidosWplay.map((partido) => {
    let cuotaCualquiera = PartidosSeMarcaraEnLaPrimeraMitad.find(
      (p) => partido.local === p[0] && partido.visitante === p[1]
    )
      ? PartidosSeMarcaraEnLaPrimeraMitad.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )[2]
      : 1;
    if (cuotaCualquiera === 1) {
      cuotaCualquiera = PartidosMasPrimeraMitad.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosMasPrimeraMitad.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1;
    }
    if (cuotaCualquiera === 1) {
      cuotaCualquiera = PartidosMasMenosPrimeraMitad.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosMasMenosPrimeraMitad.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1;
    }
    return {
      ...partido,
      hora: ("" + partido.hora).substring(5) * 1,
      cuotaCualquiera,
      ambosAnotan: PartidosAmbosMarcan.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosAmbosMarcan.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1,
      over: PartidosOver.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosOver.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1,
      localMitad: PartidosLocalPrimeraMitad.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosLocalPrimeraMitad.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1,
      visitanteMitad: PartidosVisitantePrimeraMitad.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosVisitantePrimeraMitad.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : 1,
      favorito: PartidosFavorito.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosFavorito.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[2]
        : "",
      cuotaFavorito: PartidosFavorito.find(
        (p) => partido.local === p[0] && partido.visitante === p[1]
      )
        ? PartidosFavorito.find(
          (p) => partido.local === p[0] && partido.visitante === p[1]
        )[3]
        : 1,
    };
  });

  partidos_optimizados.sort((a, b) => a.hora - b.hora);
  partidos_optimizados = partidos_optimizados.map((partido) => {

    if (partido.apostar && partido.random) {
      return partido
    }

    if (partido.cuotaCualquiera && partido.cuotaCualquiera >= 1.42) {
      let random = Math.random()

      return {
        ...partido,
        apostar: random >= 0.8 ? 'SI' : 'NO',
        random: Math.trunc(random * 10)
      }
    }

    return partido

  });

  await convertirArrayEnTextoPlanoConFormato(
    partidos_optimizados,
    "PARTIDOS_OPTIMIZADOS",
    archivoSalida
  );

  async function sacarCantidadDePartidos() {
    let totalPartidosFlashScore = partidosGlobal.length;
    let totalPartidosWplay = partidos_optimizados.length;
    let diferencia_de_partidos_total =
      totalPartidosFlashScore - totalPartidosWplay;

    let ligas_flashscore = partidosGlobal.map((p) => p.liga);

    let ligas_flashscore_no_repeat = [...new Set(ligas_flashscore)];
    let total_ligas_flashscore = ligas_flashscore_no_repeat.length;

    let ligas_wplay = partidos_optimizados.map((p) => p.liga);
    let ligas_wplay_no_repeat = [...new Set(ligas_wplay)];
    let total_ligas_wplay = ligas_wplay_no_repeat.length;

    let diferencia_ligas_total = total_ligas_flashscore - total_ligas_wplay;

    console.log({
      totalPartidosFlashScore,
      totalPartidosWplay,
      diferencia_de_partidos_total,
      total_ligas_flashscore,
      total_ligas_wplay,
      diferencia_ligas_total,
    });

    // if (diferencia_ligas_total > 0) {
    console.log("Ligas Flashcore");
    ligas_flashscore_no_repeat.forEach((liga) => {
      if (!ligas_wplay_no_repeat.includes(liga)) {
        console.log({ liga });
      }
    });
    // } else if (diferencia_ligas_total < 0) {
    console.log("Ligas Wplay");
    ligas_wplay_no_repeat.forEach((liga) => {
      if (!ligas_flashscore_no_repeat.includes(liga)) {
        console.log({ liga });
      }
    });
    // }

    // // if (diferencia_de_partidos_total > 0 && diferencia_ligas_total === 0) {
    //     ligas_flashscore_no_repeat.forEach(liga => {
    //         let tempPartidosEnLigasFlashcoreTotal = ligas_flashscore.filter(l => liga === l).length
    //         let tempPartidosLigasWplayTotal = ligas_wplay.filter(l => liga === l).length

    //         if (tempPartidosEnLigasFlashcoreTotal !== tempPartidosLigasWplayTotal) {
    //             console.log({ analizando: 'Partidos Flashcore', tempPartidosEnLigasFlashcoreTotal, tempPartidosLigasWplayTotal, liga })
    //         }
    //     })
    // // } else if (diferencia_de_partidos_total < 0 && diferencia_ligas_total === 0) {
    //     ligas_wplay_no_repeat.forEach(liga => {
    //         let tempPartidosEnLigasFlashcoreTotal = ligas_flashscore.filter(l => liga === l).length
    //         let tempPartidosLigasWplayTotal = ligas_wplay.filter(l => liga === l).length

    //         if (tempPartidosEnLigasFlashcoreTotal !== tempPartidosLigasWplayTotal) {
    //             console.log({ analizando: 'Partidos Wplay', tempPartidosEnLigasFlashcoreTotal, tempPartidosLigasWplayTotal, liga })
    //         }
    //     })
    // // }
  }

  await sacarCantidadDePartidos();

  async function sacarApuestasAbiertas() {
    const fileStream = fs.createReadStream(inputApuestasAbiertas);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let lineas = [];
    let indice = 0;

    let partidos = [];
    let arraySalida = [];

    let ligaDelPartido = "";

    let gananciaEsperada = 0;
    let cantidadApostada = 0;
    let esRecuperarApuesta = false;

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      // console.log(`Line from file: ${line}`);
      // continue

      let lineModificado = "";

      if (esRecuperarApuesta) {
        esRecuperarApuesta = false;
        continue;
      }

      if (line.startsWith("RECUPERAR")) {
        esRecuperarApuesta = true;
        continue;
      }

      if (line.startsWith("$")) {
        lineModificado = line.replace("$", "");
        // lineModificado = lineModificado.replaceAll(",", "");
        if (partidos.length > 0) {
          gananciaEsperada = lineModificado;
          console.log({ cantidadApostada, gananciaEsperada });
          partidos.push(`${gananciaEsperada} con $ ${cantidadApostada}`);
          if (partidos.length > 0) {
            arraySalida.push(partidos);
            partidos = [];
          }
        } else {
          cantidadApostada = lineModificado;
          // console.log({ cantidadApostada })
        }
        continue;
      }

      const conditions = [
        "\t1ª Mitad más/Menos de ",
        "	Total Goles Más/Menos de	Más de (2.5)	",
        "	Se anotará gol en la 1er mitad	Si	",
        "	Ambos Equipos Anotan	Si	",
        "	Primera Mitad Total Goles Más/Menos de	Más de (0.5)	",
        " Total Goles	Más de (0.5)	",
      ]

      if (line.endsWith("	 -") || (line.endsWith("\t") && conditions.some(el => line.includes(el)))) {
        lineModificado = line.replace("	1ª Mitad más/Menos de ", "***");

        lineModificado = lineModificado.replace(
          "\t1ª Mitad más/Menos de ",
          "***"
        );
        lineModificado = lineModificado.replace(
          "	Total Goles Más/Menos de	Más de (2.5)	",
          "***over***"
        );
        lineModificado = lineModificado.replace(
          "	Se anotará gol en la 1er mitad	Si	",
          "***mitad***"
        );
        lineModificado = lineModificado.replace(
          "	Ambos Equipos Anotan	Si	",
          "***ambos***"
        );
        lineModificado = lineModificado.replace(
          "	Primera Mitad Total Goles Más/Menos de	Más de (0.5)	",
          "***mitad***"
        );

        lineModificado = lineModificado.replace(
          " Total Goles	Más de (0.5)	",
          "***"
        );
        lineModificado = lineModificado.replace("	 -", "");
        lineModificado = lineModificado.replace(" v ", "***");
        lineModificado = lineModificado.replace("	", "***");

        let arrayLine = lineModificado.split("***");

        let partidoMitad = [
          // convertirFechaANumero(arrayLine[0]),
          arrayLine[0].substring(7).replace(":", "") * 1 + 10000,
          // arrayLine[0].substring(8).replace(':', '') * 1 + 10000,
          arrayLine[1],
          arrayLine[2],
          arrayLine[3] === arrayLine[1]
            ? "local"
            : arrayLine[3] === arrayLine[2]
              ? "visitante"
              : arrayLine[3],
          arrayLine[4] * 1,
        ];

        // console.log({ partidoMitad })

        if (isNaN(partidoMitad[4])) {
          let valorTemp = arrayLine[4].replace("$", "");
          // console.log({ valorTemp })
          valorTemp = valorTemp.replace(",", "");
          // console.log({ valorTemp })
          partidoMitad[4] = valorTemp * 1;
        }

        // console.log({ line, arrayLine, partidoMitad })

        // console.log({ arrayLine,hora: partidoMitad[0]})

        partidos.push(partidoMitad);

        continue;
      } else {
        // console.log({line, testigo: 'else'})
        // if (line.endsWith("	-")) {
        if (line.endsWith("\t")) {
          // console.log({ line, testigo: 'if (line.endsWith("\t"))'})
          // console.log('#########################')
          // console.log('#########################')
          // console.log('#########################')
          // console.log('#########################')
          // lineModificado = line.replace("	-", "");
          lineModificado = line.replaceAll("\t", "");
          let totalArray = lineModificado.split("$");
          // console.log({ totalArray })
          let total = totalArray.pop();
          // console.log({ total });
          // partidos.push(total);
          // if (partidos.length > 0) {
          //   arraySalida.push(partidos);
          //   partidos = [];
          // }
        } else if (line === "Imprimir" && partidos.length === 1) {

          let total = partidos[0][4];
          console.log({ total, gananciaEsperada });
          partidos[0][4] = Math.floor((total / gananciaEsperada) * 100) / 100;
          total = total.toLocaleString();
          console.log({ total, "partidos[0][4]": partidos[0][4] });
          partidos.push(total);
          if (partidos.length > 0) {
            arraySalida.push(partidos);
            partidos = [];
          }
        } else {
          // console.log({line, testigo: 'DEFAULT'})
          // console.log('#########################')
          // console.log('#########################')
          // console.log('#########################')
          // console.log('#########################')
        }
      }
    }

    arraySalida.forEach(apuesta => {
      apuesta.forEach(partido => {
        if (Array.isArray(partido)) {

          const linkMitad = (code) => `https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OUH1&sb_type_ids=${code}`
          const linkAmbos = (code) => `https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=BTSC&sb_type_ids=${code}`
          const linkOver = (code) => `https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=HCTG&sb_type_ids=${code}`
          // console.log({ partido })
          let partidoEncontrado = partidos_optimizados.find(p => p.local === partido[1] && p.visitante === partido[2])
          // console.log({ partidoEncontrado })
          let code = partidoEncontrado?.codigoWplay || ''
          let link = ''

          if (code) {
            if (partido[3] === 'mitad') {
              link = linkMitad(code)
            }
            if (partido[3] === 'ambos') {
              link = linkAmbos(code)
            }
            if (partido[3] === 'over') {
              link = linkOver(code)
            }

            partido.push(link);
            partido.push(code);
          }

          // let temp = {
          //   hora: partido[0],
          //   local: partido[1],
          //   visitante: partido[2],
          //   apuesta: partido[3],
          //   cuota: partido[4],
          //   code: partidos_optimizados.find(p => p.local === partido[1] && p.visitante === partido[2])?.codigoWplay || 1
          // }

          // console.log({ partido })
        }
      })
    })

    await convertirArrayEnTextoPlanoConFormato(
      arraySalida,
      "APUESTAS_ABIERTAS",
      outputApuestasAbiertas
    );
  }

  await sacarApuestasAbiertas();
}

main();
