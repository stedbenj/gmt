import * as React from "react";
import {
  PlasmicReactFlowPlaceholder,
  DefaultReactFlowPlaceholderProps
} from "./plasmic/gmt/PlasmicReactFlowPlaceholder";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Deflow from "../Deflow";

export interface ReactFlowPlaceholderProps
  extends DefaultReactFlowPlaceholderProps {}

function ReactFlowPlaceholder_(
  props: ReactFlowPlaceholderProps,
  ref: HTMLElementRefOf<"div">
) {

  return <Deflow />;
}

const ReactFlowPlaceholder = React.forwardRef(ReactFlowPlaceholder_);
export default ReactFlowPlaceholder;
