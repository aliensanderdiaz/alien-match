console.log({ PARTIDOS_OPTIMIZADOS })



// Obtener el parámetro ?tipo=
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");

// Filtrar
const resultado = PARTIDOS_OPTIMIZADOS.filter(p => (p.favorito === "local" || p.favorito === "visitante") && p.cuotaFavorito >= 1.74);

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
        const locales = subgrupoLocal.map((partido, index) => `[${ index + 1 }]${partido.local}`)

        html += `Locales: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${locales.join(' - ')}</a><br><br>`
        console.log({ codigosWplay })
    })
    grupo.visitante.forEach((subgrupoVisitante) => {
        const codigosWplay = [...new Set(subgrupoVisitante.map(partido => partido.codigoWplay))]
        const visitantes = subgrupoVisitante.map((partido, index) => `[${ index + 1 }]${partido.visitante}`)

        html += `Visitantes: <a href="https://apuestas.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${codigosWplay.join('-')}" target="_blank">${visitantes.join(' - ')}</a><br><br>`
    })

    html += `<hr><hr>`
})

container.innerHTML = html