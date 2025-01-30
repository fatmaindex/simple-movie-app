Movie Search App 🎬

Overview 📌

This is a simple React Movie Search App that allows users to search for movies using the OMDb API and add them to their favorites list. The app consists of two pages:

Movie Search Page: Users can search for movies and add them to favorites.

Favorites Page: Displays the list of favorite movies and allows users to remove movies from the list.

The app uses React Router for navigation between pages.

Features 🌟

✅ Search for movies using the OMDb API.
✅ Display search results with movie posters, titles, and release years.
✅ Add movies to the favorites list.
✅ View and manage the favorites list on a separate page.
✅ Remove movies from favorites.
✅ Navigation between pages using React Router.

Installation & Setup 🛠️

1️⃣ Clone the Repository

git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm start

This will launch the app on http://localhost:3000/.

File Structure 📂

 movie-search-app
 ┣  src
 ┃ ┣  components
 ┃ ┃ ┣  movieSearch
 ┃ ┃ ┃ ┗  MovieSearch.js  # Movie search component
 ┃ ┣  pages
 ┃ ┃ ┗  Favorites.js      # Favorites page component
 ┃ ┣  App.js             # Main application file
 ┃ ┗  index.js           # Entry point
 ┣  package.json         # Project dependencies
 ┣  README.md            # Documentation

Technologies Used 🚀

React (Frontend framework)

React Router (Navigation between pages)

OMDb API (Fetching movie data)

CSS (Styling the components)

API Key 🔑

This project uses the OMDb API to fetch movie data. The API key is defined inside the MovieSearch.js file:

const API_KEY = "6efcb2da";

If needed, you can get your own API key from OMDb API and replace it.

How to Use? 🎥

1️⃣ Search for a movie using the search bar on the homepage.
2️⃣ Click 'Add to Favorites' to save a movie to your favorites list.
3️⃣ Click 'View Favorites' to navigate to the favorites page.
4️⃣ Remove movies from favorites if needed.

Author ✨

Your Name

GitHub: your-username

LinkedIn: your-profile

License 📜

This project is open-source and available under the MIT License.

