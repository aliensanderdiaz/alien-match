const MAXIMO_A_GANAR = 16_000_000 / 10000

let PARTIDOS_BACKUP = [...PARTIDOS_OPTIMIZADOS]
let indiceFavorito = 0
let favorito = 'local'

// let baseUrl = 'https://local.wplay.co/es/t/'
let baseUrl = 'https://local.wplay.co/es/t/'
let baseUrlSm = 'https://m.wplay.co/es/t/'

const CONTENEDOR_DATOS = document.getElementById('contenedor-datos')
const CONTENEDOR_DATOS_SM = document.getElementById('contenedor-datos-sm')

const elegirClaseDeFavorito = (cuotaFavorito) => {
    if (!cuotaFavorito) {
        return ''
    }

    if (cuotaFavorito > 1 && cuotaFavorito < 1.43) {
        return 'favorito-danger'
    }

    if (cuotaFavorito > 1.42 && cuotaFavorito < 1.75) {
        return 'favorito-warning'
    }

    if (cuotaFavorito > 1.74) {
        return 'favorito-success'
    }
}

const ponerEventosEnLasAnclas = () => {

    const anclas = document.querySelectorAll('a')
    anclas.forEach(ancla => ancla.addEventListener('click', (e) => {
        e.target.style = 'background-color: #d0b2b0'
    }))
}

const elegirFavorito = function (indice, valor) {
    console.log({ funcion: 'elegirFavorito', indice, valor })
    indiceFavorito = indice - 1
    PARTIDOS_OPTIMIZADOS[indiceFavorito]['favorito'] = valor
    const myModal = new bootstrap.Modal(document.getElementById('stakeModal'))
    myModal.show()
    // console.log(myModal)
    // dibujar()
}

const colocarStake = function (value) {
    PARTIDOS_OPTIMIZADOS[indiceFavorito]['stake'] = value
    let modal_obj = bootstrap.Modal.getInstance(stakeModal);
    modal_obj.hide();
    dibujar()
}


