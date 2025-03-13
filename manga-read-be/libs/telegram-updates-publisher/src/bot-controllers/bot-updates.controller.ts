import { OnUpdate, TelegramBotController } from '@libs/telegram/decorators';
import {
  ChannelPostUpdateContext,
  PreCheckoutQueryUpdateContext,
} from '@libs/telegram/types';
import { DefaultTelegramUpdatesPublisherService } from '@libs/telegram-updates-publisher/services';

@TelegramBotController()
export default class BotUpdatesController {
  constructor(
    private telegramUpdatesPublisherService: DefaultTelegramUpdatesPublisherService,
  ) {}

  @OnUpdate('channel_post')
  public async handleChannelPostUpdate(context: ChannelPostUpdateContext) {
    await this.telegramUpdatesPublisherService.publishTelegramUpdate(
      'channel_post',
      context.update,
    );
  }

  @OnUpdate('pre_checkout_query')
  public async handlePreCheckoutPostUpdate(
    context: PreCheckoutQueryUpdateContext,
  ) {
    await this.telegramUpdatesPublisherService.publishTelegramUpdate(
      'pre_checkout_post',
      context.update,
    );
  }
}
