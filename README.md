# Breakpoints

## Description

This project is a developer tool that allows users to preview how their live websites render across various screen sizes, including desktops, tablets, televisions, and mobile phones. It helps developers ensure their websites are fully responsive and provide an optimal user experience across different devices.

## Features

- **Multi-screen breakpoint support** – Test website responsiveness across various screen sizes.

- **Zoom in/out functionality** – Adjust the view for better inspection of design elements.

- **Customizable screen setup** – Add or remove screens to testing.

- **Orientation toggle** – Switch between landscape and portrait mode instantly.

- **Dark mode support** – Automatically adapts to system preferences for a comfortable viewing experience.

- **Fully responsive interface** – Ensures smooth usability and adaptability.

- **Minimal and intuitive UI** – Designed for ease of use without unnecessary clutter.

## Screenshots / Demo

Live Demo: [Demo Link](https://breakpoints-one.vercel.app/)

![Screenshot]\([https://github.com/raihan-ramadhan/breakpoints/blob/main/public/screenshot.png](https://github.com/raihan-ramadhan/breakpoints/blob/main/public/screenshot.png))

## Technologies Used

- **Vite** – Fast build tool for modern web projects.

- **React** – JavaScript library for building user interfaces.

- **ShadCN** – UI component library based on Radix UI.

- **TailwindCSS v4** – Utility-first CSS framework for styling.

- **React Zoom Pan Pinch** – Library for zooming, panning, and pinching interactions.

- **Vercel** – Hosting and deployment platform.

## Future Improvements

- **Canvas mode for website previews** – Allow resizing, grabbing, and zooming within a flexible canvas, similar to Figma or Adobe Illustrator.

- **More customization options for breakpoints**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/raihan-ramadhan/breakpoints.git
   ```
2. Navigate to the project directory:
   ```sh
   cd breakpoints
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

⚠ **Notice:** The target preview website must allow CORS (Cross-Origin Resource Sharing). If your website uses Next.js and cannot be previewed, you may need to adjust your CORS settings.

For Next.js, add the following to your `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // ✅ Allow all origins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

⚠ **Important:** Don't forget to remove this CORS configuration before deploying to production to avoid security risks.

Run the project with:

```sh
npm run dev
```

## Contributing

If you want to contribute, please fork the repository and make a pull request.

## License

This project is licensed under the MIT License.

## Author

- **Raihan Ramadhan** – [GitHub](https://github.com/raihan-ramadhan)
