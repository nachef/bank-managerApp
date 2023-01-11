declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export { ReactComponent };
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
