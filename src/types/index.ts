import { IncomingMessage } from "http";

// 扩展 IncomingMessage
export interface CustomIncomingMessage extends IncomingMessage {
  [key: string]: any,
  cookie: any
}

/**
 * @description 响应题
 */
export interface CustomResponseType<T> {
  errno: number,
  data: T
  message: string
}

