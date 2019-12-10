import { IHasId } from './interfaces/interfaces';

export enum MeetingType {
   Vote,
   PerEvent
}

export class Meeting implements IHasId {
    id = 0;
    locationId = 0;
    meetTime = new Date();
    isFinalized = false;
    imageId: number = null;
    description = '';
    name = '';
    ownerId = 0;
    meetingType = MeetingType.Vote;
}
