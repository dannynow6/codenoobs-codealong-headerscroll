# CodeNoobs Code Along

- This code along provides a simple example of how to easily create a Header that reappears when the user scrolls up, but disappears when the user scrolls down the page.
- Overall functionality:

  - 1.  Tracks scroll direction: determines whether the user is scrolling up or down
  - 2.  Hides/Shows the Header: If scrolling up or at the top, the header is shown; if scrolling down, the header is hidden.
  - 3.  Cleans up the scroll listener when the component is unmounted.

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

## Explanation of Code:

- 1. isVisible: Tracks whether the header is visible. Defaults to true (visible)
- 2. lastScrollPosition: Tracks the last scroll position. Defaults to 0 (top of the page)
- 3. useEffect Hook: Runs after the component renders to set up a scroll even listener
- 4. handleScroll function: Runs whenever the user scrolls and calculates the current vertical scroll position (window.scrollY)
- 5. Visibility logic:
  - If the user scrolls **up** (currentScrollPosition < lastScrollPosition) or is at the top of the page (currentScrollPosition === 0), the header remains **visible**
  - Otherwise, the user is scrolling **down**, so the header is **hidden**
  - setIsVisible: Updates the visibility state based on the condition
- 6. Update Scroll Position: The lastScrollPosition is updated to the current scroll position so the component can compare it on the next scroll event
- 7. Event listener setup: Adds the handleScroll function as a listener for the browser's scroll event
- 8. Cleanup: When the component unmounts, the scroll event listener is removed to prevent memory leaks
- 9. Dependencies: The useEffect depends on lastScrollPosition. It will rerun whenever lastScrollPosition changes

## Installation

- Developers can try this out themselves by following the [video](https://youtu.be/HqyYzQ_7k3s) or cloning the repo:

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
