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
}
