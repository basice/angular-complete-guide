import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './run/app-routing.module';
import { AuthInterceptorService } from './run/auth/auth-interceptor.service';
import { AuthComponent } from './run/auth/auth.component';
import { HeaderComponent } from './run/header/header.component';
import { RecipeDetailComponent } from './run/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './run/recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './run/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './run/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './run/recipes/recipe-start/recipe-start.component';
import { RecipeService } from './run/recipes/recipe.service';
import { RecipesComponent } from './run/recipes/recipes.component';
import { RunComponent } from './run/run.component';
import { DropdownDirective } from './run/shared/dropdown.directive';
import { LoadingSpinnerComponent } from './run/shared/loading-spinner/loading-spinner.component';
import { ShoppingEditComponent } from './run/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './run/shopping-list/shopping-list.component';
import { ShoppingListService } from './run/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    RunComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  exports: [RunComponent]
})
export class Auth06LogoutModule {
}