const dibujar = function (partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    let acumulado = 1
    let acumuladoFavorito = 1
    let acumuladoOver = 1
    let borrarAcumulado = false
    let borrarAcumuladoFavorito = false
    let borrarAcumuladoOver = false

    let codeLigues = []
    let codeLiguesNoHalf = []

    let codeLiguesPreferidos = []

    let claseDistinta = false
    let claseDistintaOver = false
    let claseDistintaFavorito = false

    // "mitad": true,
    // "codigoWplay": 19157

    for (const partido of partidos) {

        if (partido.mitadFavorito && partido.codigoWplay) {
            let exists = codeLiguesPreferidos.find(p => p.codigoWplay === partido.codigoWplay)
            if (!exists) {
                codeLiguesPreferidos.push({ mitad: partido.mitad, codigoWplay: partido.codigoWplay })
            }
        }

        if (partido.mitad && partido.codigoWplay) {
            let exists = codeLigues.find(p => p.codigoWplay === partido.codigoWplay)
            if (!exists) {
                codeLigues.push({ mitad: partido.mitad, codigoWplay: partido.codigoWplay })
            }
        } else if (partido.mitad === false && partido.codigoWplay) {
            let exists = codeLiguesNoHalf.find(p => p.codigoWplay === partido.codigoWplay)
            if (!exists) {
                codeLiguesNoHalf.push({ mitad: partido.mitad, codigoWplay: partido.codigoWplay })
            }
        }

        if (borrarAcumulado) {
            acumulado = 1
            borrarAcumulado = false
        }

        if (partido.cuotaCualquiera && partido.cuotaCualquiera >= 1.42) {
            acumulado = Math.floor(acumulado * partido.cuotaCualquiera * 100) / 100
        }

        if (acumulado > MAXIMO_A_GANAR) {
            borrarAcumulado = true
            claseDistinta = !claseDistinta
        }
        let acumuladoEntero = Math.floor(acumulado)

        if (borrarAcumuladoFavorito) {
            acumuladoFavorito = 1
            borrarAcumuladoFavorito = false
        }

        if (partido.cuotaFavorito && partido.cuotaFavorito >= 1.74) {
            acumuladoFavorito = Math.floor(acumuladoFavorito * partido.cuotaFavorito * 100) / 100
            // console.log('FAVORITO')
            // } else if ( partido.cuotaCualquiera && partido.cuotaCualquiera >= 1.42) {
            // console.log('CUALQUIERA')
            // acumuladoFavorito = Math.floor(acumuladoFavorito * partido.cuotaCualquiera * 100) / 100
        }

        if (acumuladoFavorito > MAXIMO_A_GANAR) {
            borrarAcumuladoFavorito = true
            claseDistintaFavorito = !claseDistintaFavorito
        }
        let acumuladoEnteroFavorito = Math.floor(acumuladoFavorito)

        if (borrarAcumuladoOver) {
            acumuladoOver = 1
            borrarAcumuladoOver = false
        }

        if (partido.over && partido.over >= 2) {
            acumuladoOver = Math.floor(acumuladoOver * partido.over * 100) / 100
            // console.log('Over')
        }

        if (acumuladoOver > MAXIMO_A_GANAR) {
            borrarAcumuladoOver = true
            claseDistintaOver = !claseDistintaOver
        }
        let acumuladoEnteroOver = Math.floor(acumuladoOver)

        indice++
        let partido_string = `${partido.local} - ${partido.visitante}`
        // console.log({ partido_string, acumuladoEnteroFavorito })

        let mitad = partido.mitad ? ` <a href="${baseUrl + partido.codigoWplay + '?mkt_sort=GSH1'}" target="_blank" rel="noopener noreferrer">M</a>` : ` <a href="${baseUrl + partido.codigoWplay + '?mkt_sort=OUH1'}" target="_blank" rel="noopener noreferrer">M</a>`
        let local = partido.mitadFavorito ? ` <a href="${baseUrl + partido.codigoWplay + '?mkt_sort=OU1H'}" target="_blank" rel="noopener noreferrer">L</a>` : ''
        let visitante = partido.mitadFavorito ? ` <a href="${baseUrl + partido.codigoWplay + '?mkt_sort=OU1A'}" target="_blank" rel="noopener noreferrer">V</a>` : ''
        let over = ` <a href="${baseUrl + partido.codigoWplay + '?mkt_sort=HCTG'}" target="_blank" rel="noopener noreferrer">O</a>`

        // let cantidad_de_letras = partido_string.length
        html += `
        <div class="row">
            <div class="col-1 border text-end">
                <small>${indice}/${total} - ${partido.hora - 10000}</small>
                <br>
                <small class="${partido.apostar && partido.apostar === 'SI' ? 'bg-success' : ''}">${partido.random ? partido.random : ''} - ${partido.random ? partido.apostar : ''}</small>
            </div>
            <div class="col-1 border">
                <strong>
                    <a href="${baseUrl + partido.codigoWplay}" target="_blank" rel="noopener noreferrer">${partido.liga}</a>
                </strong>
                ${mitad} ${local} ${visitante}    ${over}    
            </div>
            <div class="col-2 border">
                <strong class="elegir-favorito ${partido.favorito === 'local' ? 'favorito-local' : ''}" onclick="elegirFavorito(${indice}, 'local')">
                    ${partido.local.substring(0, 30)}
                </strong>
                <br>
                <strong class="elegir-favorito ${partido.favorito === 'visitante' ? 'favorito-visitante' : ''}" onclick="elegirFavorito(${indice}, 'visitante')">
                    ${partido.visitante.substring(0, 30)}
                </strong>
            </div>
            <div class="col border">
                <div class="row row-test text-end">

                    <div class="col border-end dato">
                        <span>${partido.cantidadDeApuestas}</span>
                    </div>

                    <div class="col border-end dato  ${partido.favorito === 'local' ? 'favorito' : ''}  ">
                        
                        <span class="d-block ${partido.cuotaLocal > partido.cuotaVisitante ? 'bg-success-subtle' : ''}">
                            ${partido.cuotaLocal.toFixed(2)}
                        </span>
                        <!-- <br> -->
                        <span class="${elegirClaseDeFavorito(partido.cuotaFavorito)}">
                            ${partido.favorito === 'local' && partido.localMitad > 1 ? partido.localMitad.toFixed(2) : ''}
                        </span>

                    </div>

                    <div class="col border-end dato">
                        <span>${partido.empate.toFixed(2)}</span>
                    </div>

                    <div class="col border-end dato  ${partido.favorito === 'visitante' ? 'favorito' : ''} ">
                        
                        <span class="d-block ${partido.cuotaLocal < partido.cuotaVisitante ? 'bg-success-subtle' : ''}">
                            ${partido.cuotaVisitante.toFixed(2)}
                        </span>
                        <!-- <br> -->
                        <span class="${elegirClaseDeFavorito(partido.cuotaFavorito)}">
                            ${partido.favorito === 'visitante' && partido.visitanteMitad > 1 ? partido.visitanteMitad.toFixed(2) : ''}
                        </span>

                    </div>

                    <div class="col border-end dato ${partido.cuotaCualquiera > 1 && partido.cuotaCualquiera < 1.26 ? 'bg-danger' : partido.cuotaCualquiera > 1.25 && partido.cuotaCualquiera < 1.42 ? 'bg-warning' : ''}">
                        <span>${partido.cuotaCualquiera && partido.cuotaCualquiera > 1 ? partido.cuotaCualquiera?.toFixed(2) : ''}</span>
                    </div>

                    <div class="col border-end dato ${partido.over > 1 && partido.over < 1.74 ? 'bg-danger' : partido.over > 1.73 && partido.over < 2 ? 'bg-warning' : ''}">
                        <span>${partido.over && partido.over > 1 ? partido.over?.toFixed(2) : ''}</span>
                    </div>

                    <div class="col border-end dato ${partido.cuotaFavorito && partido.cuotaFavorito > 1 && partido.cuotaFavorito < 1.43 ? 'bg-danger' : partido.cuotaFavorito && partido.cuotaFavorito > 1.42 && partido.cuotaFavorito < 1.75 ? 'bg-warning' : ''}">
                        <span>${partido.cuotaFavorito && partido.cuotaFavorito > 1 ? partido.cuotaFavorito?.toFixed(2) : ''}</span>
                    </div>

                    <div class="col border-end dato ${claseDistinta ? '' : 'claseDistinta'}">
                        <span>${acumuladoEntero}</span>
                    </div>

                    <div class="col border-end dato ${claseDistintaOver ? '' : 'claseDistinta'}">
                        <span>${acumuladoEnteroOver}</span>
                    </div>

                    <div class="col border-end dato ${claseDistintaFavorito ? '' : 'claseDistinta'}">
                        <span>${acumuladoEnteroFavorito}</span>
                    </div>



                    <div class="col border-end dato ${partido.ambosAnotan > 1 && partido.ambosAnotan < 1.74 ? 'bg-danger' : partido.ambosAnotan > 1.73 && partido.ambosAnotan < 2 ? 'bg-warning' : ''}">
                        <span>${partido.ambosAnotan && partido.ambosAnotan > 1 ? partido.ambosAnotan?.toFixed(2) : ''}</span>
                    </div>

                </div>
            </div>
        </div>
                `
    }
    // ${partido.rate}

    let links = []
    let codeStrings = ''

    for (let index = 0; index < codeLigues.length; index++) {
        const element = codeLigues[index].codigoWplay;
        codeStrings += element
        codeStrings += '-'
        if ((index + 1) % 5 === 0 || index === codeLigues.length - 1) {
            let codeStringsWithOutRaya = codeStrings.substring(0, codeStrings.length - 1)
            links.push(codeStringsWithOutRaya)
            codeStrings = ''
        }
    }

    let linksNoHalf = []

    for (let index = 0; index < codeLiguesNoHalf.length; index++) {
        const element = codeLiguesNoHalf[index].codigoWplay;
        codeStrings += element
        codeStrings += '-'
        if ((index + 1) % 5 === 0 || index === codeLiguesNoHalf.length - 1) {
            let codeStringsWithOutRaya = codeStrings.substring(0, codeStrings.length - 1)
            linksNoHalf.push(codeStringsWithOutRaya)
            codeStrings = ''
        }
    }

    let linksFavoritos = []

    for (let index = 0; index < codeLiguesPreferidos.length; index++) {
        const element = codeLiguesPreferidos[index].codigoWplay;
        codeStrings += element
        codeStrings += '-'
        if ((index + 1) % 5 === 0 || index === codeLiguesPreferidos.length - 1) {
            let codeStringsWithOutRaya = codeStrings.substring(0, codeStrings.length - 1)
            linksFavoritos.push(codeStringsWithOutRaya)
            codeStrings = ''
        }
    }

    let codeLiguesAll = [...codeLigues, ...codeLiguesNoHalf]
    let linksAll = []

    for (let index = 0; index < codeLiguesAll.length; index++) {
        const element = codeLiguesAll[index].codigoWplay;
        codeStrings += element
        codeStrings += '-'
        if ((index + 1) % 5 === 0 || index === codeLiguesAll.length - 1) {
            let codeStringsWithOutRaya = codeStrings.substring(0, codeStrings.length - 1)
            linksAll.push(codeStringsWithOutRaya)
            codeStrings = ''
        }
    }

    html += `
    <span>
        Gol en la primera Mitad - SI (GSH1) - CNAT-601779 - UNAT-556801
    </span>
    <br>
    `

    for (const link of links) {

        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link}</a>
      </div>
    </div>
        `
    }
    html += '<hr>'
    html += `
    <span>
        PRIMERA MITAD MAS DE 0.5 (OUH1)
    </span>
    <br>
    `
    for (const link of linksNoHalf) {
        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OUH1&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link}</a>
      </div>
    </div>
        `
    }

    html += '<hr>'
    html += `
    <span>
        AMBOS ANOTAN (BTSC)
    </span>
    <br>
    `
    for (const link of linksAll) {
        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=BTSC&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link}</a>
      </div>
    </div>
        `
    }

    html += '<hr>'
    html += `
    <span>
        OVER (HCTG)
    </span>
    <br>
    `
    for (const link of linksAll) {
        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=HCTG&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link}</a>
      </div>
    </div>
        `
    }


    html += '<hr>'
    html += `
    <span>
        LOCAL - VISITANTE (OU1H - OU1A)
    </span>
    <br>
    `
    for (const link of linksFavoritos) {
        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1H&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link} - LOCAL</a>
        ------
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=OU1A&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link} - VISITANTE</a>
      </div>
    </div>
        `
    }

    html += '<hr>'
    html += `
    <span>
        TODOS POR FECHA - COPIAR CUOTAS
    </span>
    <br>
    `
    for (const link of linksAll) {
        html += `
    <div class="row">
      <div class="col">
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=SBTYPE&mkt_sort=MRES&sb_type_ids=${link}" target="_blank" rel="noopener noreferrer">${link}</a>
      </div>
    </div>
        `
    }


    // https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=19296-19160-48352-19159-19328

    console.log({ links })

    html += '<hr>'
    html += `
    <span>
        AMISTOSOS
    </span>
    <br>
    `
    html += `
    <div class="row">
      <div class="col">
      
      <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=SBTYPE&mkt_sort=MRES&sb_type_ids=19345-465796-19287-20183-617783" target="_blank" rel="noopener noreferrer">Amistosos Ligas</a>
        -------
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=GSH1&sb_type_ids=19345-465796-19287-20183-617783" target="_blank" rel="noopener noreferrer">Amistosos Mitad</a>
        -------
        <a href="https://local.wplay.co/es/type-coupon?coupon_group_by=TIME&mkt_sort=MRES&sb_type_ids=19345-465796-19287-20183-617783" target="_blank" rel="noopener noreferrer">Amistosos</a>
      </div>
    </div>
    `

    html += '<hr>'
    html += '<hr>'
    html += '<hr>'

    CONTENEDOR_DATOS.innerHTML = html
    ponerEventosEnLasAnclas()
}

const dibujarSM = function (partidos = PARTIDOS_OPTIMIZADOS) {
    let html = ''
    let indice = 0
    let total = partidos.length
    let acumulado = 1
    for (const partido of partidos) {

        let mitad = partido.mitad ? `<a href="${baseUrlSm + partido.codigoWplay + '?mkt_sort=GSH1'}" target="_blank" rel="noopener noreferrer">M</a>` : ''
        let local = partido.mitadFavorito ? ` <a href="${baseUrlSm + partido.codigoWplay + '?mkt_sort=OU1H'}" target="_blank" rel="noopener noreferrer">L</a>` : ''
        let visitante = partido.mitadFavorito ? ` <a href="${baseUrlSm + partido.codigoWplay + '?mkt_sort=OU1A'}" target="_blank" rel="noopener noreferrer">V</a>` : ''

        if (partido.cuotaCualquiera) {
            acumulado = Math.floor(acumulado * partido.cuotaCualquiera * 100) / 100
        }
        if (acumulado > MAXIMO_A_GANAR) {
            acumulado = 1
        }
        let acumuladoEntero = Math.floor(acumulado)
        indice++
        html += `
        <div class="row ${partido.cantidadDeApuestas < 60 ? 'bg-warning' : ''} ${partido.cantidadDeApuestas < 60 && partido.cuotaCualquiera > 1 && partido.cuotaCualquiera < 1.26 ? 'bg-danger' : ''}">
            <div class="col-2 border">
                ${indice}/${total}<br>
                ${partido.hora - 10000}
            </div>
            <div class="col-4 border ${partido.cuotaFavorito && partido.cuotaFavorito > 1 && partido.cuotaFavorito < 1.74 ? 'bg-warning' : ''} ${partido.cuotaCualquiera && partido.cuotaCualquiera > 1 && partido.cuotaCualquiera < 1.26 && partido.cuotaFavorito && partido.cuotaFavorito > 1 && partido.cuotaFavorito < 1.74 ? 'bg-danger' : ''}">
                <small>
                    <a href="${baseUrlSm + partido.codigoWplay}" target="_blank" rel="noopener noreferrer">${partido.liga}</a>
                    ${mitad} ${local} ${visitante}
                </small>
                <br>
                <small class="${partido.favorito === 'local' ? 'bg-secondary text-white' : ''}">${partido.local.substring(0, 10)}</small>
                <br>
                <small class="${partido.favorito === 'visitante' ? 'bg-secondary text-white' : ''}">${partido.visitante.substring(0, 10)}</small>
            </div>
            <div class="col-2 border text-center">
                <div class="${partido.cantidadDeApuestas > 43 && partido.cuotaLocal > partido.cuotaVisitante ? 'bg-success-subtle' : ''}">${partido.cuotaLocal.toFixed(2)}</div>
                <div>${partido.empate.toFixed(2)}</div>
                <div class="${partido.cantidadDeApuestas > 43 && partido.cuotaLocal < partido.cuotaVisitante ? 'bg-success-subtle' : ''}">${partido.cuotaVisitante.toFixed(2)}</div>
            </div>
            <div class="col-2 border">
                <small>${partido.cuotaCualquiera?.toFixed(2) || ''}</small>
                <br>
                <small>${partido.cuotaFavorito?.toFixed(2) || 1}</small>
                <br>
                <small>${partido.rate || 1}</small>
            </div>
            <div class="col-2 border">
           

                <small>${acumuladoEntero}</small>
                <br>
                <small>${partido.stake || 0}</small>
                <br>
                <small>${partido.cantidadDeApuestas || 0}</small>
            </div>
        </div>
        `
    }

    CONTENEDOR_DATOS_SM.innerHTML = html
    ponerEventosEnLasAnclas()
}

dibujar()
dibujarSM()

const ordenar = function (value) {
    console.log({ value })
    if (value === 'cuotaCualquiera') {
        const filtrados = PARTIDOS_OPTIMIZADOS.filter(partido => partido.hasOwnProperty('cuotaCualquiera'))
        PARTIDOS_OPTIMIZADOS = filtrados
    }
    if (value !== 'liga') {
        PARTIDOS_OPTIMIZADOS.sort((a, b) => a[value] - b[value])
    } else {
        PARTIDOS_OPTIMIZADOS.sort((a, b) => {
            const nameA = a[value].toUpperCase(); // ignore upper and lowercase
            const nameB = b[value].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            if (nameA == nameB && a['favorito'] === 'local') {
                return -1;
            }

            // names must be equal
            return 0;
        });
    }
    dibujar()
    dibujarSM()
}

