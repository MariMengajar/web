export interface User {
  id: string;
  username: string;
  accountType: 'mentor' | 'mentee';
  status: 'active' | 'inactive' | 'suspended';
  biodata: string;
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  scheduledDate: Date;
  tags: string[];
  status: 'active' | 'inactive';
  mentorId: string;
  participantIds: string[];
}
