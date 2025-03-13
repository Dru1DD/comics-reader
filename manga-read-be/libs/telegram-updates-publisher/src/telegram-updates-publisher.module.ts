import { DynamicModule, Module } from '@nestjs/common';
import { TelegramModule } from '@libs/telegram';
import { BotUpdatesController } from './bot-controllers';
import { DefaultTelegramUpdatesPublisherService } from './services';
import { PublishersModule} from '@libs/publishers';

@Module({})
export class TelegramUpdatesPublisherModule {
  public static forRoot(): DynamicModule {
    return {
      module: TelegramUpdatesPublisherModule,
      imports: [TelegramModule, PublishersModule.register('telegram-updates')],
      providers: [
        {
          provide: BotUpdatesController,
          useClass: BotUpdatesController,
        },
        {
          provide: DefaultTelegramUpdatesPublisherService,
          useClass: DefaultTelegramUpdatesPublisherService,
        },
      ],
    };
  }
}
