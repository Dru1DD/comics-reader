/** This object represents one size of a photo or a file / sticker thumbnail. */
export interface PhotoSize {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** File size in bytes */
  file_size?: number;
}
