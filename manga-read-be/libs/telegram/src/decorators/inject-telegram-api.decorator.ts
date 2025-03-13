import { Inject } from '@nestjs/common';
import TelegramModuleTokens from '../telegram.module.tokens';

const InjectTelegramApi = () => {
  return Inject(TelegramModuleTokens.Api);
};

export default InjectTelegramApi;
