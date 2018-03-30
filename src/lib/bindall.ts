// TODO only accept keys that represent functions
// to remove the instanceof
export default function bindAll<T, Ks extends Array<keyof T>>(o: T, xs: Ks): void {
  for (let x of xs) {
    var fn = o[x];
    if (fn instanceof Function) {
      o[x] = fn.bind(o);
    } else {
      throw new Error(`Cannot bind ${x}: not a function`);
    }
  }
}
