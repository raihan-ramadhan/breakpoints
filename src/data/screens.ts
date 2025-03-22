import { ScreenCategory } from "../types/screens";

export const screens: ScreenCategory[] = [
  {
    title: "Smartphones (Mobile)",
    icon: "Smartphone",
    subCategories: [
      {
        group: "Small Phones",
        items: [
          {
            id: "iphone-se",
            name: "iPhone SE",
            size: { w: 320, h: 568 },
          },
          {
            id: "google-pixel-2",
            name: "Google Pixel 2",
            size: { w: 411, h: 731 },
          },
          {
            id: "galaxy-a01",
            name: "Galaxy A01",
            size: { w: 360, h: 640 },
          },
        ],
      },
      {
        group: "Regular Phones",
        items: [
          {
            id: "iphone-11-pro",
            name: "iPhone 11 Pro",
            size: { w: 375, h: 812 },
          },
          {
            id: "google-pixel-4",
            name: "Google Pixel 4",
            size: { w: 411, h: 823 },
          },
          {
            id: "galaxy-s20",
            name: "Galaxy S20",
            size: { w: 412, h: 915 },
          },
        ],
      },
      {
        group: "Large Phones",
        items: [
          {
            id: "iphone-15-pro-max",
            name: "iPhone 15 Pro Max",
            size: { w: 430, h: 932 },
          },
          {
            id: "galaxy-s23-ultra",
            name: "Galaxy S23 Ultra",
            size: { w: 432, h: 960 },
          },
          {
            id: "google-pixel-7-pro",
            name: "Google Pixel 7 Pro",
            size: { w: 412, h: 915 },
          },
          {
            id: "xiaomi-13-ultra",
            name: "Xiaomi 13 Ultra",
            size: { w: 440, h: 960 },
          },
        ],
      },
    ],
  },
  {
    title: "Tablets",
    icon: "Tablet",
    subCategories: [
      {
        group: "Small Tablets",
        items: [
          {
            id: "ipad-mini",
            name: "iPad Mini",
            size: { w: 768, h: 1024 },
          },
          {
            id: "amazon-fire-7",
            name: "Amazon Fire 7",
            size: { w: 600, h: 1024 },
          },
        ],
      },
      {
        group: "Medium Tablets",
        items: [
          {
            id: "ipad-air",
            name: "iPad Air",
            size: { w: 820, h: 1180 },
          },
          {
            id: "galaxy-tab-s8",
            name: "Galaxy Tab S8",
            size: { w: 800, h: 1280 },
          },
          {
            id: "surface-go-3",
            name: "Surface Go 3",
            size: { w: 900, h: 1280 },
          },
        ],
      },
      {
        group: "Large Tablets",
        items: [
          {
            id: "ipad-pro-12-9",
            name: "iPad Pro 12.9",
            size: { w: 1024, h: 1366 },
          },
          {
            id: "samsung-galaxy-tab-s9-ultra",
            name: "Samsung Galaxy Tab S9 Ultra",
            size: { w: 1848, h: 2960 },
          },
          {
            id: "microsoft-surface-pro-9",
            name: "Microsoft Surface Pro 9",
            size: { w: 1200, h: 1920 },
          },
        ],
      },
    ],
  },
  {
    title: "Laptops",
    icon: "Laptop",
    subCategories: [
      {
        group: "Small Laptops",
        items: [
          {
            id: "macbook-air-13",
            name: "MacBook Air 13",
            size: { w: 1440, h: 900 },
          },
          {
            id: "dell-xps-13",
            name: "Dell XPS 13",
            size: { w: 1920, h: 1200 },
          },
        ],
      },
      {
        group: "Standard Laptops",
        items: [
          {
            id: "macbook-pro-14",
            name: "MacBook Pro 14",
            size: { w: 1512, h: 982 },
          },
          {
            id: "lenovo-thinkpad-x1-carbon",
            name: "Lenovo ThinkPad X1 Carbon",
            size: { w: 1920, h: 1200 },
          },
          {
            id: "asus-rog-zephyrus-g15",
            name: "ASUS ROG Zephyrus G15",
            size: { w: 2560, h: 1440 },
          },
        ],
      },
      {
        group: "Large Laptops",
        items: [
          {
            id: "macbook-pro-16",
            name: "MacBook Pro 16",
            size: { w: 3456, h: 2234 },
          },
          {
            id: "alienware-x17",
            name: "Alienware X17",
            size: { w: 1920, h: 1080 },
          },
          {
            id: "razer-blade-18",
            name: "Razer Blade 18",
            size: { w: 2560, h: 1600 },
          },
        ],
      },
    ],
  },
  {
    title: "Desktops & Monitors",
    icon: "Monitor",
    subCategories: [
      {
        group: "Standard Monitors",
        items: [
          {
            id: "1080p-monitor",
            name: "1080p Monitor",
            size: { w: 1920, h: 1080 },
          },
          {
            id: "1440p-monitor",
            name: "1440p Monitor",
            size: { w: 2560, h: 1440 },
          },
        ],
      },
      {
        group: "Large Screens",
        items: [
          {
            id: "4k-uhd",
            name: "4K UHD",
            size: { w: 3840, h: 2160 },
          },
          {
            id: "ultrawide-34-inch",
            name: "Ultrawide 34-inch",
            size: { w: 3440, h: 1440 },
          },
          {
            id: "super-ultrawide-49-inch",
            name: "Super Ultrawide 49-inch",
            size: { w: 5120, h: 1440 },
          },
        ],
      },
    ],
  },
  {
    title: "TVs",
    icon: "Tv",
    subCategories: [
      {
        group: "Standard TVs",
        items: [
          {
            id: "1080p-tv",
            name: "1080p TV",
            size: { w: 1920, h: 1080 },
          },
          {
            id: "4k-smart-tv",
            name: "4K Smart TV",
            size: { w: 3840, h: 2160 },
          },
          {
            id: "8k-smart-tv",
            name: "8K Smart TV",
            size: { w: 7680, h: 4320 },
          },
        ],
      },
    ],
  },
  {
    title: "Other Devices",
    icon: "TvMinimal",
    subCategories: [
      {
        group: "Foldables",
        items: [
          {
            id: "galaxy-z-fold-5-folded",
            name: "Galaxy Z Fold 5 (Folded)",
            size: { w: 375, h: 812 },
          },
          {
            id: "galaxy-z-fold-5-unfolded",
            name: "Galaxy Z Fold 5 (Unfolded)",
            size: { w: 1812, h: 2176 },
          },
          {
            id: "google-pixel-fold-folded",
            name: "Google Pixel Fold (Folded)",
            size: { w: 375, h: 842 },
          },
        ],
      },
    ],
  },
];
