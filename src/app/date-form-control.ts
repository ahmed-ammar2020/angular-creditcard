import { FormControl } from '@angular/forms';

// this class has all the methods and props of FormControl class
export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue("", {...options, emitModelToViewChange: true});
      return;
    }

    if (value.match(/[^0-9|\/]/ig)) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }

    if (this.value.length === 3 && value.length === 2) {
      super.setValue(value, {...options, emitModelToViewChange: true});
      return;
    }

    if (value.length === 2) {
      super.setValue(value + "/", {...options, emitModelToViewChange: true});
      return;
    }

    super.setValue(value, {...options, emitModelToViewChange: true});
  }
}
