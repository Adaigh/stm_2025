## STM Tuning static single-page website.

The goal of this project is to create an effective, single-page static website that can be used to greater enhance the visibility of STM Tuning in Spokane, WA while reducing the team's need to interact with the page directly.

I intend to build this website using React and deploying via AWS S3 hosting.

### Updates

1. 03-05-2025 (60 min)
    - Reconsidered project setup and re-launched from `npm create vite@latest` while transferring relevant files.
    - Using TS + React + Bootstrap
    - Tested setup with google fonts and bootstrap CDN link (since CDN is usually already downloaded)

2. 03-06-2025 (30 min)
    - Stole a few things like phone links and google maps links from old projects
    - Some styling changes to get a general layout for the page info.
    - Minor content updates to better prep the site layout.

3. 03-10-2025 (60 min)
    - Meeting with owner resulted in content updates:
        - Include placeholders for affiliate links.
        - Restructured placeholders for about section.
        - Re-used google and apple maps links from previous projects.
    - Added some basic css to improve development and debugging.

4. 03-17-2025 (30 min)
    - Content updates: Most of the text is near-final.
    - Style updates: Basic background/font colors and a box-shadow test.

5. 03-24-2025 (30 min)
    - Structure updates:
        - Refactored Navbar to simplify html elements and allow for more intentional styling.
        - Refactored component elements to apply shared style classes in central location.
    - Style update: Implemented sizing and gradient updates to prepare for more images.

6. 03-28-2025 (30 min)
    - Bootstrap bug resolved: Found that I was using the wrong CDN link, resulting in unexpected behavior.
    - Styling updates: Introduced some styling updates, but ran out of time to double check with bug resolution.

7. 03-31-2025 (30 min)
    - Font styling updates for size and weight in a few areas, mostly 'main'.
    - Some refactoring of 'main', mostly text-stylign focused.
    - Minor refactoring of navbar for mobile spacing.
    - Added working time estimations for personal time tracking.

8. 05-09-2025   (2hrs total)
    - This is gonna be a bulk commit to catch up on little updates I've been doing over the last month.
    - Many styling/structural updates, mostly focused on aesthetics.
    - Uploaded affiliate images but still need to link them to websites.
    - Minor changes to the dev package to make working with sass more convenient (Thanks @concurrently!)