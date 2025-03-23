let PARTIDOS_OPTIMIZADOS = [
	{"hora":10800,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Kenia","visitante":"Gabón","cuotaLocal":2.55,"empate":2.9,"cuotaVisitante":3,"cantidadDeApuestas":91,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":7},
	{"hora":10800,"liga":"M-AFR","mitad":false,"mitadFavorito":true,"codigoWplay":452779,"local":"Eswatini","visitante":"Mauricio","cuotaLocal":1.833,"empate":3.2,"cuotaVisitante":4.75,"cantidadDeApuestas":90,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":10800,"liga":"I-A21","mitad":false,"mitadFavorito":false,"codigoWplay":19345,"local":"Wales Sub 21","visitante":"Suecia Sub 21","cuotaLocal":3.6,"empate":3.65,"cuotaVisitante":1.833,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10800,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Albion FC","visitante":"Uruguay Montevideo FC","cuotaLocal":2.55,"empate":2.875,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":9},
	{"hora":10800,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Levante","visitante":"CD Castellon","cuotaLocal":1.7,"empate":3.95,"cuotaVisitante":4.5,"cantidadDeApuestas":117,"cuotaCualquiera":1.3,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":10900,"liga":"BPAU2","mitad":false,"mitadFavorito":false,"codigoWplay":"890797","local":"EC Taubate SP","visitante":"Primavera SP","cuotaLocal":2.85,"empate":2.875,"cuotaVisitante":2.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":8},
	{"hora":10900,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Georgia","visitante":"Armenia","cuotaLocal":1.48,"empate":4.5,"cuotaVisitante":7,"cantidadDeApuestas":187,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11000,"liga":"ZA-CHIC","mitad":false,"mitadFavorito":false,"codigoWplay":19799,"local":"Deportes Concepcion","visitante":"Palestino","cuotaLocal":6,"empate":4.2,"cuotaVisitante":1.444,"cantidadDeApuestas":38,"cuotaCualquiera":1.3,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11015,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Sporting Gijon","visitante":"Albacete Balompie","cuotaLocal":1.85,"empate":3.3,"cuotaVisitante":4.333,"cantidadDeApuestas":117,"cuotaCualquiera":1.45,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":11015,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"SD Eibar","visitante":"SD Huesca","cuotaLocal":1.9,"empate":3.1,"cuotaVisitante":4.75,"cantidadDeApuestas":113,"cuotaCualquiera":1.6,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":4},
	{"hora":11200,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Escocia","visitante":"Grecia","cuotaLocal":2.55,"empate":3.25,"cuotaVisitante":2.9,"cantidadDeApuestas":193,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":3},
	{"hora":11200,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Hungria","visitante":"Turquia","cuotaLocal":2.55,"empate":3.6,"cuotaVisitante":2.7,"cantidadDeApuestas":197,"cuotaCualquiera":1.363,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Islandia","visitante":"Kosovo","cuotaLocal":2.45,"empate":3.45,"cuotaVisitante":2.9,"cantidadDeApuestas":192,"cuotaCualquiera":1.4,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Serbia","visitante":"Austria","cuotaLocal":2.9,"empate":3.3,"cuotaVisitante":2.55,"cantidadDeApuestas":195,"cuotaCualquiera":1.42,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":6},
	{"hora":11200,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Eslovenia","visitante":"Eslovaquia","cuotaLocal":2.625,"empate":2.95,"cuotaVisitante":3.1,"cantidadDeApuestas":191,"cuotaCualquiera":1.571,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":11230,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"CD Tenerife","visitante":"CF Cadiz","cuotaLocal":2.5,"empate":2.9,"cuotaVisitante":3.1,"cantidadDeApuestas":114,"cuotaCualquiera":1.6,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":5},
	{"hora":11230,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"Deportivo La Coruna","visitante":"Cartagena","cuotaLocal":1.285,"empate":5.25,"cuotaVisitante":11,"cantidadDeApuestas":116,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11245,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Chacarita Juniors","visitante":"Deportivo Moron","cuotaLocal":2.1,"empate":2.75,"cuotaVisitante":3.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.727,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":7},
	{"hora":11245,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Ferro Carril Oeste","visitante":"Club Atletico Alvarado","cuotaLocal":1.727,"empate":3.1,"cuotaVisitante":5,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":3},
	{"hora":11330,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"Progreso","visitante":"Atletico River Plate (Uru)","cuotaLocal":2.5,"empate":3,"cuotaVisitante":2.8,"cantidadDeApuestas":89,"cuotaCualquiera":1.45,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":4},
	{"hora":11330,"liga":"BCEA2","mitad":false,"mitadFavorito":false,"codigoWplay":"44929","local":"Caucaia","visitante":"Itapipoca CE","cuotaLocal":2.25,"empate":3.2,"cuotaVisitante":2.95,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":8},
	{"hora":11345,"liga":"BTOC","mitad":false,"mitadFavorito":false,"codigoWplay":"47826","local":"Capital FC TO","visitante":"Araguaina TO","cuotaLocal":2.55,"empate":3.2,"cuotaVisitante":2.55,"cantidadDeApuestas":3,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Racing de Cordoba","visitante":"Club Atletico Atlanta","cuotaLocal":2.15,"empate":2.75,"cuotaVisitante":3.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":1},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Defensores de Belgrano","visitante":"Talleres de Remedios de Escalada","cuotaLocal":1.769,"empate":3,"cuotaVisitante":4.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":4},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Almirante Brown","visitante":"Chaco For Ever","cuotaLocal":2.6,"empate":2.65,"cuotaVisitante":2.95,"cantidadDeApuestas":37,"cuotaCualquiera":1.769,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":9},
	{"hora":11400,"liga":"BBAI","mitad":false,"mitadFavorito":false,"codigoWplay":"19791","local":"EC Vitoria","visitante":"Bahia BA","cuotaLocal":2.55,"empate":2.875,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":11400,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"CS 2 de Mayo","visitante":"Cerro Porteño","cuotaLocal":3.9,"empate":3,"cuotaVisitante":2,"cantidadDeApuestas":88,"cuotaCualquiera":1.533,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":8},
	{"hora":11400,"liga":"BCAP","mitad":false,"mitadFavorito":false,"codigoWplay":"44910","local":"Vitoria ES","visitante":"Porto Vitoria ES","cuotaLocal":1.85,"empate":3.2,"cuotaVisitante":4,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":9},
	{"hora":11430,"liga":"BAMA","mitad":false,"mitadFavorito":false,"codigoWplay":32578,"local":"Manauara EC AM","visitante":"Princesa do Solimoes","cuotaLocal":1.727,"empate":3.4,"cuotaVisitante":4.5,"cantidadDeApuestas":3,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Bélgica","visitante":"Ucrania","cuotaLocal":1.48,"empate":4.5,"cuotaVisitante":6.5,"cantidadDeApuestas":195,"cuotaCualquiera":1.3,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Francia","visitante":"Croacia","cuotaLocal":1.4,"empate":5,"cuotaVisitante":7.5,"cantidadDeApuestas":197,"cuotaCualquiera":1.3,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Alemania","visitante":"Italia","cuotaLocal":1.8,"empate":3.95,"cuotaVisitante":4.333,"cantidadDeApuestas":197,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Irlanda","visitante":"Bulgaria","cuotaLocal":1.571,"empate":4,"cuotaVisitante":6.5,"cantidadDeApuestas":190,"cuotaCualquiera":1.4,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"Portugal","visitante":"Dinamarca","cuotaLocal":1.6,"empate":4.2,"cuotaVisitante":5.5,"cantidadDeApuestas":194,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11445,"liga":"UNAT","mitad":false,"mitadFavorito":true,"codigoWplay":556801,"local":"España","visitante":"Países Bajos","cuotaLocal":1.7,"empate":4,"cuotaVisitante":5,"cantidadDeApuestas":196,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARGC","mitad":false,"mitadFavorito":true,"codigoWplay":19572,"local":"Racing Club","visitante":"Santamarina Tandil","cuotaLocal":1.181,"empate":5.75,"cuotaVisitante":13,"cantidadDeApuestas":37,"cuotaCualquiera":1.25,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CA Guemes","visitante":"CD Maipu","cuotaLocal":2.05,"empate":2.9,"cuotaVisitante":3.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":1},
	{"hora":11500,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"Fortaleza FC (F)","visitante":"Deportivo Cali (F)","cuotaLocal":15,"empate":6.25,"cuotaVisitante":1.142,"cantidadDeApuestas":37,"cuotaCualquiera":1.25,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"CD Los Chankas","visitante":"Club Sportivo Cienciano","cuotaLocal":2.75,"empate":3.35,"cuotaVisitante":2.3,"cantidadDeApuestas":38,"cuotaCualquiera":1.35,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Austin FC","visitante":"San Diego FC","cuotaLocal":2.05,"empate":3.6,"cuotaVisitante":3.7,"cantidadDeApuestas":249,"cuotaCualquiera":1.363,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"BCEA2","mitad":false,"mitadFavorito":false,"codigoWplay":"44929","local":"Guarani de Juazeiro CE","visitante":"Icasa CE","cuotaLocal":4.5,"empate":3.45,"cuotaVisitante":1.727,"cantidadDeApuestas":38,"cuotaCualquiera":1.38,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"BGOI","mitad":false,"mitadFavorito":false,"codigoWplay":"19789","local":"Anapolis GO","visitante":"Vila Nova FC","cuotaLocal":3.1,"empate":2.8,"cuotaVisitante":2.35,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":8},
	{"hora":11500,"liga":"BPARAI","mitad":false,"mitadFavorito":false,"codigoWplay":"28509","local":"Sousa PB","visitante":"Botafogo PB","cuotaLocal":2.15,"empate":3.1,"cuotaVisitante":3.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":4},
	{"hora":11530,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Alianza FC","visitante":"Atletico Bucaramanga","cuotaLocal":2.55,"empate":2.95,"cuotaVisitante":3.25,"cantidadDeApuestas":169,"cuotaCualquiera":1.6,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":3},
	{"hora":11545,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"CA Cerro","visitante":"Danubio","cuotaLocal":3.2,"empate":2.9,"cuotaVisitante":2.3,"cantidadDeApuestas":88,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":5},
	{"hora":11600,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Patronato Parana","visitante":"Deportivo Madryn","cuotaLocal":2.375,"empate":2.8,"cuotaVisitante":3.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.666,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":11600,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CA Central Norte Salta","visitante":"Mitre Santiago Del Estero","cuotaLocal":2.3,"empate":2.7,"cuotaVisitante":3.4,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":4},
	{"hora":11600,"liga":"BPAU2","mitad":false,"mitadFavorito":false,"codigoWplay":"890797","local":"Ituano SP","visitante":"Capivariano SP","cuotaLocal":2.05,"empate":3.1,"cuotaVisitante":3.45,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":9},
	{"hora":11600,"liga":"BSMAT","mitad":false,"mitadFavorito":false,"codigoWplay":"330774","local":"Ivinhema MS","visitante":"Aguia Negra MS","cuotaLocal":1.833,"empate":3.3,"cuotaVisitante":4,"cantidadDeApuestas":3,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Cucuta Deportivo","visitante":"Tigres FC","cuotaLocal":1.48,"empate":3.8,"cuotaVisitante":6.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-CHIC","mitad":false,"mitadFavorito":false,"codigoWplay":19799,"local":"Magallanes Santiago","visitante":"Deportes Recoleta","cuotaLocal":1.727,"empate":3.4,"cuotaVisitante":4.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.38,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-CHIC","mitad":false,"mitadFavorito":false,"codigoWplay":19799,"local":"Union San Felipe","visitante":"Colo Colo","cuotaLocal":6.5,"empate":4.2,"cuotaVisitante":1.42,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-CHIC","mitad":false,"mitadFavorito":false,"codigoWplay":19799,"local":"Cobreloa","visitante":"Deportes Iquique","cuotaLocal":2.7,"empate":3.3,"cuotaVisitante":2.35,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-CHIC","mitad":false,"mitadFavorito":false,"codigoWplay":19799,"local":"Coquimbo","visitante":"Cobresal","cuotaLocal":1.7,"empate":3.45,"cuotaVisitante":4.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.38,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"CNAT","mitad":false,"mitadFavorito":true,"codigoWplay":601779,"local":"Canadá","visitante":"EE.UU","cuotaLocal":3.65,"empate":3.6,"cuotaVisitante":2.05,"cantidadDeApuestas":164,"cuotaCualquiera":1.38,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11715,"liga":"ZA-ARGC","mitad":false,"mitadFavorito":true,"codigoWplay":19572,"local":"San Lorenzo","visitante":"Sportivo Las Parejas","cuotaLocal":1.25,"empate":4.5,"cuotaVisitante":11,"cantidadDeApuestas":37,"cuotaCualquiera":1.4,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Los Andes","visitante":"Tristan Suarez","cuotaLocal":2.45,"empate":2.625,"cuotaVisitante":3.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":3},
	{"hora":11730,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sportivo Luqueno","visitante":"Guarani Asuncion","cuotaLocal":2.75,"empate":3,"cuotaVisitante":2.55,"cantidadDeApuestas":89,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":0},
	{"hora":11745,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Atlético Nacional","visitante":"Independiente Medellin","cuotaLocal":2.25,"empate":3.2,"cuotaVisitante":3.6,"cantidadDeApuestas":165,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":1},
	{"hora":11800,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"San Martin de Tucuman","visitante":"Gimnasia y Tiro de Salta","cuotaLocal":1.95,"empate":2.75,"cuotaVisitante":4.333,"cantidadDeApuestas":37,"cuotaCualquiera":1.769,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"SI","random":8},
	{"hora":11800,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"Montevideo Wanderers","visitante":"Miramar Misiones","cuotaLocal":2.1,"empate":3,"cuotaVisitante":3.5,"cantidadDeApuestas":88,"cuotaCualquiera":1.5,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":7},
	{"hora":11930,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Gimnasia Y Esgrima Mendoza","visitante":"Colon de Santa Fe","cuotaLocal":2.15,"empate":2.8,"cuotaVisitante":3.65,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":1},
	{"hora":12000,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Aguilas Doradas Rionegro","visitante":"Envigado FC","cuotaLocal":1.6,"empate":3.9,"cuotaVisitante":6.5,"cantidadDeApuestas":163,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":"","apostar":"NO","random":2},
	{"hora":12030,"liga":"CNAT","mitad":false,"mitadFavorito":true,"codigoWplay":601779,"local":"Mexico","visitante":"Panama","cuotaLocal":1.5,"empate":4.2,"cuotaVisitante":7.5,"cantidadDeApuestas":185,"cuotaCualquiera":1.4,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
]