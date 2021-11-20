import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from './schemas/producto.schema';
import { ProductoService } from './services/producto.service';
import { ProductoController } from './controllers/producto.controllers';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/onlypans', { useNewUrlParser : true }), 
    MongooseModule.forFeature([{name: Producto.name, schema: ProductoSchema }]),
    ProductModule
  ],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
