import { createRoot, Root } from "react-dom/client";

abstract class ReactWebComponent<TProps> extends HTMLElement {
  abstract render(): JSX.Element;

  props = {} as TProps;

  private root: Root;

  constructor() {
    super();

    this.root = createRoot(this);
  }

  attributeChangedCallback(name: keyof TProps, _: string | null, newValue: string | null) {
    try {
      this.props[name] = newValue ? JSON.parse(newValue) : null;
    } catch {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.props[name] = newValue as any;
    }

    this.renderFromRoot();
  }

  connectedCallback() {
    this.renderFromRoot();
  }

  private renderFromRoot(): void {
    this.root.render(this.render());
  }
}

export default ReactWebComponent;
