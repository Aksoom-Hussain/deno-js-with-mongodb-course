import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export default {
    bcrypt(stringToHash: string): string {
    const hash = bcrypt.hashSync(stringToHash);
    return hash;
  },
  verify(hash: string, text: string): boolean {
    const result = bcrypt.compareSync(text, hash);
    return result;
  },
};
