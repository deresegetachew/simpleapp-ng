import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { TformsComponent } from './components/tforms/tforms.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFilterPipePipe } from './pipe/todo-filter-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TformsComponent,
    ProductComponent,
    ProductDetailComponent,
    OrdersComponent,
    HomeComponent,
    NavigationComponent,
    TodoComponent,
    TodoFilterPipePipe,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'product/:category/:id', component: ProductDetailComponent },
      { path: 'forms', component: TformsComponent },
      { path: 'new-product', component: ProductFormComponent },
      { path: 'http-todo', component: TodoComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
