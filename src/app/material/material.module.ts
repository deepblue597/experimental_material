import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';


const MaterialComponents = [ 
  MatButtonModule,
  MatIconModule, 
  MatButtonToggleModule, 
  MatBadgeModule, 
  MatProgressSpinnerModule, 
  MatTableModule, 
  MatAutocompleteModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatStepperModule
]

@NgModule({
  imports:[MaterialComponents], 
  exports: [MaterialComponents]
})
export class MaterialModule { }
 // material has its own module so its easier to import 