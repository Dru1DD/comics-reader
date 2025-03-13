import { Module } from '@nestjs/common';

import { BotUpdatesController } from './bot-controllers';
import { TelegramModule } from '@libs/telegram';

@Module({
  imports: [TelegramModule],
  controllers: [],
  providers: [
    {
      provide: BotUpdatesController,
      useClass: BotUpdatesController,
    },
  ],
})
export class TelegramBotModule {}
