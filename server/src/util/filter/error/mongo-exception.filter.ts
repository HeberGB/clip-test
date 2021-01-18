import { Catch } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { UserInputError } from 'apollo-server-express';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(MongoError)
export class MongoExceptionFilter implements GqlExceptionFilter {
  catch(exception: MongoError) {
    const error = { message: exception.message };
    return new UserInputError('Bad Input: ' + error.message);
  }
}
