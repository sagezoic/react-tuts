# react-tuts

# Episode 10
- Tailwind CSS
- Pros of using Tailwind CSS:
    - Faster to write.
    - Light weight bundle size.
    - Can do almost everything (with less code).
    - No duplicate CSS anymore.
    - So easy to implement dark mode feature.
    - Great IDE support, VS code extension is just amazing.

# Ways to add CSS
- External CSS File (Normal CSS)
- SASS or SCSS: It add super power to writing css
- See, writing css in above way doesn't scale well when app grows or for big production level apps.
- You can look for styled components, many big companies use it.
- Another way is using css libraries or frameworks, e.g. chakra UI, ant UI, material UI, bootstrap, tailwind, etc

# Tailwind CSS
- New and trending in UI community.
- Configure Tailwind:
    - npm install -D tailwindcss postcss
    - npx tailwindcss init : It creates a tailwind.config.js for us, which will have configuration for tailwind CSS
- PostCSS: A tool for transforming CSS with JavaScript. Tailwind internally uses postcss. It is used to understand the tailwind by bundler too.
- We have to create a config for postcss also (.postcssrc).
- https://tailwindcss.com/docs/guides/parcel

# Tailwind working
- It gives you class names automatically for every css that you want to write in your app.
- Tailwind take hard coded values with [].
- While CSS bundling parcel will only take those classes which is required in our app.
- It is very lightweight, if you have used a class multiple times then it will include it only one time, it don't dump unnecessary code in CSS file.
- It is good to use tailwind classes rather than making your own.

# Pros of using Tailwind
- You don't have to switch between the files
- It helps us to avoid unused CSS
- No duplication of CSS classes.
- Easy adding dark mode to your app

# Cons of using Tailwind
- Sometimes your code becomes ugly due to long class list
- It comes with an initial learning curve