import { DocumentReference, Timestamp } from 'firebase/firestore';

export interface WithId<T> {
  id: string;
  data: T;
}

export interface User {
  username: string;
  accountType: 'mentor' | 'mentee';
  status: 'active' | 'inactive' | 'suspended';
  biodata: string;
}

export interface Subject {
  slug: string;
  title: string;
  description: string;
  scheduledDate: Timestamp;
  tags: string[];
  status: 'active' | 'inactive';
  mentorId: DocumentReference;
  participantIds: DocumentReference[];
}
