import { IsString, IsIn, IsNumberString } from 'class-validator';

export class EnvVars {
  @IsIn(['development', 'production'])
  readonly NODE_ENV: string = 'development';

  @IsNumberString()
  readonly APP_PORT: string;

  @IsString()
  readonly MONGO_URI: string;
}
