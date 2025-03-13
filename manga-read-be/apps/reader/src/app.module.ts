import 'dotenv/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from "@nestjs/config";
import { HealthModule } from 'libs/health/src';
import { LoggerMiddleware } from 'libs/logging/src/middlewares';
import { InjectTelegramWebhookMiddlewareFactory } from 'libs/telegram/src/decorators';
import { TelegramWebhookMiddlewareFactory } from 'libs/telegram/src/types';
import { TelegramBotModule } from '@apps/reader/telegram-bot';
import { TelegramModule } from '@libs/telegram';
import { TelegramUpdatesPublisherModule } from '@libs/telegram-updates-publisher';

@Module({
  imports: [
    HealthModule,
    TelegramModule.forRootAsync({
      imports: [ConfigModule],
      useConfigFactory: (configService: ConfigService) => {
        const botToken = configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN');

        return { botToken };
      },
      inject: [ConfigService],
    }),
    TelegramUpdatesPublisherModule.forRoot(),
    TelegramBotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(
    @InjectTelegramWebhookMiddlewareFactory()
    private readonly telegramWebhookMiddlewareFactory: TelegramWebhookMiddlewareFactory,
  ) {}
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).exclude('/health').forRoutes('*');

    consumer.apply(this.telegramWebhookMiddlewareFactory('fastify')).forRoutes('/telegram-webhook-callback');
  }
}
