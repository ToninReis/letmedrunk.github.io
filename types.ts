
export enum Role {
  ADMIN = 'Administrador',
  TECHNICIAN = 'Técnico',
  TEAM_LEAD = 'Líder de Equipe',
  COORDINATOR = 'Coordenador',
  DIRECTOR = 'Diretor',
}

export enum ShiftStatus {
  ACTIVE = 'Ativo',
  VACATION_REGULAR = 'Férias Regulamentar',
  VACATION_PREMIUM = 'Férias Prêmio',
  HOSPITAL_ESCORT = 'Escolta Hospitalar',
  LTS = 'LTS',
  DAY_OFF = 'Folga',
  LICENSE = 'Licença',
  SHIFT_EXCHANGE = 'Troca de Plantão',
}

export enum Team {
  ALPHA = 'Alpha',
  BRAVO = 'Bravo',
  CHARLIE = 'Charlie',
  DELTA = 'Delta',
  GETAP = 'GETAP',
  GIR = 'GIR',
  DIARISTA = 'Diarista',
}

export enum WorkModality {
  M_24X1 = '24x1',
  M_4X1 = '4x1',
  M_5X2 = '5x2',
}

export interface User {
  masp: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: Role | null;
  isActive: boolean;
  wasJustActivated?: boolean;
  team?: Team;
  workModality?: WorkModality;
  assignedPost?: string;
}

export interface Inmate {
  infopen: string;
  nome: string;
  localizacao: string;
  tipo: string;
  regime: string;
  transito?: string;
}

export interface Appointment {
  id: string;
  inmateName: string;
  inmateInfopen: string;
  appointmentDate: string; // ISO string for date and time
  appointmentType: string;
  technicianMasp: string;
  status: 'Agendado' | 'Realizado';
}

export interface Shift {
  date: string; // YYYY-MM-DD
  serverMasp: string;
  servicePost: string;
  status: ShiftStatus;
  note?: string;
}

export interface TeamSchedule {
  date: string;
  teams: Team[];
}
