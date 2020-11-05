import { AbstractControl } from "@angular/forms";

export function upperCaseValidator(control: AbstractControl) {
  if (!isUpperCase(control.value)) {
    return { upperCase: true };
  }
  return null;
}

export function isUpperCase(value: string) {
  return value.trim() && /^[A-Z]\w+$/.test(value);
}
