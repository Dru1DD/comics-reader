import { Inject } from '@nestjs/common';
import TelegramModuleTokens from '../telegram.module.tokens';

const InjectTelegramWebhookMiddlewareFactory = () => {
  return Inject(
    TelegramModuleTokens.Factories.TelegramWebhookMiddlewareFactory,
  );
};

export default InjectTelegramWebhookMiddlewareFactory;
