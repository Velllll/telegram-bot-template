import { Update, Ctx, Start, Sender, InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from '../context';
import { SenderInfo } from '../interfaces/telegram-user.interface';

@Update()
export class BotUpdate {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  @Start()
  async start(@Ctx() ctx: Context, @Sender() sender: SenderInfo) {
    try {
      await ctx.reply(
        `Добро пожаловать, ${sender.first_name || sender.username}`,
      );
    } catch (error) {
      await ctx.reply('Что-то пошло не так');
    }
  }
}
