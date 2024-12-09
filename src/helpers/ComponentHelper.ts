class ComponentHelper {
  static className(classNames: (string | boolean)[]) {
    return classNames.map(item => {
      if (typeof item === `string`) {
        return item;
      }

      return item ? item : ``;
    }).filter(item => !!item).join(` `);
  }
}

export default ComponentHelper;
