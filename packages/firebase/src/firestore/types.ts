import { DocumentReference } from 'firebase/firestore';

export interface User {
  id: string;
  username: string;
  accountType: 'mentor' | 'mentee';
  status: 'active' | 'inactive' | 'suspended';
  biodata: string;
}

export interface Subject {
  id: string;
  slug: string;
  title: string;
  description: string;
  scheduledDate: Date;
  tags: string[];
  status: 'active' | 'inactive';
  mentorId: DocumentReference;
  participantIds: DocumentReference[];
}
