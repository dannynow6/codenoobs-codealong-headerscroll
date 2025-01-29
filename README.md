# CodeNoobs Code Along

- This code along provides a simple example of how to easily create a Header that reappears when the user scrolls up, but disappears when the user scrolls down the page.
  - [CodeNoobs Facebook Group](https://facebook.com/groups/codenoobs)
  - [CodeNoobs YouTube Channel](https://youtube.com/@code_noobs)

## Technologies Used

- **Next.js/React**
- **Tailwind CSS**
- **Daisy UI**

## Daisy UI Components Used

- This example uses Daisy UI components to reduce code time:
  - 1. Footer: "Centered footer with logo and social icons"
    - [Daisy UI Footer](https://daisyui.com/components/footer/)
  - 2. Hero: "Hero with figure but reverse order"
    - [Daisy UI Hero](https://daisyui.com/components/hero/)

## Installation

- Developers can try this out themselves by following the [video](https://youtube.com/@code_noobs) or cloning the repo:

1. Clone the repository:
   ```bash
   git clone https://github.com/dannynow6/codenoobs-codealong-headerscroll.git
   ```
2. Navigate to the project directory:
   ```bash
   cd codenoobs-codealong-headerscroll
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Verify daisy ui in tailwind.config.mjs:
   ```tailwind.config.mjs
      plugins: [require("daisyui")],
      daisyui: {
         themes: ["dark"],
      },
   ```
5. Run the app:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to http://localhost:3000

## Author

- Built by [Dan G.](https://github.com/dannynow6)
- © 2025 - Present
