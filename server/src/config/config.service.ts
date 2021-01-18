import { config } from 'dotenv';
import { validate } from 'class-validator';
import { Injectable, Logger } from '@nestjs/common';
import { EnvVars } from './dto/env-vars.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ConfigService {
  env: EnvVars;

  constructor() {
    config();
    this.validateInput(process.env).then((envVars) => (this.env = envVars));
  }

  private async validateInput(env: NodeJS.ProcessEnv): Promise<EnvVars> {
    const envVars = plainToClass(EnvVars, env);
    const errors = await validate(envVars);
    if (errors.length) {
      for (const error of errors) {
        Logger.error(`Bad value of ${error.property}: ${error.value}`);
        for (const key in error.constraints) {
          if (error.constraints[key]) {
            Logger.error(error.constraints[key]);
          }
        }
      }
      process.exit(1);
    }
    return envVars;
  }
}
