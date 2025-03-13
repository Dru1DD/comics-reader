import { NestMiddleware } from '@nestjs/common';

export type TelegramWebhookMiddlewareFactory = (provider: 'express' | 'fastify') => NestMiddleware['use'];
