import { PhotoSize, Video } from '@libs/telegram/types';

/** Describes the paid media added to a message. */
export interface PaidMediaInfo {
  /** The number of Telegram Stars that must be paid to buy access to the media */
  star_count: number;
  /** Information about the paid media */
  paid_media: PaidMedia[];
}

/** This object describes paid media. Currently, it can be one of

 - PaidMediaPreview
 - PaidMediaPhoto
 - PaidMediaVideo */
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

/** The paid media isn't available before the payment. */
export interface PaidMediaPreview {
  /** Type of the paid media, always “preview” */
  type: 'preview';
  /** Media width as defined by the sender */
  width?: number;
  /** Media height as defined by the sender */
  height?: number;
  /** Duration of the media in seconds as defined by the sender */
  duration?: number;
}

/** The paid media is a photo. */
export interface PaidMediaPhoto {
  /** Type of the paid media, always “photo” */
  type: 'photo';
  /** The photo */
  photo: PhotoSize[];
}

/** The paid media is a video. */
export interface PaidMediaVideo {
  /** Type of the paid media, always “video” */
  type: 'video';
  /** The video */
  video: Video;
}
