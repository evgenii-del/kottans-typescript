type Pop<T extends any[]> = T extends [...infer P, infer T] ? P : never;
