type MyPick<T, R extends keyof T> = { [P in R]: T[P] };
