let PARTIDOS_OPTIMIZADOS = [
	{"hora":11700,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Novorizontino SP","visitante":"Brusque FC","cuotaLocal":1.55,"empate":3.55,"cuotaVisitante":7,"cantidadDeApuestas":113,"cuotaCualquiera":1.55,"ambosAnotan":2.5,"over":2.55,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":3.4,"favorito":"local"},
	{"hora":11730,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Real Soacha Cundinamarca","visitante":"Real Cartagena","cuotaLocal":2.6,"empate":3,"cuotaVisitante":2.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":1.9,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-COLC","mitad":true,"mitadFavorito":true,"codigoWplay":29698,"local":"Tolima","visitante":"Deportivo Pasto","cuotaLocal":1.833,"empate":3.35,"cuotaVisitante":5.25,"cantidadDeApuestas":154,"cuotaCualquiera":1.55,"ambosAnotan":2.25,"over":2.55,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":2.65,"favorito":"local"},
	{"hora":11900,"liga":"ZA-ECU2","mitad":false,"mitadFavorito":false,"codigoWplay":30530,"local":"San Antonio","visitante":"Club Leones Del Norte","cuotaLocal":2.55,"empate":2.65,"cuotaVisitante":3,"cantidadDeApuestas":38,"cuotaCualquiera":1.666,"ambosAnotan":2.3,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"CS 2 de Mayo","visitante":"Club General Caballero JLM","cuotaLocal":1.9,"empate":3.25,"cuotaVisitante":3.95,"cantidadDeApuestas":90,"cuotaCualquiera":1.45,"ambosAnotan":1.85,"over":2.1,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Avai SC","visitante":"Ituano SP","cuotaLocal":1.727,"empate":3.25,"cuotaVisitante":5.5,"cantidadDeApuestas":115,"cuotaCualquiera":1.55,"ambosAnotan":2.25,"over":2.55,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":3.1,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Guarani SP","visitante":"Mirassol SP","cuotaLocal":2.25,"empate":2.9,"cuotaVisitante":3.55,"cantidadDeApuestas":114,"cuotaCualquiera":1.65,"ambosAnotan":2.25,"over":2.875,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-LIBE","mitad":true,"mitadFavorito":true,"codigoWplay":19462,"local":"Colo Colo","visitante":"River Plate","cuotaLocal":3.2,"empate":3.2,"cuotaVisitante":2.45,"cantidadDeApuestas":191,"cuotaCualquiera":1.55,"ambosAnotan":2,"over":2.4,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":2.25,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-SUDA","mitad":true,"mitadFavorito":true,"codigoWplay":19348,"local":"Fortaleza CE","visitante":"Corinthians SP","cuotaLocal":2.05,"empate":3.2,"cuotaVisitante":4.2,"cantidadDeApuestas":188,"cuotaCualquiera":1.615,"ambosAnotan":2.375,"over":2.875,"cuotaFavorito":3.2,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":3.2,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-COLC","mitad":true,"mitadFavorito":true,"codigoWplay":29698,"local":"Fortaleza FC","visitante":"Deportivo Cali","cuotaLocal":2.05,"empate":3.2,"cuotaVisitante":4.2,"cantidadDeApuestas":147,"cuotaCualquiera":1.533,"ambosAnotan":2.05,"over":2.4,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Pachuca","visitante":"Toluca","cuotaLocal":2.75,"empate":3.6,"cuotaVisitante":2.5,"cantidadDeApuestas":256,"cuotaCualquiera":1.333,"ambosAnotan":1.533,"over":1.666,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":1.909,"favorito":"local"},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Atletico San Luis","visitante":"Cruz Azul","cuotaLocal":4.75,"empate":3.8,"cuotaVisitante":1.75,"cantidadDeApuestas":252,"cuotaCualquiera":1.3,"ambosAnotan":1.6,"over":1.666,"cuotaFavorito":1.615,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":1.615,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"America","visitante":"Atlas de Guadalajara","cuotaLocal":1.75,"empate":3.75,"cuotaVisitante":5,"cantidadDeApuestas":254,"cuotaCualquiera":1.42,"ambosAnotan":1.95,"over":2.1,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.85,"favorito":"local"},
	{"hora":12200,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Queretaro FC","visitante":"Tigres UANL","cuotaLocal":5.75,"empate":3.95,"cuotaVisitante":1.65,"cantidadDeApuestas":254,"cuotaCualquiera":1.333,"ambosAnotan":1.75,"over":1.8,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":1.65,"favorito":"visitante"},
	{"hora":12205,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Pumas Unam","visitante":"Puebla","cuotaLocal":1.571,"empate":4.2,"cuotaVisitante":6,"cantidadDeApuestas":243,"cuotaCualquiera":1.333,"ambosAnotan":1.8,"over":1.75,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.75,"favorito":"visitante"},
]