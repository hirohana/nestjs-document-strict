import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This Action returns all cats';
  }

  @Post()
  create(): string {
    return 'This Action adds a new cat';
  }
}
