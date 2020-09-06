declare module "*.woff2";
declare module "*.gql";
declare module "*.png";

declare type ScalarLong = number;
declare type ScalarDate = string;
declare type ScalarUpload = File;

// disable "console" auto import
// More info: https://github.com/microsoft/TypeScript/issues/30471#issuecomment-474963436
declare module "console" {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  export = typeof import("console");
}

declare const envConfig:
  | {
      AAD_APP_CLIENT_ID: string;
      AAD_APP_TENANT_ID: string;
      CRAFTY_CLICKS_KEY: string;
    }
  | undefined;
