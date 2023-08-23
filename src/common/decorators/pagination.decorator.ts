import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const page = Number(request.query.page) || 1;
    const limit = Number(request.query.limit) || 10;

    return { page, limit };
  },
);
