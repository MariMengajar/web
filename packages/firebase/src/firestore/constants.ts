// =================
// Collection names
// =================
const USERS_COLLECTION = 'users';
const SUBJECTS_COLLECTION = 'subjects';

export { USERS_COLLECTION, SUBJECTS_COLLECTION };

// =================
// Key names
// =================
// User
// -----------------
const USER_KEY = {
  ID: 'id',
  ACCOUNTTYPE: 'accountType',
  BIODATA: 'biodata',
  STATUS: 'active',
  USERNAME: 'username',
};

export { USER_KEY };

// Subject
// -----------------
const SUBJECT_KEY = {
  ID: 'id',
  DESCRIPTION: 'description',
  MENTORREF: 'mentorRef',
  PARTICIPANTREFS: 'participantRefs',
  SCHEDULEDDATE: 'scheduledDate',
  SLUG: 'slug',
  STATUS: 'active',
  TAGS: 'tags',
  TITLE: 'title',
};

export { SUBJECT_KEY };
