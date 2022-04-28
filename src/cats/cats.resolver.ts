import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatInput } from './dto/cat.input';
import { CreateCatDto } from './dto/createCatDto';

@Resolver()
export class CatsResolver {
  constructor(private readonly catService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'Hello world!';
  }

  @Query(() => [CreateCatDto])
  findAll(@Args('limit') limit: number, @Args('page') page: number) {
    console.log({ limit, page });

    return this.catService.findAll(limit, page);
  }

  @Mutation(() => CreateCatDto)
  create(@Args('cat') cat: CatInput) {
    console.log({ cat });
    return this.catService.create(cat);
  }
}
