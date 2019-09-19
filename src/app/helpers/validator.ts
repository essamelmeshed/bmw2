/**
 * @author Mustafa Omran<promustafaomran@hotmail.com>
 *
 */
import { FormGroup, FormControl } from '@angular/forms';

/**
 * validate form
 *
 *
 * @param formGroup
 */
export function validateAllFormFields(formGroup: FormGroup) {  
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

/**
 * validate one input
 *
 *
 * @param field
 */
export function isFieldValid(field: string) {
  return !this.form.get(field).valid && this.form.get(field).touched;
}

/**
 * display css
 *
 *
 * @param field
 */
export function displayFieldCss(field: string) {
  return {
    'has-error': isFieldValid(field),
    'has-feedback': isFieldValid(field)
  };
}
