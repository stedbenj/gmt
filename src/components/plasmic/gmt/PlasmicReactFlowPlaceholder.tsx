// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pzVTj3KyqzBKHuv92fMSee
// Component: MguLprgZJ4
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_gmt.module.css"; // plasmic-import: pzVTj3KyqzBKHuv92fMSee/projectcss
import sty from "./PlasmicReactFlowPlaceholder.module.css"; // plasmic-import: MguLprgZJ4/css

export type PlasmicReactFlowPlaceholder__VariantMembers = {};
export type PlasmicReactFlowPlaceholder__VariantsArgs = {};
type VariantPropType = keyof PlasmicReactFlowPlaceholder__VariantsArgs;
export const PlasmicReactFlowPlaceholder__VariantProps =
  new Array<VariantPropType>();

export type PlasmicReactFlowPlaceholder__ArgsType = {};
type ArgPropType = keyof PlasmicReactFlowPlaceholder__ArgsType;
export const PlasmicReactFlowPlaceholder__ArgProps = new Array<ArgPropType>();

export type PlasmicReactFlowPlaceholder__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultReactFlowPlaceholderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicReactFlowPlaceholder__RenderFunc(props: {
  variants: PlasmicReactFlowPlaceholder__VariantsArgs;
  args: PlasmicReactFlowPlaceholder__ArgsType;
  overrides: PlasmicReactFlowPlaceholder__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReactFlowPlaceholder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReactFlowPlaceholder__VariantsArgs;
    args?: PlasmicReactFlowPlaceholder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReactFlowPlaceholder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReactFlowPlaceholder__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicReactFlowPlaceholder__ArgProps,
          internalVariantPropNames: PlasmicReactFlowPlaceholder__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicReactFlowPlaceholder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReactFlowPlaceholder";
  } else {
    func.displayName = `PlasmicReactFlowPlaceholder.${nodeName}`;
  }
  return func;
}

export const PlasmicReactFlowPlaceholder = Object.assign(
  // Top-level PlasmicReactFlowPlaceholder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicReactFlowPlaceholder
    internalVariantProps: PlasmicReactFlowPlaceholder__VariantProps,
    internalArgProps: PlasmicReactFlowPlaceholder__ArgProps
  }
);

export default PlasmicReactFlowPlaceholder;
/* prettier-ignore-end */
