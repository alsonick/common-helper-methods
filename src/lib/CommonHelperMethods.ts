export class CommonHelperMethods {
  string = {
    /**
     * Returns the reversed string
     * @param  {[String]} str The string input.
     * @return {Array}        The reversed string.
     */
    reverse: (str: string): string => {
      if (str === '') {
        throw new Error('String parameter cannot be empty.');
      }

      let reversedString = '';
      let length = str.length;

      while (length > 0) {
        reversedString += str.substring(length - 1, length);
        length--;
      }

      return reversedString;
    },

    /**
     * Returns the array containing all the characters in the given string.
     * @param  {[String]} str The string input.
     * @param  {[String]} separator A string character the separates a string.
     * @return {Array}        The array of characters.
     */
    array: (str: string, separator?: string): string[] => {
      const list: string[] = [];

      if (str === '') {
        throw new Error('String parameter cannot be empty.');
      }

      for (let i = 0; i < str.length; i++) {
        if (separator) {
          if (str.includes(separator)) {
            const splitterRemoved = str.replaceAll(separator, ' ');

            const splittedString = splitterRemoved?.split(' ');

            if (typeof splittedString !== 'undefined') {
              list.push(...splittedString);
              break;
            }
          } else {
            throw new Error(
              'Could not find the splitter symbol in the given string.',
            );
          }
          break;
        }

        list.push(str[i] as string);
      }

      return list;
    },

    /**
     * Returns true or false based on weather the string input is empty or not.
     * @param  {[String]} str The string input.
     * @return {Array}        Returns true or false.
     */
    isEmpty: (str: string): boolean => {
      if (str === '') {
        return true;
      }

      return false;
    },
  };
  array = {
    /**
     * Transforms two given arrays into a hash map.
     * @param  {[T]} keys An array of keys.
     * @param  {[V]} values An array of values.
     * @return {HashMap}        Returns the hash map.
     */
    hashMap: <T, V>(keys: T[], values: V[]): Map<T, V> => {
      const map = new Map<T, V>();

      if (!keys.length || !values.length) {
        throw new Error('Must include both keys and values.');
      }

      if (keys.length !== values.length) {
        throw new Error(
          "'keys' and 'values' must contain the same amount of arguments.",
        );
      }

      for (let i = 0; i < keys.length; i++) {
        map.set(keys[i] as T, values[i] as V);
      }
      return map;
    },

    /**
     * Returns the range between the largest and smallest number in a given array.
     * @param  {Array} array The array input.
     * @return {Number}        Returns the range between the largest and smallest number.
     */
    range: (array: number[]): number => {
      if (!array.length || array.length === 1) {
        throw new Error(
          'Argument cannot be empty and it must contain more than 1 arguments.',
        );
      }

      // Gets the smallest number in the given array.
      let smallest = array[0] as number;
      for (let i = 1; i < array.length; i++) {
        if ((array[i] as number) < smallest) {
          smallest = array[i] as number;
        }
      }

      // Gets the largest number in the given array.
      let largest = array[0] as number;
      for (let i = 0; i < array.length; i++) {
        if ((array[i] as number) > largest) {
          largest = array[i] as number;
        }
      }

      // Returns the range between the largest and smallest number.
      return largest - smallest;
    },
  };
}
