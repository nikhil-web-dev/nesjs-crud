import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Posts } from './types/posts';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  createPost(@Body() data: Posts) {
    return this.appService.createPost(data);
  }

  @Get('/posts')
  retrievePost(): any {
    return this.appService.retrievePost();
  }

  @Get('/post')
  retrievePostById(@Query('id') id: string) {
    return this.appService.retreivePostById(id);
  }

  @Post('/update')
  update(@Query('id') id: string, @Body() data: any) {
    return this.appService.update(id, data);
  }

  @Delete('/delete')
  delete(@Query('id') id: string) {
    return this.appService.delete(id);
  }
}
