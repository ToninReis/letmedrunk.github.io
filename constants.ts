
import { Role, ShiftStatus, Team, WorkModality } from './types';

export const MASTER_USER_MASP = '13785704';
export const MASTER_USER_PASS = 'A11m10r19f89*';

export const ROLES_LIST: Role[] = [
  Role.ADMIN,
  Role.TECHNICIAN,
  Role.TEAM_LEAD,
  Role.COORDINATOR,
  Role.DIRECTOR,
];

export const SHIFT_STATUSES_LIST: ShiftStatus[] = [
  ShiftStatus.ACTIVE,
  ShiftStatus.VACATION_REGULAR,
  ShiftStatus.VACATION_PREMIUM,
  ShiftStatus.HOSPITAL_ESCORT,
  ShiftStatus.LTS,
  ShiftStatus.DAY_OFF,
  ShiftStatus.LICENSE,
  ShiftStatus.SHIFT_EXCHANGE,
];

export const TEAMS_LIST: Team[] = [
  Team.ALPHA,
  Team.BRAVO,
  Team.CHARLIE,
  Team.DELTA,
  Team.GETAP,
  Team.GIR,
  Team.DIARISTA,
];

export const MODALITIES_LIST: WorkModality[] = [
  WorkModality.M_24X1,
  WorkModality.M_4X1,
  WorkModality.M_5X2,
];

export const SERVICE_POSTS = [
  'Guarita 01',
  'Guarita 02',
  'Guarita 03',
  'Portaria (arma curta)',
  'Portaria (arma longa)',
  'Bloco A',
  'Bloco B',
  'Bloco C',
  'Intendência',
  'Inspetoria',
  'Almoxarifado',
  'Produção',
  'Penal',
  'Escolta hospitalar',
  'Movimentação',
  'Censura',
  'Escola',
];

export const APPOINTMENT_TYPES = [
  'MÉDICO',
  'ENFERMAGEM',
  'DENTISTA',
  'PSICOLOGO',
  'PEDAGOGO',
  'A. SOCIAL',
  'ATJ',
  'NSI',
  'DESPERTAR',
  'ESCOLTA SAUDE',
  'ESCOLTA JUDICIAL',
  'TRANSFERÊNCIA',
  'ESCOLTA ADM',
  'DEMANDAS DHU',
];

