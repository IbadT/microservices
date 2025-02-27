import { AmqpConnectionManager, RabbitMQModule, RabbitRpcParamsFactory } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { amqpConfig } from './ amqp.config';

@Global()
@Module({
    imports: [
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            inject: [ConfigService],
            useFactory: (config: ConfigService) => amqpConfig(config),
        }),
    ],
    providers: [RabbitRpcParamsFactory, AmqpConnectionManager],
    exports: [RabbitMQModule],
})
export class AmqpModule {}