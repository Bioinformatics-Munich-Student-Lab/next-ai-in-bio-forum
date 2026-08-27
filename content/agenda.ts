export interface AgendaItem {
  time: string;
  timeRange?: string;
  title: string;
  type: 'session' | 'break' | 'meal' | 'networking';
  speaker?: string;
}

export const AGENDA: AgendaItem[] = [
  {
    time: '09:00',
    title: 'Check-in / Entry',
    type: 'session',
  },
  {
    time: '09:30',
    timeRange: '09:30 – 10:00',
    title: 'Opening + Keynote',
    type: 'session',
    speaker: 'TBD',
  },
  {
    time: '10:00',
    timeRange: '10:00 – 10:50',
    title: 'Invasive Neural Decoding & Connectomics',
    type: 'session',
    speaker: 'Dr. Timon Merk',
  },
  {
    time: '10:50',
    title: 'Short break',
    type: 'break',
  },
  {
    time: '11:00',
    timeRange: '11:00 – 11:50',
    title: 'Brain–Computer Interfaces',
    type: 'session',
    speaker: 'Dr. Alexander Craik',
  },
  {
    time: '11:50',
    title: 'Short break',
    type: 'break',
  },
  {
    time: '12:00',
    timeRange: '12:00 – 12:50',
    title: 'Lunch',
    type: 'meal',
  },
  {
    time: '12:50',
    timeRange: '12:50 – 13:00',
    title: 'Afternoon opening',
    type: 'session',
  },
  {
    time: '13:00',
    timeRange: '13:00 – 13:50',
    title: 'AI Co-scientist in Practice',
    type: 'session',
    speaker: 'Airat A. Valiev',
  },
  {
    time: '13:50',
    title: 'Short break',
    type: 'break',
  },
  {
    time: '14:00',
    timeRange: '14:00 – 14:50',
    title: 'Clinical Trial Outcome Prediction',
    type: 'session',
    speaker: 'TBD',
  },
  {
    time: '14:50',
    title: 'Short break',
    type: 'break',
  },
  {
    time: '15:00',
    timeRange: '15:00 – 15:30',
    title: 'Panel + Q&A',
    type: 'session',
  },
  {
    time: '15:30',
    title: 'Closing',
    type: 'session',
  },
  {
    time: '15:40',
    title: 'Open end: Networking (Immatrikulationshalle)',
    type: 'networking',
  },
];
