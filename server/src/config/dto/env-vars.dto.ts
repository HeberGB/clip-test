import { IsString, IsIn, IsNumberString } from 'class-validator';

export class EnvVars {
  @IsIn(['development', 'production'])
  readonly NODE_ENV: string = 'development';

  @IsNumberString()
  readonly APP_PORT: string;

  @IsString()
  readonly MONGO_URI: string;

  @IsString()
  readonly OP_MERCHANT_ID: string;

  @IsString()
  readonly OP_PRIVATE_KEY: string;
}
