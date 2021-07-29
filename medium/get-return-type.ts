type MyReturnType<T> = T extends (params: any) => infer P ? P : never;
