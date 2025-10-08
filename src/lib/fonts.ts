import localFont from "next/font/local";

export const Inconsolata = localFont({
    src: [
        {
            path: "../app/fonts/Inconsolata/Inconsolata-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../app/fonts/Inconsolata/Inconsolata-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-inconsolata",
});

export const Spectral = localFont({
    src: [
        {
            path: "../app/fonts/Spectral/Spectral-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../app/fonts/Spectral/Spectral-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-spectral",
});
