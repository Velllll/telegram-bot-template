import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { parse, validate } from '@telegram-apps/init-data-node';
import { ConfigService } from '@nestjs/config';

/**
 * Guard for mini app controllers
 *
 * Check authorization for mini app client
 * You need to send tma token in Authorization header
 *
 * @example of authorization header
 * "Authorization": "tma {INIT_DATA}" #from tg api
 *
 * @example of use guard
 * @UseGuards(BotClientAuthGuard)
 * @Delete('file/:documentId')
 * async deleteFile() {}
 */
@Injectable()
export class BotClientAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException();
    }

    const [authType, authData] = authHeader.split(' ');

    if (authType !== 'tma' || !authData) {
      throw new UnauthorizedException();
    }

    try {
      validate(authData, this.configService.get('TELEGRAM_TOKEN'), {
        expiresIn: 3600,
      });

      const initData = parse(authData);

      request.user = initData;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
