import { RecoilRoot } from "recoil";

export const baseUrl = (path: string) =>
  `https://jsonplaceholder.typicode.com${path}`;

export const recoilWrapper = ({
  children,
}: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => <RecoilRoot>{children}</RecoilRoot>;

export const sleep = (milliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
