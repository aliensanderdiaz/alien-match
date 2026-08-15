const ordenar_hora = (partidos, cual = 'local')  => {
  return partidos.sort((a,b) => a.hora - b.hora).map((partido, index) => `[${index + 1}][${partido.hora - 10000}]${partido[cual]}`)
}
const  HORA = 11453
const PARTIDOS_OPTIMIZADOS_HORA = PARTIDOS_OPTIMIZADOS.filter(p => p.hora >= HORA)
console.log({ PARTIDOS_OPTIMIZADOS_HORA })

// Obtener el parámetro ?tipo=
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");

// Filtrar
const resultado = PARTIDOS_OPTIMIZADOS_HORA.filter(p => (p.favorito === "local" || p.favorito === "visitante") && p.cuotaFavorito >= 1.74);

console.log({ resultado })

function agrupar(productos, limite = 800) {
  const grupos = [];

  let grupoActual = {
    local: [],
    visitante: []
  };

  let factorActual = 1;

  for (const producto of productos) {
    grupoActual[producto.favorito].push(producto);
    factorActual *= producto.cuotaFavorito;

    // si ya se pasó del límite, este producto se queda
    // en el grupo actual y el próximo inicia otro grupo
    if (factorActual > limite) {
      grupos.push(grupoActual);

      grupoActual = {
        local: [],
        visitante: []
      };

      factorActual = 1;
    }
  }

  if (grupoActual.local.length || grupoActual.visitante.length) {
    grupos.push(grupoActual);
  }

  return grupos;
}

// Uso


const grupos = agrupar(resultado)

console.log({ grupos })

function dividirPorCodigos(items, maxCodigos = 5) {
  // Agrupa todos los elementos por codigoWplay
  const mapaCodigos = new Map();

  for (const item of items) {
    if (!mapaCodigos.has(item.codigoWplay)) {
      mapaCodigos.set(item.codigoWplay, []);
    }

    mapaCodigos.get(item.codigoWplay).push(item);
  }

  // Cada posición representa un código único con todos sus elementos
  const gruposPorCodigo = Array.from(mapaCodigos.values());

  const subgrupos = [];

  // Crea subgrupos de máximo 5 códigos distintos
  for (let i = 0; i < gruposPorCodigo.length; i += maxCodigos) {
    const bloque = gruposPorCodigo
      .slice(i, i + maxCodigos)
      .flat();

    subgrupos.push(bloque);
  }

  return subgrupos;
}

// Aplicar a cada grupo ya creado
const resultadoFinal = grupos.map(grupo => ({
  local: dividirPorCodigos(grupo.local, 5),
  visitante: dividirPorCodigos(grupo.visitante, 5)
}));

console.log({ resultadoFinal });

const container = document.querySelector('.container')

let html = ''

resultadoFinal.forEach(grupo => {
  grupo.local.forEach((subgrupoLocal, index) => {
    console.log({ subgrupoLocal, index })
    const codigosWplay = [...new Set(subgrupoLocal.map(partido => partido.codigoWplay))]
    const locales = ordenar_hora(subgrupoLocal)

    html += `Locales: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${locales.join(' - ')}</a><br><br>`
    console.log({ codigosWplay })
  })
  grupo.visitante.forEach((subgrupoVisitante) => {
    const codigosWplay = [...new Set(subgrupoVisitante.map(partido => partido.codigoWplay))]
    const visitantes = ordenar_hora(subgrupoVisitante, 'visitante')

    html += `Visitantes: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${visitantes.join(' - ')}</a><br><br>`
  })

  html += `<hr><hr>`
})

container.innerHTML = html

const container2 = document.querySelector('.container-2')

let html2 = ''

let resultado2 = PARTIDOS_OPTIMIZADOS_HORA.filter(p => p.cuotaCualquiera >= 1.42);

console.log({ resultado2 })

function dividirEnGrupos(array, tamano = 25) {
  const grupos = [];

  for (let i = 0; i < array.length; i += tamano) {
    grupos.push(array.slice(i, i + tamano));
  }

  return grupos;
}

const gruposCualquiera = dividirEnGrupos(resultado2)

console.log({ gruposCualquiera })


gruposCualquiera.forEach(grupo => {
  grupo.forEach((partido, index) => {
    // https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OUH1&sb_type_ids=26834

    html2 += `
    <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OUH1&sb_type_ids=${partido.codigoWplay}"
    target="_blank">
    ${index + 1} - ${partido.local} vs. ${partido.visitante}
    </a>
    <br>
  `
  })

  html2+= '<hr><hr>'
})


container2.innerHTML = html2


let resultado3 = PARTIDOS_OPTIMIZADOS_HORA.filter(p => p.over >= 2);
console.log({ resultado3})




function dividirPorMultiplicacion(items, propiedad, limite = 800) {
  const grupos = [];

  let grupoActual = [];
  let acumulado = 1;

  for (const item of items) {
    const nuevoAcumulado = acumulado * item[propiedad];

    grupoActual.push(item);

    if (nuevoAcumulado > limite) {
      grupos.push(grupoActual);

      grupoActual = [];
      acumulado = 1;
    } else {
      acumulado = nuevoAcumulado;
    }
  }

  if (grupoActual.length) {
    grupos.push(grupoActual);
  }

  return grupos;
}

const gruposOver = dividirPorMultiplicacion(resultado3, 'over')

console.log({ gruposOver })

const resultadoFinalOver =  gruposOver.map(grupo => {
  return dividirPorCodigos(grupo,  5)
});

console.log({ resultadoFinalOver })

const containerOver = document.querySelector('.over')

let htmlOver = ''

resultadoFinalOver.forEach(grupo => {
  grupo.forEach((subgrupoLocal, index) => {
    console.log({ subgrupoLocal, index })
    const codigosWplay = [...new Set(subgrupoLocal.map(partido => partido.codigoWplay))]
    const locales = ordenar_hora(subgrupoLocal)

    htmlOver += `Grupo ${ index + 1 }: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=HCTG&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${locales.join(' - ')}</a><br><br>`
    console.log({ codigosWplay })
  })

  htmlOver += `<hr><hr>`
})

containerOver.innerHTML = htmlOver




// dividirPorCodigos


// dividirEnGruposd
// dividirEnGruposd
// d
// d
// d
// d



let resultado4 = PARTIDOS_OPTIMIZADOS_HORA.filter(p => p.ambosAnotan >= 2);
console.log({ resultado4})





const gruposAmbosAnotan = dividirPorMultiplicacion(resultado4, 'ambosAnotan')

console.log({ gruposAmbosAnotan })

const resultadoFinalAmbos =  gruposAmbosAnotan.map(grupo => {
  return dividirPorCodigos(grupo,  5)
});

console.log({ resultadoFinalAmbos })

const containerAmbos = document.querySelector('.ambos')

let htmlAmbos = ''

resultadoFinalAmbos.forEach(grupo => {
  grupo.forEach((subgrupoLocal, index) => {
    console.log({ subgrupoLocal, index })
    const codigosWplay = [...new Set(subgrupoLocal.map(partido => partido.codigoWplay))]
    const locales = ordenar_hora(subgrupoLocal)

    htmlAmbos += `Grupo ${ index + 1 }: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=BTSC&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${locales.join(' - ')}</a><br><br>`
    console.log({ codigosWplay })
  })

  htmlAmbos += `<hr><hr>`
})

containerAmbos.innerHTML = htmlAmbos