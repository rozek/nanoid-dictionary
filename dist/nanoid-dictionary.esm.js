const numbers = '0123456789';

const lowercase = 'abcdefghijklmnopqrstuvwxyz';

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const alphanumeric = numbers + lowercase + uppercase;

const hexadecimalLowercase = numbers + 'abcdef';

const hexadecimalUppercase = numbers + 'ABCDEF';

const nolookalikes = '346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz';

const nolookalikesSafe = '6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz';

export { alphanumeric, hexadecimalLowercase, hexadecimalUppercase, lowercase, nolookalikes, nolookalikesSafe, numbers, uppercase };
