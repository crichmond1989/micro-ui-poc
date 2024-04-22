import { ComponentProps } from "react";

import Inbox from "../comps/Inbox";
import ReactCustomElement from "./ReactCustomElement";

type TProps = ComponentProps<typeof Inbox>;

class InboxElement extends ReactCustomElement<TProps> {
  static get observedAttributes(): (keyof TProps)[] {
    return ["name"];
  }

  render(): JSX.Element {
    return <Inbox {...this.props} />;
  }
}

export default InboxElement;
