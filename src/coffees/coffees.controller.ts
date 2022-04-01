import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id} coffee`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action deletes ${id} coffee`;
  }
}

// Notes:
// PUT replaces entire object/resource
// PATCH modofies parts of object/resource
//
