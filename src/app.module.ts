import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { BlockListModule } from './block-list/block-list.module';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AccountModule,
    BlockListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
