import { useEffect, useState } from "react";

import store, { StoreProps } from "../store/store";

function useStoreSelector<TKey extends keyof StoreProps>(key: TKey): StoreProps[TKey] {
  const [value, setValue] = useState(store.getProp(key));

  useEffect(() => {
    const listener = (ev: CustomEvent<StoreUpdateEventDetail<TKey>>) => {
      if (ev.detail.key === key) {
        setValue(ev.detail.value);
      }
    };

    addEventListener("poc:store-update", listener);

    return () => {
      removeEventListener("poc:store-update", listener);
    };
  }, [key]);

  return value;
}

export default useStoreSelector;
