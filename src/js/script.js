import { state } from './state';
import { ui } from './ui/ui';
import { isFormValid } from './validations/isFormValid';

let button = null;
let input = null;

document.addEventListener('DOMContentLoaded', () => {
   ui.error.hide();

   button = ui.button.getElement();
   input = ui.input.getElement();

   button.onclick = function () {
      const formData = {
         value: input.value,
      };

      if (!isFormValid(formData)) {
         ui.error.show();
         return;
      }

      state.addValue(formData.value);
      ui.reset();
      ui.list.update(state.getValues());
   };
});
