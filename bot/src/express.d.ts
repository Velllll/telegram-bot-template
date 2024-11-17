import { InitData } from '@telegram-apps/init-data-node';
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: InitData;
  }
}
