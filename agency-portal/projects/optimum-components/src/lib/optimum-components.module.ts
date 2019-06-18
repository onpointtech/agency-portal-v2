import { NgModule } from '@angular/core';
import { OptimumComponentsComponent } from './optimum-components.component';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { OptimumSubmitComponent } from './optimum-submit/optimum-submit.component';
import { FormTextInputComponent } from './form-text-input/form-text-input.component'

@NgModule({  
  declarations:[  
     OptimumComponentsComponent,
     TextAreaInputComponent,
     TextInputComponent,
     PhoneInputComponent,
     RadioInputComponent,
     DropdownInputComponent,
     OptimumSubmitComponent,
     FormTextInputComponent
  ],
  imports:[  
     FormsModule,
     CommonModule,
     ReactiveFormsModule
  ],
  exports:[  
     OptimumComponentsComponent,
     TextAreaInputComponent,
     TextInputComponent,
     PhoneInputComponent,
     RadioInputComponent,
     DropdownInputComponent,
     OptimumSubmitComponent,
     FormTextInputComponent
  ]
})
export class OptimumComponentsModule { }
