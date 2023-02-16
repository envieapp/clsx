import { clsx, cn } from '.';

describe('clsx testing', () => {
  test('without parameter', () => {
    const className = clsx();
    expect(className).toBe('');
  });

  test('strings', () => {
    const className = clsx('example', 'some', 'another');
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('string arrays', () => {
    const className = clsx(['example', 'some'], ['another']);
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('numbers', () => {
    const className = clsx(0, 123, -123);
    expect(className).toContain('123');
    expect(className).toContain('-123');
    const splitted = className.split(' ');
    expect(splitted).toContain('123');
    expect(splitted).toContain('-123');
    expect(splitted.length).toBe(2);
  });

  test('number arrays', () => {
    const className = clsx([0, 123], [-123]);
    expect(className).toContain('123');
    expect(className).toContain('-123');
    const splitted = className.split(' ');
    expect(splitted).toContain('123');
    expect(splitted).toContain('-123');
    expect(splitted.length).toBe(2);
  });

  test('strings with check', () => {
    const className = clsx(false && 'some', true && 'another');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(1);
  });

  test('string with check arrays', () => {
    const className = clsx([false && 'some'], [true && 'another']);
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(1);
  });

  test('records', () => {
    const className = clsx({
      example: true,
      some: true,
      another: 'another',
      kekw: false,
      lol: undefined,
      bebra: null,
    });
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('record arrays', () => {
    const className = clsx(
      [{
        example: true,
        some: true,
      }],
      [{
        another: 'another',
        kekw: false,
        lol: undefined,
        bebra: null,
      }],
    );
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('combined', () => {
    const className = clsx(
      'string',
      false && 'false-string',
      true && 'true-string',
      null,
      undefined,
      {
        record: true,
        recordFalse: false,
        recordNull: null,
        recordUndefined: undefined,
      },
      [
        'string_in_array',
        false && 'false-string_in_array',
        true && 'true-string_in_array',
        null,
        undefined,
        {
          recordInArray: true,
          recordFalseInArray: false,
          recordNullInArray: null,
          recordUndefinedInArray: undefined,
        },
      ],
    );
    expect(className).toContain('string');
    expect(className).toContain('true-string');
    expect(className).toContain('record');
    expect(className).toContain('string_in_array');
    expect(className).toContain('true-string_in_array');
    expect(className).toContain('recordInArray');
    const splitted = className.split(' ');
    expect(splitted).toContain('string');
    expect(splitted).toContain('true-string');
    expect(splitted).toContain('record');
    expect(splitted).toContain('string_in_array');
    expect(splitted).toContain('true-string_in_array');
    expect(splitted).toContain('recordInArray');
    expect(splitted.length).toBe(6);
  });
});

describe('cn testing', () => {
  test('without parameter', () => {
    const className = cn();
    expect(className).toBe('');
  });

  test('strings', () => {
    const className = cn('example', 'some', 'another');
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('string arrays', () => {
    const className = cn(['example', 'some'], ['another']);
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('numbers', () => {
    const className = cn(0, 123, -123);
    expect(className).toContain('123');
    expect(className).toContain('-123');
    const splitted = className.split(' ');
    expect(splitted).toContain('123');
    expect(splitted).toContain('-123');
    expect(splitted.length).toBe(2);
  });

  test('number arrays', () => {
    const className = cn([0, 123], [-123]);
    expect(className).toContain('123');
    expect(className).toContain('-123');
    const splitted = className.split(' ');
    expect(splitted).toContain('123');
    expect(splitted).toContain('-123');
    expect(splitted.length).toBe(2);
  });

  test('strings with check', () => {
    const className = cn(false && 'some', true && 'another');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(1);
  });

  test('string with check arrays', () => {
    const className = cn([false && 'some'], [true && 'another']);
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(1);
  });

  test('records', () => {
    const className = cn({
      example: true,
      some: true,
      another: 'another',
      kekw: false,
      lol: undefined,
      bebra: null,
    });
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('record arrays', () => {
    const className = cn(
      [{
        example: true,
        some: true,
      }],
      [{
        another: 'another',
        kekw: false,
        lol: undefined,
        bebra: null,
      }],
    );
    expect(className).toContain('example');
    expect(className).toContain('some');
    expect(className).toContain('another');
    const splitted = className.split(' ');
    expect(splitted).toContain('example');
    expect(splitted).toContain('some');
    expect(splitted).toContain('another');
    expect(splitted.length).toBe(3);
  });

  test('combined', () => {
    const className = cn(
      'string',
      false && 'false-string',
      true && 'true-string',
      null,
      undefined,
      {
        record: true,
        recordFalse: false,
        recordNull: null,
        recordUndefined: undefined,
      },
      [
        'string_in_array',
        false && 'false-string_in_array',
        true && 'true-string_in_array',
        null,
        undefined,
        {
          recordInArray: true,
          recordFalseInArray: false,
          recordNullInArray: null,
          recordUndefinedInArray: undefined,
        },
      ],
    );
    expect(className).toContain('string');
    expect(className).toContain('true-string');
    expect(className).toContain('record');
    expect(className).toContain('string_in_array');
    expect(className).toContain('true-string_in_array');
    expect(className).toContain('recordInArray');
    const splitted = className.split(' ');
    expect(splitted).toContain('string');
    expect(splitted).toContain('true-string');
    expect(splitted).toContain('record');
    expect(splitted).toContain('string_in_array');
    expect(splitted).toContain('true-string_in_array');
    expect(splitted).toContain('recordInArray');
    expect(splitted.length).toBe(6);
  });
});
