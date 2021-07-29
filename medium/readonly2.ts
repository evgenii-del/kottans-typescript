type MyReadonly2<T, P=any> = T & { readonly[K in keyof T as K extends P ? K : never]: T[K] }
