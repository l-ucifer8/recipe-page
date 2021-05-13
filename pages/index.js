import Head from 'next/head'
import Header from '../components/Header'
import Recipe from '../components/Recipe';
var asd = {
  "video": "https://www.allrecipes.com/video/2710/marinated-tuna-steak/",
  "images": [
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5805075.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5536966.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5596014.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F87882.jpg"
  ],
  "prep": "10 mins",
  "cook": "11 mins",
  "additional": "30 mins",
  "total": "51 mins",
  "servings": "4",
  "Yield:": "4 servings",
  "ingredients": [
      "\u00bc Cup Orange Juice",
      "\u00bc Cup Soy Sauce",
      "2 Tablespoons Olive Oil",
      "1 Tablespoon Lemon Juice",
      "2 Tablespoons Chopped Fresh Parsley",
      "1 Clove Garlic, Minced",
      "\u00bd Teaspoon Chopped Fresh Oregano",
      "\u00bd Teaspoon Ground Black Pepper",
      "4 (4 Ounce) Tuna Steaks"
  ],
  "tags": [
      "Orange Juice",
      "Soy Sauce",
      "Olive Oil",
      "Lemon Juice",
      "Fresh Parsley",
      "Garlic",
      "Fresh Oregano",
      "Ground Black Pepper",
      "Tuna Steaks"
  ],
  "directions": [
      "In a large non-reactive dish, mix together the orange juice, soy sauce, olive oil, lemon juice, parsley, garlic, oregano, and pepper. Place the tuna steaks in the marinade and turn to coat. Cover, and refrigerate for at least 30 minutes.",
      "Preheat grill for high heat.",
      "Lightly oil grill grate. Cook the tuna steaks for 5 to 6 minutes, then turn and baste with the marinade. Cook for an additional 5 minutes, or to desired doneness. Discard any remaining marinade."
  ],
  "nutrition": "200 calories; protein 27.4g; carbohydrates 3.7g; fat 7.9g; cholesterol 50.6mg; sodium 944.6mg."
};
const sq = [
  "Orange Juice",
  "Soy Sauce",
  "Lemon Juice",
]
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/hkb.svg" />
      </Head>
      <Header/>
      <Recipe recipe = {asd} sq = {sq}/>
      {/* Header */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️️ by {' '}
          <img src="/hkb.svg" alt="HK Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
