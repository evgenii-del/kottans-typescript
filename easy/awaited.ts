type Awaited<T> = T extends Promise<infer P> ? P : T;
