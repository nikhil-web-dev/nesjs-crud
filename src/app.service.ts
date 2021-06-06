import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Posts } from './types/posts';

const posts: any = [];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createPost(data) {
    const uuid = uuidv4();

    const payload = {
      id: uuid,
      title: data.title,
      description: data.description,
    };

    return posts.push(payload);
  }

  retrievePost() {
    return posts;
  }

  retreivePostById(data: string) {
    console.log(data);
    return posts.find((post) => post.id === data);
  }

  update(id: string, data: any) {
    console.log(data);
    const { title, description } = data;

    const post = posts.find((post) => post.id === id);
    console.log(post);

    if (title) post.title = title;

    if (description) post.description = description;

    return posts;
  }

  delete(id: string) {
    const post = posts.findIndex((post) => post.id === id);

    posts.splice(post, 1);

    return posts;
  }
}
