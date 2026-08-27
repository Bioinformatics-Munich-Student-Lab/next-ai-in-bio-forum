export type SpeakerStatus = 'revealed' | 'tbd';

export interface Speaker {
  id: string;
  topic: string;
  topicNumber: number;
  status: SpeakerStatus;
  name?: string;
  affiliation?: string;
  title?: string;
  bio?: string;
  talkTime?: string;
  photoUrl?: string;
}

export const SPEAKERS: Speaker[] = [
  {
    id: 'opening',
    topic: 'Opening',
    topicNumber: 0,
    status: 'tbd',
    talkTime: '09:30 – 10:00',
  },
  {
    id: 'invasive-neural-decoding',
    topic: 'Invasive Neural Decoding & Connectomics',
    topicNumber: 1,
    status: 'revealed',
    name: 'Dr. Timon Merk',
    affiliation: 'Baylor College of Medicine, Houston',
    title: 'Postdoctoral Researcher',
    bio: 'Timon works at the intersection of computational neuroscience, invasive neurotechnology, and clinical neuromodulation. His research explores how machine learning can help identify clinically relevant brain states and networks, with the goal of making neuromodulation therapies more adaptive and personalized. His talk will explore how invasive neural decoding and connectomics could shape the future of personalized treatment for movement disorders, epilepsy, and psychiatric disorders.',
    talkTime: '10:00 – 11:00',
    photoUrl: '/speakers/timon-merk.jpg',
  },
  {
    id: 'brain-computer-interfaces',
    topic: 'Brain-Computer Interfaces',
    topicNumber: 2,
    status: 'revealed',
    name: 'Dr. Alexander Craik',
    affiliation: 'Munich Institute of Robotics and Machine Intelligence (TUM MIRMI)',
    title: 'Postdoctoral Researcher',
    bio: "Alexander works on the intersection of neural decoding, real-time system development, and brain-computer interfaces. His research bridges non-invasive EEG-based decoding, invasive neural interfaces, and robotic rehabilitation systems, with a focus on building BCI systems that can operate in real time. His talk will explore how non-invasive EEG and invasive MEA-based decoding compare in practice, including their strengths, limitations, and applications. He will also share results from his PhD work on speech decoding and EEG-enabled robotic stroke rehabilitation, as well as some current works from TUM Klinikum Rechts der Isar.",
    talkTime: '11:00 – 12:00',
    photoUrl: '/speakers/alexander-craik.jpg',
  },
  {
    id: 'ai-co-scientists',
    topic: 'AI Co-scientists in Practice',
    topicNumber: 3,
    status: 'revealed',
    name: 'Airat Valiev',
    affiliation: 'SciWay',
    title: 'Co-founder & CTO',
    bio: "Airat works at the intersection of NLP, scientific knowledge infrastructure, and clinical / pharma AI. He leads the AI/NLP engineering of VOKA Pharma, and has built clinical NLP oncology systems at BostonGene, and drug-discovery models at Insilico Medicine. He is also building a memory layer for research teams' own work at SciWay, helping labs connect knowledge scattered across electronic lab notebooks (ELNs), shared drives, result tables, and meeting notes. His talk will explore how AI systems can be practically used as co-scientist at the lab with SciWay memory engine architecture, and demo on public scientific QA dataset.",
    talkTime: '13:00 – 14:00',
    photoUrl: '/speakers/airat-valiev.jpg',
  },
  {
    id: 'clinical-trial-prediction',
    topic: 'Clinical Trial Outcome Prediction',
    topicNumber: 4,
    status: 'tbd',
    talkTime: '14:00 – 15:00',
  },
];
