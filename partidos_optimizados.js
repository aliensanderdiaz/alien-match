let PARTIDOS_OPTIMIZADOS = [
	{"hora":11100,"liga":"YE-UCR1","mitad":false,"mitadFavorito":false,"codigoWplay":19383,"local":"Veres Rivne","visitante":"Kolos Kovalyovka","cuotaLocal":2.3,"empate":2.8,"cuotaVisitante":3.3,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":2,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11115,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"Montpellier","visitante":"Rennes","cuotaLocal":3.45,"empate":3.5,"cuotaVisitante":2.15,"cantidadDeApuestas":248,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":1.8,"favorito":""},
	{"hora":11115,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"AJ Auxerre","visitante":"Strasbourg","cuotaLocal":2.85,"empate":3.4,"cuotaVisitante":2.55,"cantidadDeApuestas":244,"cuotaCualquiera":1.363,"ambosAnotan":1.615,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":1.95,"favorito":""},
	{"hora":11115,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"Angers SCO","visitante":"Toulouse","cuotaLocal":3.25,"empate":3.2,"cuotaVisitante":2.375,"cantidadDeApuestas":246,"cuotaCualquiera":1.48,"ambosAnotan":1.93,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":2.1,"favorito":""},
	{"hora":11115,"liga":"ITA2","mitad":true,"mitadFavorito":true,"codigoWplay":19328,"local":"Bari","visitante":"Sampdoria","cuotaLocal":2.375,"empate":3,"cuotaVisitante":3.2,"cantidadDeApuestas":115,"cuotaCualquiera":1.533,"ambosAnotan":1.95,"over":2.45,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.45,"favorito":""},
	{"hora":11130,"liga":"ALE1","mitad":true,"mitadFavorito":true,"codigoWplay":19158,"local":"Augsburg","visitante":"Freiburg","cuotaLocal":2.7,"empate":3.2,"cuotaVisitante":2.85,"cantidadDeApuestas":259,"cuotaCualquiera":1.45,"ambosAnotan":1.85,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.25,"favorito":""},
	{"hora":11130,"liga":"R-INGF","mitad":true,"mitadFavorito":true,"codigoWplay":19207,"local":"Manchester United","visitante":"Fulham","cuotaLocal":2.4,"empate":3.45,"cuotaVisitante":3,"cantidadDeApuestas":400,"cuotaCualquiera":1.363,"ambosAnotan":1.615,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.1,"favorito":""},
	{"hora":11130,"liga":"YE-POLE","mitad":true,"mitadFavorito":true,"codigoWplay":19336,"local":"Jagiellonia Bialystok","visitante":"GKS Katowice","cuotaLocal":1.75,"empate":3.9,"cuotaVisitante":4.333,"cantidadDeApuestas":169,"cuotaCualquiera":1.285,"ambosAnotan":1.533,"over":1.571,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.3,"favorito":""},
	{"hora":11130,"liga":"YE-RUS1","mitad":false,"mitadFavorito":false,"codigoWplay":19388,"local":"Rostov","visitante":"Dinamo Moscow","cuotaLocal":2.65,"empate":3.5,"cuotaVisitante":2.3,"cantidadDeApuestas":41,"cuotaCualquiera":1.285,"ambosAnotan":1.42,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"Roma","visitante":"Como","cuotaLocal":1.95,"empate":3.55,"cuotaVisitante":4,"cantidadDeApuestas":286,"cuotaCualquiera":1.38,"ambosAnotan":1.769,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.5,"favorito":""},
	{"hora":11230,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Standard Liege","visitante":"Anderlecht","cuotaLocal":3.5,"empate":3.3,"cuotaVisitante":2.1,"cantidadDeApuestas":118,"cuotaCualquiera":1.42,"ambosAnotan":1.833,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.93,"favorito":""},
	{"hora":11230,"liga":"ESP1","mitad":true,"mitadFavorito":true,"codigoWplay":19160,"local":"RCD Mallorca","visitante":"CD Alaves","cuotaLocal":2.25,"empate":3.1,"cuotaVisitante":3.6,"cantidadDeApuestas":311,"cuotaCualquiera":1.615,"ambosAnotan":2.25,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.875,"favorito":""},
	{"hora":11230,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Albacete Balompie","visitante":"CF Cadiz","cuotaLocal":2.6,"empate":3,"cuotaVisitante":2.875,"cantidadDeApuestas":92,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.3,"favorito":""},
	{"hora":11230,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"CD Eldense","visitante":"Levante","cuotaLocal":2.75,"empate":3.1,"cuotaVisitante":2.6,"cantidadDeApuestas":92,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.15,"favorito":""},
	{"hora":11230,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"PAOK Thessaloniki","visitante":"Asteras Tripolis","cuotaLocal":1.285,"empate":4.75,"cuotaVisitante":9.5,"cantidadDeApuestas":94,"cuotaCualquiera":1.333,"ambosAnotan":2.2,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":3.9,"favorito":""},
	{"hora":11230,"liga":"YE-REP1","mitad":false,"mitadFavorito":true,"codigoWplay":19403,"local":"Slavia Prague","visitante":"Bohemians 1905","cuotaLocal":1.2,"empate":5.75,"cuotaVisitante":12,"cantidadDeApuestas":94,"cuotaCualquiera":1.25,"ambosAnotan":2.1,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.363,"visitanteMitad":3.8,"favorito":""},
	{"hora":11230,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Fenerbahce","visitante":"Antalyaspor","cuotaLocal":1.25,"empate":6,"cuotaVisitante":11,"cantidadDeApuestas":270,"cuotaCualquiera":1.222,"ambosAnotan":1.95,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.363,"visitanteMitad":3.35,"favorito":""},
	{"hora":11230,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Sakaryaspor","visitante":"Karagumruk","cuotaLocal":2.45,"empate":3.1,"cuotaVisitante":2.7,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Independiente Del Valle","visitante":"Universidad Catolica Quito","cuotaLocal":1.85,"empate":3.55,"cuotaVisitante":4,"cantidadDeApuestas":93,"cuotaCualquiera":1.333,"ambosAnotan":1.615,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.35,"favorito":""},
	{"hora":11300,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"FC Vizela","visitante":"Feirense","cuotaLocal":1.65,"empate":3.5,"cuotaVisitante":5,"cantidadDeApuestas":77,"cuotaCualquiera":1.42,"ambosAnotan":1.95,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.95,"favorito":""},
	{"hora":11300,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"Rapid Bucharest","visitante":"FCSB","cuotaLocal":2.85,"empate":3.1,"cuotaVisitante":2.375,"cantidadDeApuestas":85,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.05,"favorito":""},
	{"hora":11300,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Sporting Farense","visitante":"Avs Futebol Sad","cuotaLocal":2.3,"empate":3,"cuotaVisitante":3.35,"cantidadDeApuestas":247,"cuotaCualquiera":1.55,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.65,"favorito":""},
	{"hora":11300,"liga":"BPAU2","mitad":false,"mitadFavorito":false,"codigoWplay":"890797","local":"EC Taubate SP","visitante":"Juventus SP","cuotaLocal":2.2,"empate":3.3,"cuotaVisitante":2.9,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.727,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Ayacucho FC","visitante":"Sport Huancayo","cuotaLocal":2.8,"empate":3.1,"cuotaVisitante":2.375,"cantidadDeApuestas":45,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11315,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"OH Leuven","visitante":"Westerlo","cuotaLocal":2.4,"empate":3.5,"cuotaVisitante":2.7,"cantidadDeApuestas":118,"cuotaCualquiera":1.3,"ambosAnotan":1.48,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":1.95,"favorito":""},
	{"hora":11330,"liga":"ALE3","mitad":false,"mitadFavorito":true,"codigoWplay":19366,"local":"Arminia Bielefeld","visitante":"VfB Stuttgart II","cuotaLocal":1.615,"empate":3.85,"cuotaVisitante":4.75,"cantidadDeApuestas":78,"cuotaCualquiera":1.333,"ambosAnotan":1.727,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.65,"visitanteMitad":2.65,"favorito":""},
	{"hora":11330,"liga":"YE-GRE1","mitad":false,"mitadFavorito":true,"codigoWplay":19209,"local":"AEK Athens","visitante":"Olympiacos","cuotaLocal":2.5,"empate":3,"cuotaVisitante":2.75,"cantidadDeApuestas":95,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.3,"favorito":""},
	{"hora":11330,"liga":"BPARAE","mitad":false,"mitadFavorito":false,"codigoWplay":"47614","local":"Paysandu PA","visitante":"Castanhal EC","cuotaLocal":1.65,"empate":3.2,"cuotaVisitante":5.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.93,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11330,"liga":"BPARAE","mitad":false,"mitadFavorito":false,"codigoWplay":"47614","local":"Tuna Luso PA","visitante":"Caete PA","cuotaLocal":1.48,"empate":3.9,"cuotaVisitante":6,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":1.95,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11345,"liga":"BPIA","mitad":false,"mitadFavorito":false,"codigoWplay":"55406","local":"Parnahyba PI","visitante":"Clube Atletico Piauiense","cuotaLocal":2.15,"empate":3.2,"cuotaVisitante":3.1,"cantidadDeApuestas":3,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BGOI","mitad":false,"mitadFavorito":false,"codigoWplay":"19789","local":"Crac GO","visitante":"Goias GO","cuotaLocal":4.2,"empate":3.2,"cuotaVisitante":1.8,"cantidadDeApuestas":3,"cuotaCualquiera":1.55,"ambosAnotan":2.25,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BGAU","mitad":false,"mitadFavorito":false,"codigoWplay":"19458","local":"Avenida","visitante":"EC Sao Jose","cuotaLocal":3,"empate":2.75,"cuotaVisitante":2.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.05,"over":2.625,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPER","mitad":false,"mitadFavorito":false,"codigoWplay":"19792","local":"Sport Recife PE","visitante":"Decisao PE","cuotaLocal":1.142,"empate":6.25,"cuotaVisitante":17,"cantidadDeApuestas":37,"cuotaCualquiera":1.285,"ambosAnotan":2.625,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BPIA","mitad":false,"mitadFavorito":false,"codigoWplay":"55406","local":"Altos","visitante":"4 de Julho EC","cuotaLocal":1.42,"empate":4,"cuotaVisitante":7,"cantidadDeApuestas":3,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BSMAT","mitad":false,"mitadFavorito":false,"codigoWplay":"330774","local":"Dourados AC","visitante":"Aquidauanense","cuotaLocal":1.222,"empate":5.75,"cuotaVisitante":10,"cantidadDeApuestas":10,"cuotaCualquiera":1,"ambosAnotan":1,"over":1.48,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"BSMAT","mitad":false,"mitadFavorito":false,"codigoWplay":"330774","local":"Ivinhema MS","visitante":"Costa Rica MS","cuotaLocal":1.769,"empate":3.4,"cuotaVisitante":4,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":1.727,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"ITA1","mitad":true,"mitadFavorito":true,"codigoWplay":19159,"local":"AC Milán","visitante":"Lazio","cuotaLocal":2.1,"empate":3.65,"cuotaVisitante":3.5,"cantidadDeApuestas":168,"cuotaCualquiera":1.35,"ambosAnotan":1.65,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.25,"favorito":""},
	{"hora":11445,"liga":"FRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19327,"local":"Marseille","visitante":"Nantes","cuotaLocal":1.42,"empate":5,"cuotaVisitante":7.5,"cantidadDeApuestas":250,"cuotaCualquiera":1.25,"ambosAnotan":1.8,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":2.8,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Argentinos Juniors","visitante":"Instituto AC Cordoba","cuotaLocal":1.95,"empate":3.2,"cuotaVisitante":4.333,"cantidadDeApuestas":169,"cuotaCualquiera":1.55,"ambosAnotan":2.2,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":3,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Independiente Rivadavia","visitante":"Atletico Lanus","cuotaLocal":2.85,"empate":2.95,"cuotaVisitante":2.7,"cantidadDeApuestas":166,"cuotaCualquiera":1.571,"ambosAnotan":2.05,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":2.4,"favorito":""},
	{"hora":11500,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Once Caldas","visitante":"Alianza FC","cuotaLocal":1.85,"empate":3.45,"cuotaVisitante":4.75,"cantidadDeApuestas":154,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.875,"favorito":""},
	{"hora":11500,"liga":"ESP1","mitad":true,"mitadFavorito":true,"codigoWplay":19160,"local":"Osasuna","visitante":"Valencia","cuotaLocal":2.35,"empate":3.2,"cuotaVisitante":3.35,"cantidadDeApuestas":324,"cuotaCualquiera":1.5,"ambosAnotan":1.95,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.5,"favorito":""},
	{"hora":11500,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Racing Santander","visitante":"Elche","cuotaLocal":2.5,"empate":3.1,"cuotaVisitante":2.85,"cantidadDeApuestas":93,"cuotaCualquiera":1.4,"ambosAnotan":1.727,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":2.15,"favorito":""},
	{"hora":11500,"liga":"BCEA","mitad":false,"mitadFavorito":false,"codigoWplay":"19454","local":"Maracana CE","visitante":"Ceara CE","cuotaLocal":6,"empate":4,"cuotaVisitante":1.45,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.9,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Mitre Santiago Del Estero","visitante":"Nueva Chicago","cuotaLocal":2.05,"empate":2.75,"cuotaVisitante":3.95,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.55,"over":3.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Deportivo Madryn","visitante":"CA San Miguel","cuotaLocal":2.05,"empate":2.625,"cuotaVisitante":4.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.375,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Gimnasia y Tiro de Salta","visitante":"Ferro Carril Oeste","cuotaLocal":2.3,"empate":2.5,"cuotaVisitante":3.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.75,"ambosAnotan":2.45,"over":3.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Atletico Alvarado","visitante":"Quilmes AC","cuotaLocal":2.5,"empate":2.7,"cuotaVisitante":3,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":2.2,"over":2.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Estudiantes de Buenos Aires","visitante":"Gimnasia Y Esgrima Mendoza","cuotaLocal":2.2,"empate":2.75,"cuotaVisitante":3.55,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.35,"over":3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Aucas","visitante":"Vinotinto FC","cuotaLocal":2.05,"empate":3.25,"cuotaVisitante":3.6,"cantidadDeApuestas":93,"cuotaCualquiera":1.42,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":2.45,"favorito":""},
	{"hora":11530,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Rio Ave","visitante":"Sporting Braga","cuotaLocal":4.2,"empate":3.7,"cuotaVisitante":1.833,"cantidadDeApuestas":245,"cuotaCualquiera":1.35,"ambosAnotan":1.727,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.75,"favorito":""},
	{"hora":11530,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Juan Pablo II College","visitante":"FBC Melgar","cuotaLocal":4.75,"empate":3.3,"cuotaVisitante":1.7,"cantidadDeApuestas":42,"cuotaCualquiera":1.42,"ambosAnotan":1.909,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"CD Real San Andres (F)","visitante":"Independiente Santa Fe (F)","cuotaLocal":8,"empate":4.5,"cuotaVisitante":1.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.3,"ambosAnotan":1.833,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11550,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"Alianza FC (F)","visitante":"La Equidad (F)","cuotaLocal":2.3,"empate":3.1,"cuotaVisitante":2.9,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Cobresal","visitante":"Universidad de Chile","cuotaLocal":4.75,"empate":3.95,"cuotaVisitante":1.615,"cantidadDeApuestas":89,"cuotaCualquiera":1.285,"ambosAnotan":1.6,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.571,"favorito":""},
	{"hora":11600,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Real Cartagena","visitante":"Boca Juniors de Cali","cuotaLocal":1.363,"empate":4.333,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":2.1,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Cucuta Deportivo","visitante":"Real Soacha Cundinamarca","cuotaLocal":1.615,"empate":3.65,"cuotaVisitante":4.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.38,"ambosAnotan":1.9,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"BCAR","mitad":false,"mitadFavorito":true,"codigoWplay":"19456","local":"Fluminense RJ","visitante":"Volta Redonda RJ","cuotaLocal":1.4,"empate":4.5,"cuotaVisitante":7,"cantidadDeApuestas":84,"cuotaCualquiera":1.25,"ambosAnotan":1.666,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.45,"visitanteMitad":2.75,"favorito":""},
	{"hora":11600,"liga":"BCAT","mitad":false,"mitadFavorito":false,"codigoWplay":"19788","local":"Santa Catarina Clube SC","visitante":"Nautico Marcilio Dias SC","cuotaLocal":2.25,"empate":3,"cuotaVisitante":3.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2.1,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CD Maipu","visitante":"Club Almagro","cuotaLocal":1.8,"empate":3,"cuotaVisitante":4.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.3,"over":2.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"Internacional de Palmira (F)","visitante":"Once Caldas (W)","cuotaLocal":1.4,"empate":4.2,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.833,"over":1.7,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"BPAU1","mitad":false,"mitadFavorito":true,"codigoWplay":"19457","local":"Corinthians SP","visitante":"Mirassol SP","cuotaLocal":1.571,"empate":3.85,"cuotaVisitante":5.75,"cantidadDeApuestas":102,"cuotaCualquiera":1.38,"ambosAnotan":1.95,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":3,"favorito":""},
	{"hora":11630,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Zamora FC","visitante":"Carabobo FC","cuotaLocal":3.25,"empate":3,"cuotaVisitante":2.15,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":1.95,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Queretaro FC","visitante":"Puebla","cuotaLocal":2.35,"empate":3.45,"cuotaVisitante":3.1,"cantidadDeApuestas":238,"cuotaCualquiera":1.4,"ambosAnotan":1.75,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.25,"favorito":""},
	{"hora":11700,"liga":"BCAT","mitad":false,"mitadFavorito":false,"codigoWplay":"19788","local":"Criciuma SC","visitante":"Joinville SC","cuotaLocal":1.571,"empate":3.65,"cuotaVisitante":5.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":2.2,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Vancouver Whitecaps FC","visitante":"L.A. Galaxy","cuotaLocal":2,"empate":3.8,"cuotaVisitante":3.35,"cantidadDeApuestas":255,"cuotaCualquiera":1.25,"ambosAnotan":1.48,"over":1.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":2.05,"favorito":""},
	{"hora":11700,"liga":"BGAU","mitad":false,"mitadFavorito":false,"codigoWplay":"19458","local":"EC Pelotas RS","visitante":"Brasil de Pelotas RS","cuotaLocal":2.3,"empate":2.9,"cuotaVisitante":3.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.533,"ambosAnotan":2,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"BMAT","mitad":false,"mitadFavorito":false,"codigoWplay":"44888","local":"Uniao Rondonopolis MT","visitante":"Operario MT","cuotaLocal":2.45,"empate":3.2,"cuotaVisitante":2.65,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11715,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Velez Sarsfield","visitante":"Huracan","cuotaLocal":2.35,"empate":2.8,"cuotaVisitante":3.6,"cantidadDeApuestas":167,"cuotaCualquiera":1.615,"ambosAnotan":2.25,"over":2.875,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.85,"favorito":""},
	{"hora":11715,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Defensores de Belgrano","visitante":"Chacarita Juniors","cuotaLocal":2.3,"empate":2.75,"cuotaVisitante":3.35,"cantidadDeApuestas":38,"cuotaCualquiera":1.727,"ambosAnotan":2.45,"over":3.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Cerro Porteño","visitante":"Guarani Asuncion","cuotaLocal":1.727,"empate":3.35,"cuotaVisitante":4.75,"cantidadDeApuestas":89,"cuotaCualquiera":1.45,"ambosAnotan":2,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":3,"favorito":""},
	{"hora":11800,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"El Nacional","visitante":"Tecnico Universitario","cuotaLocal":2.35,"empate":3.25,"cuotaVisitante":3,"cantidadDeApuestas":93,"cuotaCualquiera":1.444,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.35,"favorito":""},
	{"hora":11800,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"San Martin de Tucuman","visitante":"CA Guemes","cuotaLocal":2.05,"empate":2.7,"cuotaVisitante":4.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.727,"ambosAnotan":2.45,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Universitario de Deportes","visitante":"Alianza Universidad","cuotaLocal":1.153,"empate":6,"cuotaVisitante":15,"cantidadDeApuestas":40,"cuotaCualquiera":1.25,"ambosAnotan":2.15,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11830,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Union La Calera","visitante":"OHiggins","cuotaLocal":2.05,"empate":3.1,"cuotaVisitante":3.5,"cantidadDeApuestas":80,"cuotaCualquiera":1.48,"ambosAnotan":1.9,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.625,"favorito":""},
	{"hora":11845,"liga":"BPAU1","mitad":false,"mitadFavorito":true,"codigoWplay":"19457","local":"Santos SP","visitante":"Bragantino SP","cuotaLocal":1.95,"empate":3.4,"cuotaVisitante":3.75,"cantidadDeApuestas":106,"cuotaCualquiera":1.42,"ambosAnotan":1.833,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.55,"favorito":""},
	{"hora":11900,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Atlas de Guadalajara","visitante":"Atletico San Luis","cuotaLocal":2.2,"empate":3.5,"cuotaVisitante":3.35,"cantidadDeApuestas":249,"cuotaCualquiera":1.4,"ambosAnotan":1.769,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.93,"visitanteMitad":2.3,"favorito":""},
	{"hora":11900,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Houston Dynamo","visitante":"Inter Miami CF","cuotaLocal":2.65,"empate":3.6,"cuotaVisitante":2.45,"cantidadDeApuestas":249,"cuotaCualquiera":1.3,"ambosAnotan":1.48,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":1.85,"favorito":""},
	{"hora":11900,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Monagas SC","visitante":"Yaracuyanos FC","cuotaLocal":1.5,"empate":3.9,"cuotaVisitante":5.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.833,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11915,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Deportivo Moron","visitante":"Gimnasia Jujuy","cuotaLocal":2.35,"empate":2.55,"cuotaVisitante":3.55,"cantidadDeApuestas":38,"cuotaCualquiera":1.8,"ambosAnotan":2.6,"over":3.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Banfield","visitante":"CA Independiente","cuotaLocal":3.2,"empate":2.9,"cuotaVisitante":2.45,"cantidadDeApuestas":166,"cuotaCualquiera":1.65,"ambosAnotan":2.3,"over":2.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.8,"visitanteMitad":2.4,"favorito":""},
	{"hora":11930,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Platense","visitante":"Defensa Y Justicia","cuotaLocal":2.45,"empate":2.875,"cuotaVisitante":3.3,"cantidadDeApuestas":161,"cuotaCualquiera":1.666,"ambosAnotan":2.375,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":2.875,"favorito":""},
	{"hora":11930,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Colon de Santa Fe","visitante":"Chaco For Ever","cuotaLocal":1.666,"empate":3.1,"cuotaVisitante":5.5,"cantidadDeApuestas":37,"cuotaCualquiera":1.615,"ambosAnotan":2.65,"over":3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11940,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Tigres FC","visitante":"Leones FC","cuotaLocal":1.95,"empate":3,"cuotaVisitante":3.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.444,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Atletico Morelia","visitante":"Venados FC","cuotaLocal":2.15,"empate":3.55,"cuotaVisitante":3.1,"cantidadDeApuestas":94,"cuotaCualquiera":1.333,"ambosAnotan":1.615,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.15,"favorito":""},
	{"hora":12105,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Monterrey","visitante":"Santos Laguna","cuotaLocal":1.25,"empate":6.25,"cuotaVisitante":13,"cantidadDeApuestas":257,"cuotaCualquiera":1.222,"ambosAnotan":1.8,"over":1.45,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.35,"visitanteMitad":3.1,"favorito":""},
]