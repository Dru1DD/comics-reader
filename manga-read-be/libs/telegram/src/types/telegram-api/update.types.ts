import {
  PrivateChat,
  ChannelChat,
  Chat,
  ChatMemberUpdated,
  ChatJoinRequest,
  ChatBoostUpdated,
  ChatBoostRemoved,
} from './chat.types';
import { User } from './user.types';
import { Message, MessageReactionCountUpdated, MessageReactionUpdated, Poll, PollAnswer } from './message.types';
import { BusinessConnection, BusinessMessagesDeleted } from './business.types';
import { CallbackQuery } from './callback-query.types';
import { ShippingQuery, PreCheckoutQuery, PaidMediaPurchased } from './payment.types';
import { ChosenInlineResult, InlineQuery } from './inline.types';

interface Private {
  chat: PrivateChat;
}

/** Internal type holding properties that message updates in channels share. */
interface Channel {
  chat: ChannelChat;
}

/** Internal type holding properties that message updates outside of channels share. */
interface NonChannel {
  chat: Exclude<Chat, ChannelChat>;
  from: User;
}
/** Internal type holding properties that updates about edited messages share. */
interface Edited {
  /** Date the message was last edited in Unix time */
  edit_date: number;
}

export interface TelegramUpdate {
  update_id: number;
  /** New incoming message of any kind - text, photo, sticker, etc. */
  message?: Message & NonChannel;
  /** New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
  edited_message?: Message & Edited & NonChannel;
  /** New incoming channel post of any kind - text, photo, sticker, etc. */
  channel_post?: Message & Channel;
  /** New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
  edited_channel_post?: Message & Edited & Channel;
  /** The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot */
  business_connection?: BusinessConnection;
  /** New message from a connected business account */
  business_message?: Message & Private;
  /** New version of a message from a connected business account */
  edited_business_message?: Message & Edited & Private;
  /** Messages were deleted from a connected business account */
  deleted_business_messages?: BusinessMessagesDeleted;
  /** A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify 'message_reaction' in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots. */
  message_reaction?: MessageReactionUpdated;
  /** Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify 'message_reaction_count' in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes. */
  message_reaction_count?: MessageReactionCountUpdated;
  /** New incoming inline query */
  inline_query?: InlineQuery;
  /** The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
  chosen_inline_result?: ChosenInlineResult;
  /** New incoming callback query */
  callback_query?: CallbackQuery;
  /** New incoming shipping query. Only for invoices with flexible price */
  shipping_query?: ShippingQuery;
  /** New incoming pre-checkout query. Contains full information about checkout */
  pre_checkout_query?: PreCheckoutQuery;
  /** New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot */
  poll?: Poll;
  /** A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
  poll_answer?: PollAnswer;
  /** The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
  my_chat_member?: ChatMemberUpdated;
  /** A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates. */
  chat_member?: ChatMemberUpdated;
  /** A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
  chat_join_request?: ChatJoinRequest;
  /** A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. */
  chat_boost?: ChatBoostUpdated;
  /** A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. */
  removed_chat_boost?: ChatBoostRemoved;
  /** A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat */
  purchased_paid_media?: PaidMediaPurchased;
}
