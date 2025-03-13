import { InjectMessagePublisherService } from '@libs/publishers/decorators';
import { MessagePublisherService } from '@libs/publishers/services';
import { TelegramUpdate } from '@libs/telegram/types';
import { TELEGRAM_UPDATES_PUBLISH_KEY } from '@libs/telegram-updates-publisher/constants';

export interface TelegramUpdatesPublisherService {
  publishTelegramUpdate(updateType: string, update: TelegramUpdate): Promise<void>;
}

export class DefaultTelegramUpdatesPublisherService implements TelegramUpdatesPublisherService {
  constructor(
    @InjectMessagePublisherService('telegram-updates')
    private telegramUpdatesMessagePublisherService: MessagePublisherService,
  ) {}

  public async publishTelegramUpdate(updateType: string, update: TelegramUpdate) {
    await this.telegramUpdatesMessagePublisherService.publish({
      publishKey: TELEGRAM_UPDATES_PUBLISH_KEY,
      data: {
        updateType,
        update,
      },
      messageAttributes: {
        UpdateType: updateType,
      },
      deduplicationId: update.update_id.toString(),
    });
  }
}
