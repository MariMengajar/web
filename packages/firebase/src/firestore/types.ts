import { DocumentReference, Timestamp } from 'firebase/firestore';

export type WithId<T> = T & { id: string };

export type User = {
  username: string;
  accountType: 'mentor' | 'mentee';
  status: 'active' | 'inactive' | 'suspended';
  biodata: string;
};

export type Subject = {
  slug: string;
  title: string;
  description: string;
  scheduledDate: Timestamp;
  tags: string[];
  status: 'active' | 'inactive';
  mentorId: DocumentReference;
  participantIds: DocumentReference[];
};
