import { DatabaseModule } from '@infra/database/database.module'
import { HttpModule } from '@infra/http/http.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env/env'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    DatabaseModule,
    HttpModule,
  ],
})
export class AppModule {}
