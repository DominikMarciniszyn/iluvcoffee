import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} coffee`;
  }

  // You can pass string to Post to return only one parameter
  @Post()
  create(@Body() body) {
    return body;
  }
}
