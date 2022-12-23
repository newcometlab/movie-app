# Movie-App

## 1. Scope

The scope of this test is to examine the candidates logical and technical ability into solving a typical real-life software application. The candidate will be tested on:

Solution Completeness

- Efficiency
- Project structure
- Architecture
- Level of coupling
- Best practices
- Design patterns used

## 2. Test

### 2.1 Pre-Requisites

In order to complete this test, the developer must have the following frameworks set up and in place:

1. React
2. Redux
3. React Router
4. Tailwind
5. Webpack
6. Anything else required

### 2.2 Problem Definition

The scope of the task is to build a build a movie website where the end-user can

- Query movies by name
- Query movies by category, rating, and year
- Watch the selected movie (can be a sample movie like https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video)
- Load the state of the Search filter from the URL which means that your search query can be shared with a friend and the search results would be loaded immediately
- The solution should be able to build the project to be uploaded or deployed to a website (Ideally webpack)
- The solution should include following features / libraries
  - React and Redux
  - SSR (Server-Side Rendering, you may use NextJS)
  - Tailwind CSS
  - Data and presentation layers
  - Mobile first approach
  - Atomic design methodology is applied
  - React router to handle multiple routes
  - Service layer which simulates an API communication (https://apilist.fun/)
- Website structure
  - The landing page shows the movie filter immediately as well as top 8 movies based on their ratings.
  - Upon refreshing the page, filters are not being lost
  - Apart from landing page, create three other pages "About Us"
  - "Movie Detail" page (when you click on an individual movie), it will open the clip on a dedicated page. You can use some of the youtube videos or other video resources. The end user should be able to watch the video on this page.
  - In the landing page movies are presented with their thumbnail image.
  - Create a proper data structure in your service layer which should support all the requirement. Perform tests with chrome dev tool to ensure SSR is working properly.
- Make sure the design supports different devices such as mobile, tablet and desktop.

## 3. Installation

1. Clone the repository locally with the git command:

   ```sh
   git clone https://github.com/newcometlab/movie-app
   ```

2. Install NPM packages:

   ```sh
   yarn
   ```

3. Build the app with command:

   ```sh
   yarn bundle:client
   ```

   ```sh
   yarn bundle:server
   ```

4. Run the app with command:

   ```sh
   yarn serve
   ```

5. Open a new tab http://localhost:4000
