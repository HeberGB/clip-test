import { BadRequestException, Catch } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException) {
    const response = exception.getResponse();
    return new UserInputError(response['message']);
  }
}
