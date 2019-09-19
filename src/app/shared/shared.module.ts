import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { TableFilterPipe } from '../pipes/table-filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FieldErrorDisplayComponent,
        TableFilterPipe
    ],
    exports: [
        FieldErrorDisplayComponent,
        TableFilterPipe
    ]
})
export class SharedModule { }
