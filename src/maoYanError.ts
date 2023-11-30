export class MaoYanError extends Error {
  code: number;
  constructor(error: RequestBase.MaoYanErrorProps) {
    super();
    this.message = error.msg;
    this.code = error.code;
  }
}