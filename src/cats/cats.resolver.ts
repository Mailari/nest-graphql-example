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
  async findAll(@Args('limit') limit: number, @Args('page') page: number) {
    console.log({ limit, page });

    const cats = await this.catService.findAll(limit, page);
    console.log({ cats });
    return cats;
  }

  @Mutation(() => CreateCatDto)
  create(@Args('cat') cat: CatInput) {
    console.log({ cat });
    return this.catService.create(cat);
  }
}
