import { Module } from '@nestjs/common';
import { BotClientAuthGuard } from './auth.guard';

@Module({
  providers: [BotClientAuthGuard],
  exports: [BotClientAuthGuard],
  imports: [],
})
export class GuardsModule {}
