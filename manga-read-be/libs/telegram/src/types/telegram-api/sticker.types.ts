import { PhotoSize } from './photo.types';
import { MaskPosition } from './mask.types';

/** This object represents a sticker. */
export interface Sticker {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
  type: 'regular' | 'mask' | 'custom_emoji';
  /** Sticker width */
  width: number;
  /** Sticker height */
  height: number;
  /** True, if the sticker is animated */
  is_animated: boolean;
  /** True, if the sticker is a video sticker */
  is_video: boolean;
  /** Sticker thumbnail in the .WEBP or .JPG format */
  thumbnail?: PhotoSize;
  /** Emoji associated with the sticker */
  emoji?: string;
  /** Name of the sticker set to which the sticker belongs */
  set_name?: string;
  /** For premium regular stickers, premium animation for the sticker */
  premium_animation?: File;
  /** For mask stickers, the position where the mask should be placed */
  mask_position?: MaskPosition;
  /** For custom emoji stickers, unique identifier of the custom emoji */
  custom_emoji_id?: string;
  /** File size in bytes */
  file_size?: number;
}

/** This object represents a sticker set. */
export interface StickerSet {
  /** Sticker set name */
  name: string;
  /** Sticker set title */
  title: string;
  /** Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” */
  sticker_type: 'regular' | 'mask' | 'custom_emoji';
  /** List of all set stickers */
  stickers: Sticker[];
  /** Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
  thumbnail?: PhotoSize;
}
