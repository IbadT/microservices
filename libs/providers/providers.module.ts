import { Module } from '@nestjs/common';
import { AmqpModule } from './src/amqp';
import { TypeormModule } from './src/typeorm'; 

@Module({
    imports: [TypeormModule, AmqpModule],
})
export class ProvidersModule {}