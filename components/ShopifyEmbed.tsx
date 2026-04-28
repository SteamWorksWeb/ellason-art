"use client";
import { useEffect } from "react";

export default function ShopifyEmbed() {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      const client = (window as any).ShopifyBuy.buildClient({
        domain: "0001x0-0h.myshopify.com",
        storefrontAccessToken: "f4c0d438056dec4166ab3418e496d2bf",
      });
      (window as any).ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent("collection", {
          id: "346127237164",
          node: document.getElementById("collection-component-1777414814746"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    width: "calc(25% - 20px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                button: {
                  color: "#171717",
                  ":hover": { color: "#171717", "background-color": "#ded098" },
                  "background-color": "#f7e7a9",
                  ":focus": { "background-color": "#ded098" },
                },
              },
              buttonDestination: "modal",
              text: { button: "View product" },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": { "margin-left": "-20px" },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  color: "#171717",
                  ":hover": { color: "#171717", "background-color": "#ded098" },
                  "background-color": "#f7e7a9",
                  ":focus": { "background-color": "#ded098" },
                },
              },
              text: { button: "Add to cart" },
            },
            cart: {
              styles: {
                button: {
                  color: "#171717",
                  ":hover": { color: "#171717", "background-color": "#ded098" },
                  "background-color": "#f7e7a9",
                  ":focus": { "background-color": "#ded098" },
                },
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#f7e7a9",
                  ":hover": { "background-color": "#ded098" },
                  ":focus": { "background-color": "#ded098" },
                },
                count: {
                  color: "#171717",
                  ":hover": { color: "#171717" },
                },
                iconPath: { fill: "#171717" },
              },
            },
          },
        });
      });
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    if ((window as any).ShopifyBuy && (window as any).ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  }, []);

  return <div id="collection-component-1777414814746" />;
}