// Zipped list of Names and MASPs provided
export const PREDEFINED_STAFF = [
  { name: "ADAIR EMIDIO LOPES", masp: "1222911-8" },
  { name: "ADRIANO MOTA FURTADO", masp: "14461362" },
  { name: "ADRIANO PEREIRA GONÇALVES", masp: "1094203-5" },
  { name: "ALDO SALOTO MELO", masp: "1387005-0" },
  { name: "ANDRÉ ALVES PINTO", masp: "1173434-0" },
  { name: "ANDRÉ ZINATO DE PAIVA", masp: "1376823-9" },
  { name: "ANTÔNIO MAGNO REIS FERREIRA", masp: "1378570-4" },
  { name: "ÁTILA CARVALHO BOTELHO", masp: "1445349-2" },
  { name: "BRENO RIBEIRO DE OLIVEIRA", masp: "1447013-2" },
  { name: "BRUNO FARIA DE ASSIS RODRIGUES", masp: "1305048-9" },
  { name: "BRUNO GOMES DA SILVA", masp: "1444022-6" },
  { name: "CARLOS TEIXEIRA DE SIQUEIRA", masp: "1213262-7" },
  { name: "CHARLES DIOGO DE OLIVEIRA GOMES", masp: "1380387-9" },
  { name: "CLAYNER GOMES FERNANDES", masp: "0556192-3" },
  { name: "CLEITON FERNANDES DA SILVA", masp: "1374900-7" },
  { name: "CLERIO CLAYTON DE OLIVEIRA", masp: "1453131-3" },
  { name: "DALTON DA SILVA COELHO", masp: "1377612-5" },
  { name: "EDIRLEI GARCIA DE OLIVEIRA", masp: "1388789-8" },
  { name: "ERDILEI LEONARDO DOS SANTOS", masp: "1199320-1" },
  { name: "EVERTON DA SILVA SOARES", masp: "1439802-8" },
  { name: "FABIO JUNIOR PRETES FERREIRA", masp: "1442859-3" },
  { name: "FÁBIO ROBERTO MARTINS", masp: "1199322-7" },
  { name: "FELIPE AUGUSTO SILVA", masp: "1444838-0" },
  { name: "FRANCELINO DE FARIA PEREIRA", masp: "1381514-7" },
  { name: "FRANCIELE CHAVES VIANA", masp: "1532024-5" },
  { name: "FRITZ WAGNER DE ALMEIDA", masp: "1199329-2" },
  { name: "GEOVANI CLEMENTE TEIXEIRA JÚNIOR", masp: "1382958-5" },
  { name: "GLECIANO COSTA E SILVA FARIA", masp: "1199364-9" },
  { name: "GRAZIELLE APARECIDA DORNELAS", masp: "1595114-8" },
  { name: "GUARACY CEZÁRIO MOREIRA", masp: "1388521-5" },
  { name: "GUSTAVO AZEVEDO DE PAULA", masp: "1388444-0" },
  { name: "HERIVELTO DOS SANTOS CANÇADO", masp: "1451949-0" },
  { name: "ISMAEL LUIZ DE ARAÚJO NEVES DO VALLE", masp: "1448697-1" },
  { name: "IVÃ GONÇALVES DE OLIVEIRA", masp: "1445017-5" },
  { name: "JANIO TERRA MELO", masp: "1446156-0" },
  { name: "JARDEL FERREIRA TEIXEIRA", masp: "1381706-9" },
  { name: "JARDIR FRANÇA DA SILVA JÚNIOR", masp: "1446228-7" },
  { name: "JEAN CARLOS NEVES TEMPORIM", masp: "1222940-7" },
  { name: "JOÃO ALVES VIANA", masp: "1444502-7" },
  { name: "JOÃO BOSCO DE SOUZA FILHO", masp: "1378752-8" },
  { name: "JOÃO PAULO DE SOUZA", masp: "1442955-9" },
  { name: "JOSIANE KÁTIA DA SILVEIRA RIBEIRO", masp: "1096547-3" },
  { name: "JOSIAS RODRIGUES DOS SANTOS", masp: "1449574-1" },
  { name: "JULAERTE ALVES MAGESTE JÚNIOR", masp: "1199391-2" },
  { name: "JÚLIA PALOMA DA SILVA MIRANDA", masp: "1444041-6" },
  { name: "LEANDRO MAIA DA SILVA", masp: "1448621-1" },
  { name: "LENIMAR DO CARMO SANTOS MARCIANO", masp: "1376979-9" },
  { name: "LEONARDO JUNIOR DA SILVEIRA", masp: "1453610-6" },
  { name: "LEONARDO MARQUES MARTINS", masp: "1444172-9" },
  { name: "LEONARDO PEREIRA MOTA DE CASTRO", masp: "1389001-7" },
  { name: "LINDEMBERG ALMEIDA LISBOA", masp: "1222904-3" },
  { name: "LUCIMERI RODRIGUES DA ROCHA", masp: "894804-4" },
  { name: "LUIS OTAVIO GALDINO MOURA", masp: "1442960-9" },
  { name: "MARCELO ANDREZA DE CARVALHO", masp: "1213266-8" },
  { name: "MARCELO LOPES CARAPETO", masp: "1452556-2" },
  { name: "MARCO HENRIQUE VITURINO DA SILVA", masp: "1386658-7" },
  { name: "MARCO TÚLIO DUTRA SOUSA", masp: "1201026-0" },
  { name: "MARCOS GLADSTON DE OLIVEIRA", masp: "1199272-4" },
  { name: "MARIO DE SOUZA RODRIGUES", masp: "1444150-5" },
  { name: "MARIO SERGIO LAGE FILHO", masp: "1450444-3" },
  { name: "MICHEL FAUSTO DIAS", masp: "1199295-5" },
  { name: "NELSON MACIEL DA SILVA JUNIOR", masp: "1379855-8" },
  { name: "ODAIR JOSÉ RIBEIRO", masp: "1436169-5" },
  { name: "PABLO DE CASTRO MENDONÇA", masp: "1199299-7" },
  { name: "PAULO MOISES TIMOTEO PEREIRA", masp: "1444559-7" },
  { name: "RAFAEL GONÇALVES SILVA MOREIRA", masp: "1199302-9" },
  { name: "RAY LOPES PASSO XAVIER", masp: "1452464-9" },
  { name: "RENATO DE OLIVEIRA SANTOS", masp: "1374274-7" },
  { name: "RICARDO ALMEIDA SOUSA", masp: "1208306-9" },
  { name: "RODRIGO SOARES DE SOUZA CARNEIRO", masp: "1199325-0" },
  { name: "ROSANE CRISTINA DO NASCIMENTO MOL", masp: "1223710-3" },
  { name: "RUDOLPHY HUDSON ALMEIDA DE OLIVEIRA", masp: "1382846-2" },
  { name: "SALATIEL CLEMENTE DE OLIVEIRA MARTINS", masp: "1144501-2" },
  { name: "SEBASTIÃO LEANDRO ALMEIDA CUNHA TEIXEIRA", masp: "1452450-8" },
  { name: "SÉRGIO DE OLIVEIRA MONTEIRO", masp: "1228934-4" },
  { name: "SUDARIO NEVES DE SOUZA", masp: "1447526-3" },
  { name: "THAYANE DE LOURDES MOREIRA SOARES", masp: "1444601-7" },
  { name: "TIAGO ROCHA", masp: "1173552-9" },
  { name: "VALDECY SOARES MOL", masp: "1173904-2" },
  { name: "VICTOR HUGO CATA PRETA GOMES", masp: "1378555-5" },
  { name: "WEDER MENDES DA SILVA", masp: "1442211-7" },
  { name: "WELLINGTON DE ANDRADE JUSTINO", masp: "1214317-8" },
  { name: "WILBERTH FERREIRA DE ASSIS", masp: "1234102-0" },
  { name: "WILKERSON WILHA MOREIRA RODRIGUES", masp: "1437603-2" }
];

