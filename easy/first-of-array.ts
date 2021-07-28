type First<T extends unknown[]> = T[0] extends T[number] ? T[0] : never;
