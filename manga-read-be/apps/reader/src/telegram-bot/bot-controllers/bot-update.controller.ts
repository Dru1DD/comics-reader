import { OnUpdate, TelegramBotController } from '@libs/telegram/decorators';
import { ChannelPostUpdateContext } from '@libs/telegram/types';

@TelegramBotController()
export default class BotUpdatesController {
  @OnUpdate('channel_post')
  public handleChannelPostUpdate(context: ChannelPostUpdateContext) {
    context.update;
  }
}
