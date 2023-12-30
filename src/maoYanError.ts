import { MaoYanErrorProps } from "./types";

export class MaoYanError extends Error {
  code: number;
  constructor(error: MaoYanErrorProps) {
    super();
    this.message = error.msg;
    this.code = error.code;
  }
}