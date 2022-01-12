/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Tweet } from '.prisma/client';

@Injectable()
export class TweetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({
      data: {...createTweetDto},
    });
  }

  async findAll(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  async findOne(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({
      where: {id}
    });
  }

  async update(id: number, updateTweetDto: UpdateTweetDto) {
    return await this.prisma.tweet.update({
      data: {...updateTweetDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return await this.prisma.tweet.delete({
      where: {id},
    });
  }
}
