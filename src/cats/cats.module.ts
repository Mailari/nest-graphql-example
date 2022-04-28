import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats.resolver';
import { catsSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'cat', schema: catsSchema }])],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
