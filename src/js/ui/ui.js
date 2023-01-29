function getErrorElement() {
   return document.getElementById('alert');
}
function getButtonElement() {
   return document.getElementById('button');
}
function getInputElement() {
   return document.getElementById('input');
}
function getListElement() {
   return document.getElementById('list');
}

export const ui = {
   error: {
      getElement() {
         return getErrorElement();
      },
      show() {
         const el = getErrorElement();

         if (el) el.style.display = 'block';
      },
      hide() {
         const el = getErrorElement();

         if (el) el.style.display = 'none';
      },
   },
   input: {
      getElement() {
         return getInputElement();
      },
      reset() {
         const el = getInputElement();

         if (el) el.value = '';
      },
   },
   button: {
      getElement() {
         return getButtonElement();
      },
   },
   listChild: {
      create(value, position) {
         const el = document.createElement('li');
         el.innerHTML = value;

         if (position % 3 === 0) el.style.color = 'red';

         return el;
      },
   },
   list: {
      getElement() {
         return getListElement();
      },
      newChild() {},
      update(data) {
         const list = getListElement();
         if (Array.isArray(data) && list) {
            list.innerHTML = '';

            data.forEach((value, i) => {
               const element = ui.listChild.create(value, i + 1);

               list.appendChild(element);
            });
         }
      },
   },
   reset() {
      this.error.hide();
      this.input.reset();
   },
};
