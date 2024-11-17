import { Scenes } from 'telegraf';
import { Context as ContextTelegraf } from 'telegraf';

export interface Context extends ContextTelegraf {
  session: {};
  scene: Scenes.SceneContextScene<ContextTelegraf>;
}
