import { ComponentProps } from "react";

import MessageBadge from "../comps/MessageBadge";
import ReactCustomElement from "./ReactCustomElement";

type TProps = ComponentProps<typeof MessageBadge>;

class MessageBadgeElement extends ReactCustomElement<TProps> {
  static get observedAttributes(): (keyof TProps)[] {
    return ["name"];
  }

  render(): JSX.Element {
    return <MessageBadge {...this.props} />;
  }
}

export default MessageBadgeElement;
