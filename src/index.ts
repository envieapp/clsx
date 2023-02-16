export type ClassValue = ClassArray
| ClassDictionary
| string
| number
| null
| boolean
| undefined;
export type ClassDictionary = Record<string, unknown>;
export type ClassArray = ClassValue[];

const toClassNames = (value: ClassValue): string[] => {
  const classNames: string[] = [];
  if (!value) return classNames;
  if (typeof value === 'string' || typeof value === 'number') {
    classNames.push(`${value}`);
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.filter((v) => { return v; }).forEach((v) => {
        classNames.push(...toClassNames(v));
      });
    } else {
      Object.entries(value).filter(([, v]) => { return v; }).forEach(([className]) => {
        classNames.push(className);
      });
    }
  }
  return classNames;
};

export const clsx = (...values: ClassValue[]): string => {
  const cachedClassNames = new Set<string>();

  values.filter((v) => { return v; }).forEach((value) => {
    toClassNames(value).forEach((v) => { return cachedClassNames.add(v); });
  });

  return Array.from(cachedClassNames).filter((v) => { return v; }).join(' ');
};

export const cn = clsx;
