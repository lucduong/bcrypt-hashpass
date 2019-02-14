declare module 'bcrypt-hashpass' {
  export function hashPass(password: string): string;
  export function comparePassword(
    password: string,
    hashedPass: string
  ): boolean;
}
