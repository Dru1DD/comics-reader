import { Chat, ChatLocation, ChatPermissions, ChatPhoto } from './chat.types';
import { BusinessIntro, BusinessLocation, BusinessOpeningHours } from './business.types';
import { ReactionType } from './reaction.types';
import { Birthdate } from './user.types';
import { Message, MessageId } from './message.types';

/** Internal type for private chats */
interface PrivateChatFullInfo {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'private';
  /** Title, for supergroups, channels and group chats */
  title?: undefined;
  /**  Username, for private chats, supergroups and channels if available */
  username?: string;
  /**  First name of the other party in a private chat */
  first_name: string;
  /**  Last name of the other party in a private chat */
  last_name?: string;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
  /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
  accent_color_id: number;
  /** The maximum number of reactions that can be set on a message in the chat */
  max_reaction_count: number;
  /** Chat photo */
  photo?: ChatPhoto;
  /** If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
  active_usernames?: string[];
  /** For private chats, the date of birth of the user */
  birthdate?: Birthdate;
  /** For private chats with business accounts, the intro of the business */
  business_intro?: BusinessIntro;
  /** For private chats with business accounts, the location of the business */
  business_location?: BusinessLocation;
  /** For private chats with business accounts, the opening hours of the business */
  business_opening_hours?: BusinessOpeningHours;
  /** For private chats, the personal channel of the user */
  personal_chat?: Chat;
  /** List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
  available_reactions?: ReactionType[];
  /** Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
  background_custom_emoji_id?: string;
  /** Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
  profile_accent_color_id?: number;
  /** Custom emoji identifier of the emoji chosen by the chat for its profile background */
  profile_background_custom_emoji_id?: string;
  /**  Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
  emoji_status_custom_emoji_id?: string;
  /** Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
  emoji_status_expiration_date?: number;
  /** Bio of the other party in a private chat */
  bio?: string;
  /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
  has_private_forwards?: true;
  /** True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
  has_restricted_voice_and_video_messages?: true;
  /** True, if users need to join the supergroup before they can send messages */
  join_to_send_messages?: undefined;
  /** True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
  join_by_request?: undefined;
  /** Description, for groups, supergroups and channel chats */
  description?: undefined;
  /**  Primary invite link, for groups, supergroups and channel chats */
  invite_link?: undefined;
  /** The most recent pinned message (by sending date) */
  pinned_message?: MessageId;
  /** Default chat member permissions, for groups and supergroups */
  permissions?: undefined;
  /** For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
  slow_mode_delay?: undefined;
  /**  For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
  unrestrict_boost_count?: undefined;
  /**  The time after which all messages sent to the chat will be automatically deleted; in seconds */
  message_auto_delete_time?: number;
  /** True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
  has_aggressive_anti_spam_enabled?: undefined;
  /** True, if non-administrators can only get the list of bots and administrators in the chat */
  has_hidden_members?: undefined;
  /** True, if messages from the chat can't be forwarded to other chats */
  has_protected_content?: true;
  /** True, if new chat members will have access to old messages; available only to chat administrators */
  has_visible_history?: undefined;
  /** For supergroups, name of the group sticker set */
  sticker_set_name?: undefined;
  /** True, if the bot can change the group sticker set */
  can_set_sticker_set?: undefined;
  /** For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
  custom_emoji_sticker_set_name?: undefined;
  /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. */
  linked_chat_id?: undefined;
  /** For supergroups, the location to which the supergroup is connected */
  location?: undefined;
  /** True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
  can_send_paid_media?: undefined;
}

/** Internal type for group chats */
interface GroupChatFullInfo {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'group';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /**  Username, for private chats, supergroups and channels if available */
  username?: undefined;
  /**  First name of the other party in a private chat */
  first_name?: undefined;
  /**  Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
  /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
  accent_color_id: number;
  /** The maximum number of reactions that can be set on a message in the chat */
  max_reaction_count: number;
  /** Chat photo */
  photo?: ChatPhoto;
  /** If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
  active_usernames?: undefined;
  /** For private chats, the date of birth of the user */
  birthdate?: undefined;
  /** For private chats with business accounts, the intro of the business */
  business_intro?: undefined;
  /** For private chats with business accounts, the location of the business */
  business_location?: undefined;
  /** For private chats with business accounts, the opening hours of the business */
  business_opening_hours?: undefined;
  /** For private chats, the personal channel of the user */
  personal_chat?: undefined;
  /** List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
  available_reactions?: ReactionType[];
  /** Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
  background_custom_emoji_id?: string;
  /** Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
  profile_accent_color_id?: number;
  /** Custom emoji identifier of the emoji chosen by the chat for its profile background */
  profile_background_custom_emoji_id?: string;
  /**  Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
  emoji_status_custom_emoji_id?: string;
  /** Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
  emoji_status_expiration_date?: number;
  /** Bio of the other party in a private chat */
  bio?: undefined;
  /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
  has_private_forwards?: undefined;
  /** True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
  has_restricted_voice_and_video_messages?: undefined;
  /** True, if users need to join the supergroup before they can send messages */
  join_to_send_messages?: undefined;
  /** True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
  join_by_request?: undefined;
  /** Description, for groups, supergroups and channel chats */
  description?: string;
  /**  Primary invite link, for groups, supergroups and channel chats */
  invite_link?: string;
  /** The most recent pinned message (by sending date) */
  pinned_message?: Message;
  /** Default chat member permissions, for groups and supergroups */
  permissions?: ChatPermissions;
  /** For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
  slow_mode_delay?: undefined;
  /**  For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
  unrestrict_boost_count?: undefined;
  /**  The time after which all messages sent to the chat will be automatically deleted; in seconds */
  message_auto_delete_time?: number;
  /** True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
  has_aggressive_anti_spam_enabled?: undefined;
  /** True, if non-administrators can only get the list of bots and administrators in the chat */
  has_hidden_members?: true;
  /** True, if messages from the chat can't be forwarded to other chats */
  has_protected_content?: true;
  /** True, if new chat members will have access to old messages; available only to chat administrators */
  has_visible_history?: true;
  /** For supergroups, name of the group sticker set */
  sticker_set_name?: undefined;
  /** True, if the bot can change the group sticker set */
  can_set_sticker_set?: true;
  /** For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
  custom_emoji_sticker_set_name?: undefined;
  /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. */
  linked_chat_id?: undefined;
  /** For supergroups, the location to which the supergroup is connected */
  location?: undefined;
  /** True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
  can_send_paid_media?: undefined;
}

/** Internal type for supergroup chats */
interface SupergroupChatFullInfo {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'supergroup';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /**  Username, for private chats, supergroups and channels if available */
  username?: string;
  /**  First name of the other party in a private chat */
  first_name?: undefined;
  /**  Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: true;
  /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
  accent_color_id: number;
  /** The maximum number of reactions that can be set on a message in the chat */
  max_reaction_count: number;
  /** Chat photo */
  photo?: ChatPhoto;
  /** If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
  active_usernames?: string[];
  /** For private chats, the date of birth of the user */
  birthdate?: undefined;
  /** For private chats with business accounts, the intro of the business */
  business_intro?: undefined;
  /** For private chats with business accounts, the location of the business */
  business_location?: undefined;
  /** For private chats with business accounts, the opening hours of the business */
  business_opening_hours?: undefined;
  /** For private chats, the personal channel of the user */
  personal_chat?: undefined;
  /** List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
  available_reactions?: ReactionType[];
  /** Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
  background_custom_emoji_id?: string;
  /** Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
  profile_accent_color_id?: number;
  /** Custom emoji identifier of the emoji chosen by the chat for its profile background */
  profile_background_custom_emoji_id?: string;
  /**  Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
  emoji_status_custom_emoji_id?: string;
  /** Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
  emoji_status_expiration_date?: number;
  /** Bio of the other party in a private chat */
  bio?: string;
  /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
  has_private_forwards?: undefined;
  /** True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
  has_restricted_voice_and_video_messages?: undefined;
  /** True, if users need to join the supergroup before they can send messages */
  join_to_send_messages?: true;
  /** True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
  join_by_request?: true;
  /** Description, for groups, supergroups and channel chats */
  description?: string;
  /**  Primary invite link, for groups, supergroups and channel chats */
  invite_link?: string;
  /** The most recent pinned message (by sending date) */
  pinned_message?: Message;
  /** Default chat member permissions, for groups and supergroups */
  permissions?: ChatPermissions;
  /** For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
  slow_mode_delay?: number;
  /**  For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
  unrestrict_boost_count?: number;
  /**  The time after which all messages sent to the chat will be automatically deleted; in seconds */
  message_auto_delete_time?: number;
  /** True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
  has_aggressive_anti_spam_enabled?: true;
  /** True, if non-administrators can only get the list of bots and administrators in the chat */
  has_hidden_members?: true;
  /** True, if messages from the chat can't be forwarded to other chats */
  has_protected_content?: true;
  /** True, if new chat members will have access to old messages; available only to chat administrators */
  has_visible_history?: true;
  /** For supergroups, name of the group sticker set */
  sticker_set_name?: string;
  /** True, if the bot can change the group sticker set */
  can_set_sticker_set?: true;
  /** For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
  custom_emoji_sticker_set_name?: string;
  /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. */
  linked_chat_id?: number;
  /** For supergroups, the location to which the supergroup is connected */
  location?: ChatLocation;
  /** True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
  can_send_paid_media?: undefined;
}

/** Internal type for channel chats */
interface ChannelChatFullInfo {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'channel';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /**  Username, for private chats, supergroups and channels if available */
  username?: string;
  /**  First name of the other party in a private chat */
  first_name?: undefined;
  /**  Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
  /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
  accent_color_id: number;
  /** The maximum number of reactions that can be set on a message in the chat */
  max_reaction_count: number;
  /** Chat photo */
  photo?: ChatPhoto;
  /** If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
  active_usernames?: string[];
  /** For private chats, the date of birth of the user */
  birthdate?: undefined;
  /** For private chats with business accounts, the intro of the business */
  business_intro?: undefined;
  /** For private chats with business accounts, the location of the business */
  business_location?: undefined;
  /** For private chats with business accounts, the opening hours of the business */
  business_opening_hours?: undefined;
  /** For private chats, the personal channel of the user */
  personal_chat?: undefined;
  /** List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
  available_reactions?: ReactionType[];
  /** Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
  background_custom_emoji_id?: string;
  /** Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
  profile_accent_color_id?: number;
  /** Custom emoji identifier of the emoji chosen by the chat for its profile background */
  profile_background_custom_emoji_id?: string;
  /**  Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
  emoji_status_custom_emoji_id?: string;
  /** Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
  emoji_status_expiration_date?: number;
  /** Bio of the other party in a private chat */
  bio?: undefined;
  /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
  has_private_forwards?: undefined;
  /** True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
  has_restricted_voice_and_video_messages?: undefined;
  /** True, if users need to join the supergroup before they can send messages */
  join_to_send_messages?: true;
  /** True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
  join_by_request?: undefined;
  /** Description, for groups, supergroups and channel chats */
  description?: string;
  /**  Primary invite link, for groups, supergroups and channel chats */
  invite_link?: string;
  /** The most recent pinned message (by sending date) */
  pinned_message?: Message;
  /** Default chat member permissions, for groups and supergroups */
  permissions?: undefined;
  /** For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
  slow_mode_delay?: undefined;
  /**  For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
  unrestrict_boost_count?: undefined;
  /**  The time after which all messages sent to the chat will be automatically deleted; in seconds */
  message_auto_delete_time?: number;
  /** True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
  has_aggressive_anti_spam_enabled?: undefined;
  /** True, if non-administrators can only get the list of bots and administrators in the chat */
  has_hidden_members?: undefined;
  /** True, if messages from the chat can't be forwarded to other chats */
  has_protected_content?: true;
  /** True, if new chat members will have access to old messages; available only to chat administrators */
  has_visible_history?: undefined;
  /** For supergroups, name of the group sticker set */
  sticker_set_name?: undefined;
  /** True, if the bot can change the group sticker set */
  can_set_sticker_set?: undefined;
  /** For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
  custom_emoji_sticker_set_name?: undefined;
  /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. */
  linked_chat_id?: number;
  /** For supergroups, the location to which the supergroup is connected */
  location?: undefined;
  /** True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
  can_send_paid_media?: true;
}

/** This object contains full information about a chat. */
export type ChatFullInfo = PrivateChatFullInfo | GroupChatFullInfo | SupergroupChatFullInfo | ChannelChatFullInfo;
