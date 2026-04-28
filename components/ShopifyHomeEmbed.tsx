"use client";
import { useEffect } from "react";

export default function ShopifyHomeEmbed() {
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
          id: "344374968364",
          node: document.getElementById("collection-component-1777416964245"),
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
                  color: "#faf8f5",
                  ":hover": { color: "#faf8f5", "background-color": "#353330" },
                  "background-color": "#1f1e1c",
                  ":focus": { "background-color": "#353330" },
                  "border-radius": "8px",
                },
              },
              buttonDestination: "modal",
              contents: { options: false },
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
                  color: "#faf8f5",
                  ":hover": { color: "#faf8f5", "background-color": "#353330" },
                  "background-color": "#1f1e1c",
                  ":focus": { "background-color": "#353330" },
                  "border-radius": "8px",
                },
              },
              text: { button: "Add to cart" },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  color: "#faf8f5",
                  ":hover": { color: "#faf8f5", "background-color": "#353330" },
                  "background-color": "#1f1e1c",
                  ":focus": { "background-color": "#353330" },
                  "border-radius": "8px",
                },
              },
              text: { total: "Subtotal", button: "Checkout" },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#1f1e1c",
                  ":hover": { "background-color": "#353330" },
                  ":focus": { "background-color": "#353330" },
                },
                count: { color: "#faf8f5", ":hover": { color: "#faf8f5" } },
                iconPath: { fill: "#faf8f5" },
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

  return <div id="collection-component-1777416964245" />;
}