export const MOCK_OCR_DATA = `
GOVERNO DO ESTADO DE MINAS GERAIS
SECRETARIA DE ESTADO DE JUSTIÇA E SEGURANÇA PÚBLICA
Mapa carcerário - detalhe
Data/hora da emissão: 18/11/2025 11:38
Estabelecimento PRES-CRT - PRESÍDIO DE CARATINGA
Infopen Nome Localizaçao Tipo Regime Trânsito
745749 ADRIANO CASSIMIRO ROCHA ALA DO SEGURO - CELA 01 Definitivo Fechado
988245 CARLOS SÉRGIO DIMAS DA SILVA ALA DO SEGURO - CELA 01 Provisório Fechado
79669 JOEL CASSIMIRO DA SILVA NETO ALA DO SEGURO - CELA 01 Provisório Fechado
1018518 WELINGTON CUSTODIO GONZAGA ALA DO SEGURO - CELA 01 Definitivo Fechado
986329 WELITON BARBOSA DE FREITAS ALA DO SEGURO - CELA 01 Definitivo Fechado
363399 FABIANO DE AMORIM CAMILO ALA DO SEGURO - CELA 02 Provisório Fechado
1162083 FILIPE VICENTE SILVA AMBROZIO ALA DO SEGURO - CELA 02 Provisório Fechado
1169686 GILMAR DIAS FERREIRA ALA DO SEGURO - CELA 02 Provisório Fechado
1167095 MARIO CELIO GONCALVES JUNIOR ALA DO SEGURO - CELA 02 Provisório Fechado
487175 AGNALDO MARTINS DE PAIVA BLOCO A - CELA 01 Definitivo Semiaberto
381408 ALEX GOMES DO NASCIMENTO BLOCO A CELA 01 Provisório Fechado
531589 CHARLES HENRIQUE NEVES BLOCO A - CELA 01 Definitivo Fechado
1100604 CLEBERSON LUCIO BATISTA BLOCO A - CELA 01 Definitivo Fechado
85760 FABIANO NEVES DO NASCIMENTO BLOCO A - CELA 01 Definitivo Fechado
805116 JOÃO BATISTA DE PAULA BLOCO A - CELA 01 Provisório Fechado
736381 JULIO CESAR DORNELAS DE ASSIS BLOCO A - CELA 01 Definitivo Fechado
945320 LEANDRO ALVES SOARES BLOCO A - CELA 01 Definitivo Fechado
426304 LUIZ ANTONIOLI DE ASSIS BLOCO A - CELA 01 Provisório Fechado
1017033 PABLO JOSE TEIXEIRA DE OLIVEIRA BLOCO A - CELA 01 Definitivo Fechado
177035 ADALTO LUCIO DE ALMEIDA BLOCO A - CELA 02 Definitivo Fechado
561567 ADRIANO ASSIS BLOCO A - CELA 02 Definitivo Semiaberto
`;
