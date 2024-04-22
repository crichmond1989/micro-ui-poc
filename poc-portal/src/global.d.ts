import store, { StoreProps } from "./store/store";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "poc-inbox": {
        name?: string;
      };

      "poc-information": {
        name?: string;
      };

      "poc-message-badge": {
        name?: string;
      };

      "poc-resource-library": {
        name?: string;
      };
    }
  }

  interface StoreUpdateEventDetail<TKey extends keyof StoreProps> {
    key: TKey;
    value: StoreProps[TKey];
  }

  interface GlobalEventHandlersEventMap {
    "poc:store-update": CustomEvent<StoreUpdateEventDetail<T>>;
  }

  interface Window {
    poc_store: typeof store;
  }
}
