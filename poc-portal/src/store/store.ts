export type StoreProps = {
  user?: {
    name: string;
  };
};

class Store {
  props = {} as StoreProps;

  getAll() {
    return this.props;
  }

  getProp<TKey extends keyof StoreProps>(key: TKey) {
    return this.props[key];
  }

  setProp<TKey extends keyof StoreProps>(key: TKey, value: StoreProps[TKey]) {
    this.props[key] = value;

    const ev = new CustomEvent("poc:store-update", { detail: { key, value } });

    dispatchEvent(ev);
  }
}

export default new Store();
