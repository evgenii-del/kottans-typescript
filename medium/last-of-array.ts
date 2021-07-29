type Last<T extends any[]> = T extends [...infer K, infer P] ? P : never;
