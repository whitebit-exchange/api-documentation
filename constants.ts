const isProduction = process.env.NODE_ENV === "production";
export const assetPrefix = isProduction ? "/api-documentation/static" : "/static";