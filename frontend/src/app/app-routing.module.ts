import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'productos', component: ProductsComponent  },
  // { path: 'contacto', component: ContactComponent  },
  { path: 'cuenta', component: AccountComponent  },
  { path: 'register', component: RegisterComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }