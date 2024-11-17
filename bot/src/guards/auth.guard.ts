import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { parse, validate } from '@telegram-apps/init-data-node';
import { ConfigService } from '@nestjs/config';

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
