import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatInput } from './dto/cat.input';
import { ICat } from './dto/cat.interface';

@Injectable()
export class CatsService {
  constructor(@InjectModel('cat') private readonly catModel: Model<ICat>) {}

  create(cat: CatInput) {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  findAll(limit = 20, page = 1) {
    return this.catModel.find({}, {}, { limit, skip: page * limit }).exec();
  }
}
