const values = [];

export const state = {
   values: values,
   addValue(data) {
      values.push(data);
   },
   getValues() {
      return values;
   },
};
