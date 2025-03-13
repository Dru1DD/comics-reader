import { Bot, webhookCallback } from 'grammy';
import { DynamicModule, Module, NestMiddleware } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { TelegramWebhookMiddlewareFactory } from './types';
import { TelegramHostModule, RootAsyncTelegramHostModuleOptions } from './host';
import { DefaultBotRegistryService } from './services';
import { GrammyTelegramApi } from './api';
import TelegramModuleTokens from './telegram.module.tokens';

export type RootAsyncTelegramModuleOptions = RootAsyncTelegramHostModuleOptions;

@Module({
  imports: [DiscoveryModule],
  providers: [
    {
      provide: DefaultBotRegistryService,
      useClass: DefaultBotRegistryService,
    },
    {
      provide: Bot,
      useExisting: TelegramHostModule.BOT_TOKEN,
    },
    {
      provide: TelegramModuleTokens.Api.TelegramApi,
      useClass: GrammyTelegramApi,
    },
    {
      provide: TelegramModuleTokens.Factories.TelegramWebhookMiddlewareFactory,
      useFactory: (bot: Bot): TelegramWebhookMiddlewareFactory => {
        return (provider) => {
          return webhookCallback(
            bot,
            provider,
          ) as unknown as NestMiddleware['use'];
        };
      },
      inject: [Bot],
    },
  ],
  exports: [
    TelegramModuleTokens.Api.TelegramApi,
    TelegramModuleTokens.Factories.TelegramWebhookMiddlewareFactory,
  ],
})
export class TelegramModule {
  public static forRootAsync(
    options: RootAsyncTelegramModuleOptions,
  ): DynamicModule {
    return {
      module: TelegramModule,
      providers: [],
      imports: [TelegramHostModule.forRootAsync(options)],
    };
  }
}
