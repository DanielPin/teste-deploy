import { Get } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  @Query(() => String)
  getHello(): string {
    return 'teste deploy';
  }
}
