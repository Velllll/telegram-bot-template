import { Module } from '@nestjs/common';
import { GuardsModule } from 'src/guards/guards.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { BotUpdate } from './update/bot.update';

@Module({
  imports: [GuardsModule, ConfigModule, HttpModule],
  providers: [BotUpdate],
})
export class TelegramModule {}
