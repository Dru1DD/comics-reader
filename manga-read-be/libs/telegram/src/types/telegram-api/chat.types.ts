import { User } from './user.types';

/** Internal type for private chats */
export interface PrivateChat {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'private';
  /** Title, for supergroups, channels and group chats */
  title?: undefined;
  /** Username, for private chats, supergroups and channels if available */
  username?: string;
  /** First name of the other party in a private chat */
  first_name: string;
  /** Last name of the other party in a private chat */
  last_name?: string;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
}

/** Internal type for group chats */
export interface GroupChat {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'group';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /** Username, for private chats, supergroups and channels if available */
  username?: undefined;
  /** First name of the other party in a private chat */
  first_name?: undefined;
  /** Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
}

/** Internal type for supergroup chats */
export interface SupergroupChat {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'supergroup';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /** Username, for private chats, supergroups and channels if available */
  username?: string;
  /** First name of the other party in a private chat */
  first_name?: undefined;
  /** Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: true;
}

/** Internal type for channel chats */
export interface ChannelChat {
  /** Unique identifier for this chat. */
  id: number;
  /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'channel';
  /** Title, for supergroups, channels and group chats */
  title: string;
  /** Username, for private chats, supergroups and channels if available */
  username?: string;
  /** First name of the other party in a private chat */
  first_name?: undefined;
  /** Last name of the other party in a private chat */
  last_name?: undefined;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: undefined;
}

/** This object represents a chat photo. */
export interface ChatPhoto {
  /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  small_file_id: string;
  /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  small_file_unique_id: string;
  /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  big_file_id: string;
  /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  big_file_unique_id: string;
}

/** This object represents a chat photo. */
export interface ChatPhoto {
  /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  small_file_id: string;
  /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  small_file_unique_id: string;
  /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  big_file_id: string;
  /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  big_file_unique_id: string;
}

/** Represents an invites link for a chat. */
export interface ChatInviteLink {
  /** 	The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with '...'. */
  invite_link: string;
  /** Creator of the link */
  creator: User;
  /** True, if users joining the chat via the link need to be approved by chat administrators */
  creates_join_request: boolean;
  /** True, if the link is primary */
  is_primary: boolean;
  /** True, if the link is revoked */
  is_revoked: boolean;
  /** Invite link name */
  name?: string;
  /** Point in time (Unix timestamp) when the link will expire or has been expired */
  expire_date?: number;
  /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
  member_limit?: number;
  /** Number of pending join requests created using this link */
  pending_join_request_count?: number;
  /** The number of seconds the subscription will be active for before the next payment */
  subscription_period?: number;
  /** The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link */
  subscription_price?: number;
}

/** Represents a location to which a chat is connected. */
export interface ChatLocation {
  /** The location to which the supergroup is connected. Can't be a live location. */
  location: Location;
  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string;
}

/** Represents the rights of an administrator in a chat. */
export interface ChatAdministratorRights {
  /** True, if the user's presence in the chat is hidden */
  is_anonymous: boolean;
  /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
  can_manage_chat: boolean;
  /** True, if the administrator can delete messages of other users */
  can_delete_messages: boolean;
  /** True, if the administrator can manage video chats */
  can_manage_video_chats: boolean;
  /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
  can_restrict_members: boolean;
  /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
  can_promote_members: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings */
  can_change_info: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  can_invite_users: boolean;
  /** True, if the administrator can post stories to the chat */
  can_post_stories: boolean;
  /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
  can_edit_stories: boolean;
  /** True, if the administrator can delete stories posted by other users */
  can_delete_stories: boolean;
  /** True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
  can_post_messages?: boolean;
  /** True, if the administrator can edit messages of other users and can pin messages; for channels only */
  can_edit_messages?: boolean;
  /** True, if the user is allowed to pin messages; for groups and supergroups only */
  can_pin_messages?: boolean;
  /** True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
  can_manage_topics?: boolean;
}

/** This object represents changes in the status of a chat member. */
export interface ChatMemberUpdated {
  /** Chat the user belongs to */
  chat: Chat;
  /** Performer of the action, which resulted in the change */
  from: User;
  /** Date the change was done in Unix time */
  date: number;
  /** Previous information about the chat member */
  old_chat_member: ChatMember;
  /** New information about the chat member */
  new_chat_member: ChatMember;
  /** Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
  invite_link?: ChatInviteLink;
  /** True, if the user joined the chat after sending a direct join request without using an invite link without using an invite link and being approved by an administrator */
  via_join_request?: boolean;
  /** True, if the user joined the chat via a chat folder invite link */
  via_chat_folder_invite_link?: boolean;
}

/** Represents a join request sent to a chat. */
export interface ChatJoinRequest {
  /** Chat to which the request was sent */
  chat: SupergroupChat | ChannelChat;
  /** User that sent the join request */
  from: User;
  /** Identifier of a private chat with the user who sent the join request. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user. */
  user_chat_id: number;
  /** Date the request was sent in Unix time */
  date: number;
  /** Bio of the user. */
  bio?: string;
  /** Chat invite link that was used by the user to send the join request */
  invite_link?: ChatInviteLink;
}

/** Describes actions that a non-administrator user is allowed to take in a chat. */
export interface ChatPermissions {
  /** True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
  can_send_messages?: boolean;
  /** True, if the user is allowed to send audios */
  can_send_audios?: boolean;
  /** True, if the user is allowed to send documents */
  can_send_documents?: boolean;
  /** True, if the user is allowed to send photos */
  can_send_photos?: boolean;
  /** True, if the user is allowed to send videos */
  can_send_videos?: boolean;
  /** True, if the user is allowed to send video notes */
  can_send_video_notes?: boolean;
  /** True, if the user is allowed to send voice notes */
  can_send_voice_notes?: boolean;
  /** True, if the user is allowed to send polls */
  can_send_polls?: boolean;
  /** True, if the user is allowed to send animations, games, stickers and use inline bots */
  can_send_other_messages?: boolean;
  /** True, if the user is allowed to add web page previews to their messages */
  can_add_web_page_previews?: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
  can_change_info?: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  can_invite_users?: boolean;
  /** True, if the user is allowed to pin messages. Ignored in public supergroups */
  can_pin_messages?: boolean;
  /** True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
  can_manage_topics?: boolean;
}

/** Represents a chat member that owns the chat and has all administrator privileges. */
export interface ChatMemberOwner {
  /** The member's status in the chat, always “creator” */
  status: 'creator';
  /** Information about the user */
  user: User;
  /** True, if the user's presence in the chat is hidden */
  is_anonymous: boolean;
  /** Custom title for this user */
  custom_title?: string;
}

/** Represents a chat member that has some additional privileges. */
export interface ChatMemberAdministrator {
  /** The member's status in the chat, always “administrator” */
  status: 'administrator';
  /** Information about the user */
  user: User;
  /** True, if the bot is allowed to edit administrator privileges of that user */
  can_be_edited: boolean;
  /** True, if the user's presence in the chat is hidden */
  is_anonymous: boolean;
  /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
  can_manage_chat: boolean;
  /** True, if the administrator can delete messages of other users */
  can_delete_messages: boolean;
  /** True, if the administrator can manage video chats */
  can_manage_video_chats: boolean;
  /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
  can_restrict_members: boolean;
  /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
  can_promote_members: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings */
  can_change_info: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  can_invite_users: boolean;
  /** True, if the administrator can post stories to the chat */
  can_post_stories: boolean;
  /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
  can_edit_stories: boolean;
  /** True, if the administrator can delete stories posted by other users */
  can_delete_stories: boolean;
  /** True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
  can_post_messages?: boolean;
  /** True, if the administrator can edit messages of other users and can pin messages; for channels only */
  can_edit_messages?: boolean;
  /** True, if the user is allowed to pin messages; for groups and supergroups only */
  can_pin_messages?: boolean;
  /** True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
  can_manage_topics?: boolean;
  /** Custom title for this user */
  custom_title?: string;
}

/** Represents a chat member that has no additional privileges or restrictions. */
export interface ChatMemberMember {
  /** The member's status in the chat, always “member” */
  status: 'member';
  /** Information about the user */
  user: User;
  /** Date when the user's subscription will expire; Unix time */
  until_date?: number;
}

/** Represents a chat member that is under certain restrictions in the chat. Supergroups only. */
export interface ChatMemberRestricted {
  /** The member's status in the chat, always “restricted” */
  status: 'restricted';
  /** Information about the user */
  user: User;
  /** True, if the user is a member of the chat at the moment of the request */
  is_member: boolean;
  /** True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
  can_send_messages: boolean;
  /** True, if the user is allowed to send audios */
  can_send_audios: boolean;
  /** True, if the user is allowed to send documents */
  can_send_documents: boolean;
  /** True, if the user is allowed to send photos */
  can_send_photos: boolean;
  /** True, if the user is allowed to send videos */
  can_send_videos: boolean;
  /** True, if the user is allowed to send video notes */
  can_send_video_notes: boolean;
  /** True, if the user is allowed to send voice notes */
  can_send_voice_notes: boolean;
  /** True, if the user is allowed to send polls */
  can_send_polls: boolean;
  /** True, if the user is allowed to send animations, games, stickers and use inline bots */
  can_send_other_messages: boolean;
  /** True, if the user is allowed to add web page previews to their messages */
  can_add_web_page_previews: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings */
  can_change_info: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  can_invite_users: boolean;
  /** True, if the user is allowed to pin messages */
  can_pin_messages: boolean;
  /** True, if the user is allowed to create forum topics */
  can_manage_topics: boolean;
  /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever */
  until_date: number;
}

/** Represents a chat member that isn't currently a member of the chat, but may join it themselves. */
export interface ChatMemberLeft {
  /** The member's status in the chat, always “left” */
  status: 'left';
  /** Information about the user */
  user: User;
}

/** Represents a chat member that was banned in the chat and can't return to the chat or view chat messages. */
export interface ChatMemberBanned {
  /** The member's status in the chat, always “kicked” */
  status: 'kicked';
  /** Information about the user */
  user: User;
  /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever */
  until_date: number;
}

/** The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user. */
export interface ChatBoostSourcePremium {
  /** Source of the boost, always “premium” */
  source: 'premium';
  /** User that boosted the chat */
  user: User;
}

/** The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription. */
export interface ChatBoostSourceGiftCode {
  /** Source of the boost, always “gift_code” */
  source: 'gift_code';
  /** User for which the gift code was created */
  user: User;
}

/** The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways. */
export interface ChatBoostSourceGiveaway {
  /** Source of the boost, always “giveaway” */
  source: 'giveaway';
  /** Identifier of a message in the chat with the giveaway; the message could have been deleted already */
  giveaway_message_id: number;
  /** User that won the prize in the giveaway if any; for Telegram Premium giveaways only */
  user?: User;
  /** The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
  prize_star_count?: number;
  /** True, if the giveaway was completed, but there was no user to win the prize */
  is_unclaimed?: true;
}

/** This object contains information about a chat boost. */
export interface ChatBoost {
  /** Unique identifier of the boost */
  boost_id: string;
  /** Point in time (Unix timestamp) when the chat was boosted */
  add_date: number;
  /** Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged */
  expiration_date: number;
  /** Source of the added boost */
  source: ChatBoostSource;
}

/** This object represents a boost added to a chat or changed. */
export interface ChatBoostUpdated {
  /** Chat which was boosted */
  chat: Chat;
  /** Information about the chat boost */
  boost: ChatBoost;
}

/** This object represents a boost removed from a chat. */
export interface ChatBoostRemoved {
  /** Chat which was boosted */
  chat: Chat;
  /** Unique identifier of the boost */
  boost_id: string;
  /** Point in time (Unix timestamp) when the boost was removed */
  remove_date: number;
  /** Source of the removed boost */
  source: ChatBoostSource;
}

/** This object represents a list of boosts added to a chat by a user. */
export interface UserChatBoosts {
  /** The list of boosts added to the chat by the user */
  boosts: ChatBoost[];
}

/** This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 - ChatMemberOwner
 - ChatMemberAdministrator
 - ChatMemberMember
 - ChatMemberRestricted
 - ChatMemberLeft
 - ChatMemberBanned */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;

/** This object describes the source of a chat boost. It can be one of
 - ChatBoostSourcePremium
 - ChatBoostSourceGiftCode
 - ChatBoostSourceGiveaway */
export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway;

/** This object contains information about a chat. */
export type Chat = PrivateChat | GroupChat | SupergroupChat | ChannelChat;
