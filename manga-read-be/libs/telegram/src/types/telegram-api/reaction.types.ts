/** This object describes the type of a reaction. Currently, it can be one of

 - ReactionTypeEmoji
 - ReactionTypeCustomEmoji
 - ReactionTypePaid */
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

/** The reaction is based on an emoji. */
export interface ReactionTypeEmoji {
  /** Type of the reaction, always “emoji” */
  type: 'emoji';
  /** Reaction emoji. Currently, it can be one of '👍', '👎', '❤', '🔥', '🥰', '👏', '😁', '🤔', '🤯', '😱', '🤬', '😢', '🎉', '🤩', '🤮', '💩', '🙏', '👌', '🕊', '🤡', '🥱', '🥴', '😍', '🐳', '❤‍🔥', '🌚', '🌭', '💯', '🤣', '⚡', '🍌', '🏆', '💔', '🤨', '😐', '🍓', '🍾', '💋', '🖕', '😈', '😴', '😭', '🤓', '👻', '👨‍💻', '👀', '🎃', '🙈', '😇', '😨', '🤝', '✍', '🤗', '🫡', '🎅', '🎄', '☃', '💅', '🤪', '🗿', '🆒', '💘', '🙉', '🦄', '😘', '💊', '🙊', '😎', '👾', '🤷‍♂', '🤷', '🤷‍♀', '😡' */
  emoji:
    | '👍'
    | '👎'
    | '❤'
    | '🔥'
    | '🥰'
    | '👏'
    | '😁'
    | '🤔'
    | '🤯'
    | '😱'
    | '🤬'
    | '😢'
    | '🎉'
    | '🤩'
    | '🤮'
    | '💩'
    | '🙏'
    | '👌'
    | '🕊'
    | '🤡'
    | '🥱'
    | '🥴'
    | '😍'
    | '🐳'
    | '❤‍🔥'
    | '🌚'
    | '🌭'
    | '💯'
    | '🤣'
    | '⚡'
    | '🍌'
    | '🏆'
    | '💔'
    | '🤨'
    | '😐'
    | '🍓'
    | '🍾'
    | '💋'
    | '🖕'
    | '😈'
    | '😴'
    | '😭'
    | '🤓'
    | '👻'
    | '👨‍💻'
    | '👀'
    | '🎃'
    | '🙈'
    | '😇'
    | '😨'
    | '🤝'
    | '✍'
    | '🤗'
    | '🫡'
    | '🎅'
    | '🎄'
    | '☃'
    | '💅'
    | '🤪'
    | '🗿'
    | '🆒'
    | '💘'
    | '🙉'
    | '🦄'
    | '😘'
    | '💊'
    | '🙊'
    | '😎'
    | '👾'
    | '🤷‍♂'
    | '🤷'
    | '🤷‍♀'
    | '😡';
}

/** The reaction is based on a custom emoji. */
export interface ReactionTypeCustomEmoji {
  /** Type of the reaction, always “custom_emoji” */
  type: 'custom_emoji';
  /** Custom emoji identifier */
  custom_emoji_id: string;
}

/** The reaction is paid. */
export interface ReactionTypePaid {
  /** Type of the reaction, always “paid” */
  type: 'paid';
}

/** Represents a reaction added to a message along with the number of times it was added. */
export interface ReactionCount {
  /** Type of the reaction */
  type: ReactionType;
  /** Number of times the reaction was added */
  total_count: number;
}
