let PARTIDOS_OPTIMIZADOS = [
	{"hora":10530,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Sivasspor","visitante":"Alanyaspor","cuotaLocal":2.8,"empate":3.4,"cuotaVisitante":2.45,"cantidadDeApuestas":248,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2,"favorito":"visitante"},
	{"hora":10530,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Keciorengucu","visitante":"Kocaelispor","cuotaLocal":3.2,"empate":3.2,"cuotaVisitante":2.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10530,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Erzurum BB","visitante":"Sanliurfaspor","cuotaLocal":1.615,"empate":3.6,"cuotaVisitante":5,"cantidadDeApuestas":38,"cuotaCualquiera":1.444,"ambosAnotan":2,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10600,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"FC Felgueiras 1932","visitante":"Pacos Ferreira","cuotaLocal":1.95,"empate":3.3,"cuotaVisitante":3.6,"cantidadDeApuestas":86,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":10600,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"Academica Viseu","visitante":"FC Vizela","cuotaLocal":2.4,"empate":3.1,"cuotaVisitante":2.85,"cantidadDeApuestas":86,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.15,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":10615,"liga":"YE-HOL2","mitad":true,"mitadFavorito":true,"codigoWplay":19375,"local":"SC Telstar","visitante":"Jong PSV","cuotaLocal":1.42,"empate":4.5,"cuotaVisitante":6.5,"cantidadDeApuestas":106,"cuotaCualquiera":1.222,"ambosAnotan":1.55,"over":1.444,"cuotaFavorito":1.444,"rate":1,"stake":0,"localMitad":1.444,"visitanteMitad":2.45,"favorito":"local"},
	{"hora":10615,"liga":"YE-HOL1","mitad":true,"mitadFavorito":true,"codigoWplay":19358,"local":"Twente","visitante":"Willem II Tilburg","cuotaLocal":1.4,"empate":4.75,"cuotaVisitante":7.5,"cantidadDeApuestas":183,"cuotaCualquiera":1.3,"ambosAnotan":1.85,"over":1.666,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3,"favorito":"local"},
	{"hora":10630,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"Génova","visitante":"Parma","cuotaLocal":1.95,"empate":3.6,"cuotaVisitante":3.9,"cantidadDeApuestas":285,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.85,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.4,"favorito":"visitante"},
	{"hora":10630,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Salernitana","visitante":"Sassuolo","cuotaLocal":4,"empate":3.5,"cuotaVisitante":1.85,"cantidadDeApuestas":118,"cuotaCualquiera":1.363,"ambosAnotan":1.7,"over":1.833,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":10700,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Hull City","visitante":"Doncaster Rovers","cuotaLocal":1.769,"empate":3.85,"cuotaVisitante":4.2,"cantidadDeApuestas":186,"cuotaCualquiera":1.35,"ambosAnotan":1.727,"over":1.8,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":10730,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Beerschot","visitante":"Antwerp","cuotaLocal":4.333,"empate":3.9,"cuotaVisitante":1.727,"cantidadDeApuestas":117,"cuotaCualquiera":1.3,"ambosAnotan":1.6,"over":1.666,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.65,"favorito":"visitante"},
	{"hora":10730,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Tamworth FC","visitante":"Tottenham","cuotaLocal":17,"empate":7,"cuotaVisitante":1.166,"cantidadDeApuestas":203,"cuotaCualquiera":1.2,"ambosAnotan":1.85,"over":1.363,"cuotaFavorito":1.3,"rate":1,"stake":0,"localMitad":3.2,"visitanteMitad":1.3,"favorito":"visitante"},
	{"hora":10800,"liga":"ESP1","mitad":true,"mitadFavorito":true,"codigoWplay":19160,"local":"Las Palmas","visitante":"Getafe","cuotaLocal":2.5,"empate":3,"cuotaVisitante":3.2,"cantidadDeApuestas":288,"cuotaCualquiera":1.6,"ambosAnotan":2.05,"over":2.55,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.625,"favorito":"local"},
	{"hora":10800,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"CF Cordoba","visitante":"Almeria","cuotaLocal":2.625,"empate":3.25,"cuotaVisitante":2.45,"cantidadDeApuestas":106,"cuotaCualquiera":1.35,"ambosAnotan":1.571,"over":1.769,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":10800,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Trabzonspor","visitante":"Antalyaspor","cuotaLocal":1.55,"empate":4.333,"cuotaVisitante":5.25,"cantidadDeApuestas":243,"cuotaCualquiera":1.285,"ambosAnotan":1.65,"over":1.6,"cuotaFavorito":1.571,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":2.5,"favorito":"local"},
	{"hora":10800,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Amedspor","visitante":"Ankaragucu","cuotaLocal":2.55,"empate":3.2,"cuotaVisitante":2.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10800,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Boluspor","visitante":"Adanaspor","cuotaLocal":1.666,"empate":3.45,"cuotaVisitante":4.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.444,"ambosAnotan":1.95,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10830,"liga":"YE-HOL1","mitad":true,"mitadFavorito":true,"codigoWplay":19358,"local":"Groningen","visitante":"Almere City FC","cuotaLocal":1.75,"empate":3.6,"cuotaVisitante":4.75,"cantidadDeApuestas":182,"cuotaCualquiera":1.444,"ambosAnotan":1.95,"over":2.1,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.8,"favorito":"local"},
	{"hora":10830,"liga":"YE-HOL1","mitad":true,"mitadFavorito":true,"codigoWplay":19358,"local":"Feyenoord Rotterdam","visitante":"Utrecht","cuotaLocal":1.444,"empate":4.75,"cuotaVisitante":6.25,"cantidadDeApuestas":184,"cuotaCualquiera":1.25,"ambosAnotan":1.65,"over":1.5,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":2.625,"favorito":"local"},
	{"hora":10900,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"Venezia","visitante":"Inter","cuotaLocal":11,"empate":6,"cuotaVisitante":1.285,"cantidadDeApuestas":303,"cuotaCualquiera":1.25,"ambosAnotan":1.95,"over":1.55,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":3.25,"visitanteMitad":1.42,"favorito":"visitante"},
	{"hora":10900,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"AC Le Havre","visitante":"RC Lens","cuotaLocal":5.75,"empate":3.9,"cuotaVisitante":1.65,"cantidadDeApuestas":268,"cuotaCualquiera":1.4,"ambosAnotan":1.95,"over":2,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":2.95,"visitanteMitad":1.75,"favorito":"visitante"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"FC Sudtirol","visitante":"Catanzaro","cuotaLocal":2.55,"empate":2.95,"cuotaVisitante":2.95,"cantidadDeApuestas":115,"cuotaCualquiera":1.55,"ambosAnotan":1.95,"over":2.4,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Frosinone","visitante":"Cremonese","cuotaLocal":3.3,"empate":3.1,"cuotaVisitante":2.25,"cantidadDeApuestas":115,"cuotaCualquiera":1.48,"ambosAnotan":1.9,"over":2.25,"cuotaFavorito":2.5,"rate":1,"stake":0,"localMitad":2.5,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Palermo","visitante":"Modena FC","cuotaLocal":2,"empate":3.1,"cuotaVisitante":4.2,"cantidadDeApuestas":117,"cuotaCualquiera":1.48,"ambosAnotan":1.909,"over":2.25,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Reggiana","visitante":"Bari","cuotaLocal":2.45,"empate":2.9,"cuotaVisitante":3.1,"cantidadDeApuestas":116,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.25,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Cosenza","visitante":"AC Mantova","cuotaLocal":1.95,"empate":3.3,"cuotaVisitante":4,"cantidadDeApuestas":117,"cuotaCualquiera":1.444,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":2.625,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.625,"favorito":"visitante"},
	{"hora":10900,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Spezia","visitante":"Juve Stabia","cuotaLocal":1.769,"empate":3.3,"cuotaVisitante":5,"cantidadDeApuestas":114,"cuotaCualquiera":1.5,"ambosAnotan":2.05,"over":2.35,"cuotaFavorito":1.9,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":3,"favorito":"local"},
	{"hora":10900,"liga":"YE-PORT","mitad":false,"mitadFavorito":true,"codigoWplay":19382,"local":"O Elvas Cad","visitante":"Vitoria Guimaraes","cuotaLocal":7.5,"empate":4.333,"cuotaVisitante":1.35,"cantidadDeApuestas":41,"cuotaCualquiera":1.35,"ambosAnotan":2.1,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10930,"liga":"ALE1","mitad":true,"mitadFavorito":true,"codigoWplay":19158,"local":"RB Leipzig","visitante":"Werder Bremen","cuotaLocal":1.769,"empate":4.2,"cuotaVisitante":4.333,"cantidadDeApuestas":277,"cuotaCualquiera":1.25,"ambosAnotan":1.5,"over":1.533,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.2,"favorito":"visitante"},
	{"hora":10930,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"Panseraikos","visitante":"Panathinaikos","cuotaLocal":7.5,"empate":4.2,"cuotaVisitante":1.4,"cantidadDeApuestas":96,"cuotaCualquiera":1.363,"ambosAnotan":2,"over":1.833,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":3.25,"visitanteMitad":1.6,"favorito":"visitante"},
	{"hora":11000,"liga":"R-ESC2","mitad":false,"mitadFavorito":true,"codigoWplay":19879,"local":"Greenock Morton","visitante":"Raith Rovers","cuotaLocal":2.6,"empate":2.9,"cuotaVisitante":2.75,"cantidadDeApuestas":89,"cuotaCualquiera":1.5,"ambosAnotan":1.85,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":2.3,"favorito":""},
	{"hora":11000,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"FCV Dender EH","visitante":"KAA Gent","cuotaLocal":3.2,"empate":3.45,"cuotaVisitante":2.15,"cantidadDeApuestas":117,"cuotaCualquiera":1.363,"ambosAnotan":1.615,"over":1.833,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":1.85,"favorito":"visitante"},
	{"hora":11000,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Arsenal","visitante":"Manchester United","cuotaLocal":1.727,"empate":3.9,"cuotaVisitante":4.75,"cantidadDeApuestas":279,"cuotaCualquiera":1.363,"ambosAnotan":1.769,"over":1.85,"cuotaFavorito":2.65,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.65,"favorito":"visitante"},
	{"hora":11000,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Crystal Palace","visitante":"Stockport County","cuotaLocal":1.3,"empate":5.5,"cuotaVisitante":8.5,"cantidadDeApuestas":188,"cuotaCualquiera":1.222,"ambosAnotan":1.727,"over":1.45,"cuotaFavorito":1.4,"rate":1,"stake":0,"localMitad":1.4,"visitanteMitad":2.875,"favorito":"local"},
	{"hora":11000,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Ipswich Town","visitante":"Bristol Rovers","cuotaLocal":1.222,"empate":6.25,"cuotaVisitante":11,"cantidadDeApuestas":188,"cuotaCualquiera":1.222,"ambosAnotan":1.93,"over":1.48,"cuotaFavorito":1.38,"rate":1,"stake":0,"localMitad":1.38,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11000,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Newcastle","visitante":"Bromley FC","cuotaLocal":1.111,"empate":8.5,"cuotaVisitante":21,"cantidadDeApuestas":188,"cuotaCualquiera":1.181,"ambosAnotan":1.95,"over":1.3,"cuotaFavorito":1.25,"rate":1,"stake":0,"localMitad":1.25,"visitanteMitad":3.45,"favorito":"local"},
	{"hora":11000,"liga":"R-ESC1","mitad":true,"mitadFavorito":true,"codigoWplay":19208,"local":"Glasgow Rangers","visitante":"St Johnstone","cuotaLocal":1.1,"empate":8.5,"cuotaVisitante":26,"cantidadDeApuestas":190,"cuotaCualquiera":1.2,"ambosAnotan":2.15,"over":1.35,"cuotaFavorito":1.25,"rate":1,"stake":0,"localMitad":1.25,"visitanteMitad":3.8,"favorito":"local"},
	{"hora":11000,"liga":"R-ESC1","mitad":true,"mitadFavorito":true,"codigoWplay":19208,"local":"Aberdeen","visitante":"Hearts","cuotaLocal":2.45,"empate":3.35,"cuotaVisitante":2.85,"cantidadDeApuestas":194,"cuotaCualquiera":1.38,"ambosAnotan":1.65,"over":1.85,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":11000,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"Lamia","visitante":"Atromitos","cuotaLocal":3.5,"empate":2.9,"cuotaVisitante":2.15,"cantidadDeApuestas":93,"cuotaCualquiera":1.571,"ambosAnotan":2,"over":2.5,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11015,"liga":"ESP1","mitad":true,"mitadFavorito":true,"codigoWplay":19160,"local":"Atlético Madrid","visitante":"Osasuna","cuotaLocal":1.333,"empate":5.25,"cuotaVisitante":11,"cantidadDeApuestas":321,"cuotaCualquiera":1.333,"ambosAnotan":2.25,"over":1.8,"cuotaFavorito":3.65,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3.65,"favorito":"visitante"},
	{"hora":11015,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Elche","visitante":"Real Zaragoza","cuotaLocal":1.8,"empate":3.1,"cuotaVisitante":4.5,"cantidadDeApuestas":102,"cuotaCualquiera":1.5,"ambosAnotan":2.05,"over":2.4,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":3,"favorito":"local"},
	{"hora":11015,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"CF Cadiz","visitante":"Levante","cuotaLocal":2.4,"empate":2.95,"cuotaVisitante":2.9,"cantidadDeApuestas":105,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11030,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"FC Porto B","visitante":"Portimonense SC","cuotaLocal":2.15,"empate":3.25,"cuotaVisitante":3.1,"cantidadDeApuestas":86,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.909,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.25,"favorito":"visitante"},
	{"hora":11045,"liga":"YE-HOL2","mitad":true,"mitadFavorito":true,"codigoWplay":19375,"local":"Vitesse","visitante":"VVV Venlo","cuotaLocal":1.85,"empate":3.8,"cuotaVisitante":3.7,"cantidadDeApuestas":105,"cuotaCualquiera":1.3,"ambosAnotan":1.55,"over":1.615,"cuotaFavorito":1.7,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.2,"favorito":"local"},
	{"hora":11045,"liga":"YE-HOL1","mitad":true,"mitadFavorito":true,"codigoWplay":19358,"local":"NAC Breda","visitante":"Heerenveen","cuotaLocal":2.15,"empate":3.5,"cuotaVisitante":3.2,"cantidadDeApuestas":184,"cuotaCualquiera":1.363,"ambosAnotan":1.65,"over":1.833,"cuotaFavorito":1.9,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.25,"favorito":"local"},
	{"hora":11100,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Istanbul Basaksehir FK","visitante":"Galatasaray","cuotaLocal":5,"empate":4.333,"cuotaVisitante":1.6,"cantidadDeApuestas":243,"cuotaCualquiera":1.25,"ambosAnotan":1.533,"over":1.5,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":1.533,"favorito":"visitante"},
	{"hora":11100,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Gaziantep BB","visitante":"Adana Demirspor","cuotaLocal":1.45,"empate":4.5,"cuotaVisitante":6.5,"cantidadDeApuestas":223,"cuotaCualquiera":1.25,"ambosAnotan":1.65,"over":1.55,"cuotaFavorito":1.5,"rate":1,"stake":0,"localMitad":1.5,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11100,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Genclerbirligi","visitante":"Yeni Malatyaspor","cuotaLocal":1.04,"empate":11,"cuotaVisitante":21,"cantidadDeApuestas":2,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11115,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"Montpellier","visitante":"Angers SCO","cuotaLocal":2.1,"empate":3.55,"cuotaVisitante":3.5,"cantidadDeApuestas":263,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.85,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11115,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"Toulouse","visitante":"Strasbourg","cuotaLocal":1.769,"empate":3.9,"cuotaVisitante":4.5,"cantidadDeApuestas":260,"cuotaCualquiera":1.333,"ambosAnotan":1.666,"over":1.75,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":11115,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Cesena","visitante":"Cittadella","cuotaLocal":1.95,"empate":3.2,"cuotaVisitante":4.2,"cantidadDeApuestas":117,"cuotaCualquiera":1.48,"ambosAnotan":1.909,"over":2.2,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":11130,"liga":"ALE1","mitad":true,"mitadFavorito":true,"codigoWplay":19158,"local":"Augsburg","visitante":"Stuttgart","cuotaLocal":3.6,"empate":3.7,"cuotaVisitante":2,"cantidadDeApuestas":273,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.7,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":11130,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Southampton","visitante":"Swansea","cuotaLocal":1.769,"empate":3.95,"cuotaVisitante":4.2,"cantidadDeApuestas":266,"cuotaCualquiera":1.333,"ambosAnotan":1.7,"over":1.727,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":11145,"liga":"YE-PORT","mitad":false,"mitadFavorito":true,"codigoWplay":19382,"local":"Casa Pia Atletico","visitante":"Rio Ave","cuotaLocal":1.95,"empate":3.1,"cuotaVisitante":3.75,"cantidadDeApuestas":44,"cuotaCualquiera":1.48,"ambosAnotan":1.9,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"Bologna","visitante":"Roma","cuotaLocal":2.9,"empate":3.25,"cuotaVisitante":2.55,"cantidadDeApuestas":308,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.1,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11230,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Anderlecht","visitante":"Club Brugge","cuotaLocal":3.3,"empate":3.45,"cuotaVisitante":2.1,"cantidadDeApuestas":119,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.7,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":1.769,"favorito":"local"},
	{"hora":11230,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"PAOK Thessaloniki","visitante":"Volos NPS","cuotaLocal":1.166,"empate":6,"cuotaVisitante":15,"cantidadDeApuestas":94,"cuotaCualquiera":1.285,"ambosAnotan":2.4,"over":1.6,"cuotaFavorito":1.4,"rate":1,"stake":0,"localMitad":1.4,"visitanteMitad":4,"favorito":"local"},
	{"hora":11300,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Pumas Unam","visitante":"Necaxa","cuotaLocal":1.571,"empate":4.2,"cuotaVisitante":6.25,"cantidadDeApuestas":182,"cuotaCualquiera":1.35,"ambosAnotan":1.8,"over":1.8,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":11300,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"CD Tapatio","visitante":"Leones Negros","cuotaLocal":2.5,"empate":3.3,"cuotaVisitante":2.7,"cantidadDeApuestas":94,"cuotaCualquiera":1.38,"ambosAnotan":1.615,"over":1.85,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.1,"favorito":"visitante"},
	{"hora":11300,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"Leixoes SC","visitante":"Torreense","cuotaLocal":2.2,"empate":3.1,"cuotaVisitante":3.3,"cantidadDeApuestas":85,"cuotaCualquiera":1.533,"ambosAnotan":1.95,"over":2.35,"cuotaFavorito":2.6,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.6,"favorito":"visitante"},
	{"hora":11300,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"Uniao Leiria","visitante":"Desportivo Chaves","cuotaLocal":2.35,"empate":3,"cuotaVisitante":2.95,"cantidadDeApuestas":87,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.35,"favorito":"local"},
	{"hora":11300,"liga":"BPOT","mitad":false,"mitadFavorito":false,"codigoWplay":"19793","local":"Globo FC","visitante":"Forca e Luz RN","cuotaLocal":2.3,"empate":3.35,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.3,"ambosAnotan":1.45,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11315,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Cercle Brugge","visitante":"Mechelen","cuotaLocal":2.25,"empate":3.4,"cuotaVisitante":3,"cantidadDeApuestas":118,"cuotaCualquiera":1.35,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":11330,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"AEK Athens","visitante":"Kallithea FC Athen","cuotaLocal":1.133,"empate":6.5,"cuotaVisitante":19,"cantidadDeApuestas":94,"cuotaCualquiera":1.25,"ambosAnotan":2.3,"over":1.5,"cuotaFavorito":1.35,"rate":1,"stake":0,"localMitad":1.35,"visitanteMitad":4,"favorito":"local"},
	{"hora":11330,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Brescia","visitante":"Sampdoria","cuotaLocal":2.65,"empate":3.2,"cuotaVisitante":2.625,"cantidadDeApuestas":116,"cuotaCualquiera":1.45,"ambosAnotan":1.769,"over":2.1,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.2,"favorito":"local"},
	{"hora":11400,"liga":"ESPS","mitad":true,"mitadFavorito":true,"codigoWplay":19511,"local":"Real Madrid","visitante":"Barcelona","cuotaLocal":2.4,"empate":3.85,"cuotaVisitante":2.6,"cantidadDeApuestas":173,"cuotaCualquiera":1.25,"ambosAnotan":1.4,"over":1.48,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":1.833,"favorito":"local"},
	{"hora":11400,"liga":"BCAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19456","local":"Madureira RJ","visitante":"Volta Redonda RJ","cuotaLocal":3.5,"empate":3.1,"cuotaVisitante":2.1,"cantidadDeApuestas":84,"cuotaCualquiera":1.5,"ambosAnotan":1.93,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.65,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BCAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19456","local":"Flamengo RJ","visitante":"Boavista RJ","cuotaLocal":1.8,"empate":3.6,"cuotaVisitante":3.85,"cantidadDeApuestas":85,"cuotaCualquiera":1.333,"ambosAnotan":1.65,"over":1.75,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":1,"favorito":"local"},
	{"hora":11400,"liga":"BBAI","mitad":false,"mitadFavorito":false,"codigoWplay":"19791","local":"Jacuipense BA","visitante":"Bahia BA","cuotaLocal":1.9,"empate":3.4,"cuotaVisitante":3.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.727,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BALA","mitad":false,"mitadFavorito":false,"codigoWplay":"32464","local":"Coruripe AL","visitante":"Asa AL","cuotaLocal":3.3,"empate":3,"cuotaVisitante":2.15,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BALA","mitad":false,"mitadFavorito":false,"codigoWplay":"32464","local":"Csa AL","visitante":"CS Esportiva AL","cuotaLocal":1.533,"empate":3.65,"cuotaVisitante":5.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":2.05,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BMAR","mitad":false,"mitadFavorito":false,"codigoWplay":"44672","local":"Moto Clube MA","visitante":"Maranhao MA","cuotaLocal":3.3,"empate":3.3,"cuotaVisitante":2,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.75,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19790","local":"Operario PR","visitante":"Andraus Brasil","cuotaLocal":1.2,"empate":5,"cuotaVisitante":13,"cantidadDeApuestas":37,"cuotaCualquiera":1.333,"ambosAnotan":2.45,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19790","local":"Coritiba PR","visitante":"Londrina PR","cuotaLocal":2.8,"empate":2.95,"cuotaVisitante":2.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19790","local":"Cianorte PR","visitante":"FC Cascavel","cuotaLocal":2.05,"empate":3,"cuotaVisitante":3.55,"cantidadDeApuestas":38,"cuotaCualquiera":1.533,"ambosAnotan":2,"over":2.4,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPARAI","mitad":false,"mitadFavorito":false,"codigoWplay":"28509","local":"Botafogo PB","visitante":"Nacional PB","cuotaLocal":1.533,"empate":3.9,"cuotaVisitante":5.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.45,"ambosAnotan":2.15,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPARAI","mitad":false,"mitadFavorito":false,"codigoWplay":"28509","local":"Treze PB","visitante":"Auto Esporte Clube PB","cuotaLocal":1.35,"empate":4.5,"cuotaVisitante":7.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":2.05,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPIA","mitad":false,"mitadFavorito":false,"codigoWplay":"55406","local":"Parnahyba PI","visitante":"AA Oeirense","cuotaLocal":1.85,"empate":3.3,"cuotaVisitante":3.9,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPIA","mitad":false,"mitadFavorito":false,"codigoWplay":"55406","local":"Altos","visitante":"Fluminense EC PI","cuotaLocal":2,"empate":3.2,"cuotaVisitante":3.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.909,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPOT","mitad":false,"mitadFavorito":false,"codigoWplay":"19793","local":"ABC RN","visitante":"Club Laguna SAF","cuotaLocal":1.363,"empate":4.333,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":2,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"Napoles","visitante":"Verona","cuotaLocal":1.25,"empate":6.25,"cuotaVisitante":13,"cantidadDeApuestas":291,"cuotaCualquiera":1.285,"ambosAnotan":2.2,"over":1.65,"cuotaFavorito":1.444,"rate":1,"stake":0,"localMitad":1.444,"visitanteMitad":3.7,"favorito":"local"},
	{"hora":11445,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"PSG","visitante":"Saint Etienne","cuotaLocal":1.09,"empate":11,"cuotaVisitante":29,"cantidadDeApuestas":258,"cuotaCualquiera":1.142,"ambosAnotan":1.95,"over":1.222,"cuotaFavorito":3.5,"rate":1,"stake":0,"localMitad":1.2,"visitanteMitad":3.5,"favorito":"visitante"},
	{"hora":11445,"liga":"YE-PORT","mitad":false,"mitadFavorito":true,"codigoWplay":19382,"local":"Gil Vicente","visitante":"Moreirense","cuotaLocal":2.3,"empate":2.9,"cuotaVisitante":3.1,"cantidadDeApuestas":44,"cuotaCualquiera":1.571,"ambosAnotan":2,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"BPER","mitad":false,"mitadFavorito":false,"codigoWplay":"19792","local":"Retro FC","visitante":"Maguary PE","cuotaLocal":1.333,"empate":4.333,"cuotaVisitante":8,"cantidadDeApuestas":38,"cuotaCualquiera":1.35,"ambosAnotan":2.1,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"BPARAI","mitad":false,"mitadFavorito":false,"codigoWplay":"28509","local":"Pombal EC PB","visitante":"EC Patos PB","cuotaLocal":3.25,"empate":3.1,"cuotaVisitante":2.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"Alverca","visitante":"CD Tondela","cuotaLocal":2.6,"empate":3,"cuotaVisitante":2.7,"cantidadDeApuestas":85,"cuotaCualquiera":1.533,"ambosAnotan":1.95,"over":2.375,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.4,"favorito":"visitante"},
	{"hora":11630,"liga":"BBAI","mitad":false,"mitadFavorito":false,"codigoWplay":"19791","local":"Jequie BA","visitante":"Juazeirense BA","cuotaLocal":2.35,"empate":3.1,"cuotaVisitante":2.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"BPAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19790","local":"Metropolitano Maringa PR","visitante":"IF Sao Joseense PR","cuotaLocal":1.222,"empate":5,"cuotaVisitante":13,"cantidadDeApuestas":37,"cuotaCualquiera":1.333,"ambosAnotan":2.3,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"BCAR","mitad":false,"mitadFavorito":false,"codigoWplay":"19456","local":"Fluminense RJ","visitante":"Sampaio Correa RJ","cuotaLocal":1.571,"empate":4.2,"cuotaVisitante":4.75,"cantidadDeApuestas":83,"cuotaCualquiera":1.285,"ambosAnotan":1.65,"over":1.615,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":1,"favorito":"local"},
	{"hora":11700,"liga":"BMAT","mitad":false,"mitadFavorito":false,"codigoWplay":"44888","local":"Operario MT","visitante":"Cuiaba MT","cuotaLocal":1.444,"empate":4.2,"cuotaVisitante":6.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":1.93,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Monterrey","visitante":"Puebla","cuotaLocal":1.3,"empate":5.75,"cuotaVisitante":9.5,"cantidadDeApuestas":185,"cuotaCualquiera":1.25,"ambosAnotan":1.85,"over":1.533,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":1.42,"visitanteMitad":3.1,"favorito":"local"},
]