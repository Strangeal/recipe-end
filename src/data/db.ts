import HomeIcon from "@mui/icons-material/Home";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import HistoryIcon from "@mui/icons-material/History";

export const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    path: "/about",
    icon: MarkChatUnreadIcon,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: HistoryIcon,
  },
];

export const productList = [
  {
    id: 1,
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769431/Recipe-App/recipes/micheile-henderson-qw3AyjHNF_k-unsplash_sqv6yb.jpg",
  },
  {
    id: 2,
    label: "Bird",
    imgPath:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769903/Recipe-App/recipes/aleisha-kalina-Gi779Hq8THQ-unsplash_ukhm84.jpg",
  },
  {
    id: 3,
    label: "Bali, Indonesia",
    imgPath:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769427/Recipe-App/recipes/micheile-henderson-mQSztA48y6A-unsplash_yj6rgw.jpg",
  },
  {
    id: 4,
    label: "Goč, Serbia",
    imgPath:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769370/Recipe-App/recipes/brooke-lark-qdyBKWSzpSI-unsplash_guyueg.jpg",
  },
  {
    id: 5,
    label: "Goč, Serbia",
    imgPath:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769768/Recipe-App/recipes/jane-4AFO0pMeBfU-unsplash_r59xxi.jpg",
  },
];

export const recipeList = [
  {
    id: 1,
    recipe_name: "Spicy Thai Noodle Soup",
    cooking_time: "30 minutes",
    recipe_image:
      "https://www.everydayeasyeats.com/wp-content/uploads/2017/01/Thai-Spicy-Noodle-Soup-4.jpg",
    likes: 125,
    rating: 4.8,
    chef_image:
      "https://img.freepik.com/free-photo/young-cook-female-wearing-chef-uniform-holding-isolated-orange-wall_141793-36632.jpg?",
    chef_name: "John Smith",
    posted_time: "15 hours ago",
  },
  {
    id: 2,
    recipe_name: "Garlic Butter Shrimp Scampi",
    cooking_time: "20 minutes",
    recipe_image:
      "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Lemon-Garlic-Butter-Shrimp-Recipe-19.jpg",
    likes: 238,
    rating: 4.9,
    chef_image:
      "https://img.freepik.com/free-photo/smiling-young-male-cook-wearing-chef-uniform-glasses-isolated-white-wall_141793-78421.jpg?",
    chef_name: "David Lee",
    posted_time: "5 hours ago",
  },
  {
    id: 3,
    recipe_name: "Creamy Mushroom Chicken",
    cooking_time: "45 minutes",
    recipe_image:
      "https://cook.me/wp-content/uploads/2019/11/Roast-Chicken-and-Vegetables-Recipe-How-To-Make-Roast-Chicken-and-Vegetables-Delicious-Roast-Chicken-and-Vegetables-14-678x1024.jpg",
    likes: 312,
    rating: 4.7,
    chef_image:
      "https://img.freepik.com/free-photo/smiling-young-male-cook-wearing-chef-uniform-glasses-isolated-white-wall_141793-78421.jpg?",
    chef_name: "Emily Jones",
    posted_time: "15 hours ago",
  },
  {
    id: 4,
    recipe_name: "Homemade Beef Stroganoff",
    cooking_time: "4 hour",
    recipe_image:
      "https://www.thecookierookie.com/wp-content/uploads/2021/12/featured-beef-stroganoff-recipe.jpg",
    likes: 410,
    rating: 4.6,
    chef_image:
      "https://img.freepik.com/free-photo/young-cook-female-wearing-chef-uniform-holding-isolated-orange-wall_141793-36632.jpg?",
    chef_name: "Sophia Chen",
    posted_time: "1 hours ago",
  },
  {
    id: 5,
    recipe_name: "Roasted Garlic and Tomato Soup",
    cooking_time: "40 minutes",
    recipe_image:
      "https://lucyandlentils.co.uk/wp-content/uploads/2022/11/IMG_7510.jpg",
    likes: 178,
    rating: 4.8,
    chef_image:
      "https://img.freepik.com/free-photo/smiling-young-male-cook-wearing-chef-uniform-glasses-isolated-white-wall_141793-78421.jpg?",
    chef_name: "Daniel Kim",
    posted_time: "2 hours ago",
  },
];

export const breakFastList = [
  {
    id: 1,
    name: "Avocado Toast",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680767841/Recipe-App/breakfast/david-b-townsend-IQSDSFO9UuI-unsplash_swtp1l.jpg",
    cal: 350,
    category: "breakfast",
    cooking_time: "10 minutes",
    description:
      "This avocado toast recipe is a healthy and delicious breakfast option that is easy to make. The creamy avocado pairs perfectly with the crispy toast, and the cherry tomatoes add a burst of sweetness. Top it all off with a sprinkle of sea salt and you have a breakfast that is both satisfying and nutritious.",
    ingredients: [
      { Ing: "Whole grain bread", quantity: "2 slices" },
      { Ing: "Ripe avocado", quantity: "1 avocado" },
      { Ing: "Cherry tomatoes, halved", quantity: "1/2 cup" },
      { Ing: "Olive oil", quantity: "1 tablespoon" },
      { Ing: "Sea salt to taste", quantity: "To taste" },
    ],
    videos: [
      "https://example.com/avocado-toast-video1.mp4",
      "https://example.com/avocado-toast-video2.mp4",
    ],
  },
  {
    id: 2,
    name: "Blueberry Pancakes",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768055/Recipe-App/breakfast/ben-kolde-FFqNATH27EM-unsplash_rzhork.jpg",
    cal: 450,
    category: "breakfast",
    cooking_time: "30 minutes",
    description:
      "These blueberry pancakes are fluffy, light, and bursting with juicy blueberries. They are perfect for a lazy weekend breakfast or brunch, and are sure to be a hit with the whole family. Serve them with a drizzle of maple syrup and a dollop of whipped cream for the ultimate indulgence.",
    ingredients: [
      { Ing: "All-purpose flour", quantity: "1 1/2 cups" },
      { Ing: "Baking powder", quantity: "3 1/2 teaspoons" },
      { Ing: "Salt", quantity: "1 teaspoon" },
      { Ing: "White sugar", quantity: "1 tablespoon" },
      { Ing: "Milk", quantity: "1 1/4 cups" },
      { Ing: "Egg", quantity: "1 egg" },
      { Ing: "Butter, melted", quantity: "3 tablespoons" },
      { Ing: "Fresh blueberries", quantity: "1/2 cup" },
    ],
    videos: [
      "https://example.com/blueberry-pancakes-video1.mp4",
      "https://example.com/blueberry-pancakes-video2.mp4",
    ],
  },
  {
    id: 3,
    category: "breakfast",
    name: "Cheese Sandwich",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768057/Recipe-App/breakfast/joseph-gonzalez-zcUgjyqEwe8-unsplash_lfstp7.jpg",
    cal: 400,
    cooking_time: "15 minutes",
    description:
      "This egg and cheese sandwich recipe is a classic breakfast favorite that is quick and easy to make. The fluffy scrambled eggs and melted cheddar cheese are sandwiched between two slices of toasted bread for a satisfying and hearty meal. You can customize it with your favorite toppings, such as avocado, bacon, or hot sauce.",
    ingredients: [
      { Ing: "Bread", quantity: "2 slices" },
      { Ing: "Eggs", quantity: "2" },
      { Ing: "Shredded cheddar cheese", quantity: "1/4 cup" },
      { Ing: "Butter", quantity: "1 tablespoon" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
    ],
    videos: [
      "https://example.com/egg-cheese-sandwich-video1.mp4",
      "https://example.com/egg-cheese-sand",
    ],
  },
  {
    id: 4,
    name: "Greek Yogurt",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768105/Recipe-App/breakfast/eiliv-aceron-uAm1CZMdPCw-unsplash_rtt7cd.jpg",
    cal: 250,
    category: "breakfast",
    cooking_time: "5 minutes",
    description:
      "This Greek yogurt parfait is a healthy and delicious breakfast option that is perfect for busy mornings. Layer creamy Greek yogurt with fresh berries and crunchy granola for a breakfast that is both satisfying and nutritious. It's also easy to customize with your favorite fruits and toppings.",
    ingredients: [
      { Ing: "Greek yogurt", quantity: "1 cup" },
      { Ing: "Fresh berries", quantity: "1/2 cup" },
      { Ing: "Granola", quantity: "1/4 cup" },
    ],
    videos: [
      "https://example.com/greek-yogurt-parfait-video1.mp4",
      "https://example.com/greek-yogurt-parfait-video2.mp4",
    ],
  },
  {
    id: 5,
    name: "Oatmeal Cinnamon",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768060/Recipe-App/breakfast/chris-ralston-09HGdZzkP-Q-unsplash_1_ygurwe.jpg",
    cal: 300,
    category: "breakfast",
    cooking_time: "15 minutes",
    description:
      "This oatmeal with apples and cinnamon is a cozy and comforting breakfast option that will warm you up on a chilly morning. The oatmeal is cooked with diced apples and cinnamon for a sweet and spicy flavor, and topped with a drizzle of maple syrup and a sprinkle of chopped nuts.",
    ingredients: [
      { Ing: "Rolled oats", quantity: "1 cup" },
      { Ing: "Water", quantity: "2 cups" },
      { Ing: "Diced", quantity: "1 apple" },
      { Ing: "Ground cinnamon", quantity: "1 teaspoon" },
      { Ing: "Maple syrup", quantity: "2 tablespoons" },
      { Ing: "Chopped nuts", quantity: "2 tablespoons" },
    ],
    videos: [
      "https://example.com/oatmeal-apples-cinnamon-video1.mp4",
      "https://example.com/oatmeal-apples-cinnamon-video2.mp4",
    ],
  },
];

export const dinnerList = [
  {
    id: 1,
    name: "Mushroom Risotto",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768634/Recipe-App/dinner/peter-dawn-DzuzZBlIcsM-unsplash_mcepef.jpg",
    cal: 420,
    category: "dinner",
    cooking_time: "45 minutes",
    description:
      "This mushroom risotto is a creamy and satisfying dinner that is perfect for a cozy night in. The combination of earthy mushrooms, garlic, and parmesan cheese create a rich and flavorful dish that is sure to impress.",
    ingredients: [
      { Ing: "Mixed mushrooms", quantity: "1 pound" },
      { Ing: "Chicken or vegetable broth", quantity: "4 cups" },
      { Ing: "Onion, chopped", quantity: "1" },
      { Ing: "Arborio rice", quantity: "1 cup" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Grated parmesan cheese", quantity: "1/2 cup" },
      { Ing: "Chopped parsley", quantity: "1/4 cup" },
      { Ing: "Butter", quantity: "2 tablespoons" },
      { Ing: "Olive oil", quantity: "2 tablespoons" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
    ],
    videos: [
      {
        title: "How to Make Mushroom Risotto",
        url: "https://example.com/risotto_video.mp4",
      },
      {
        title: "Creamy Mushroom Risotto Recipe",
        url: "https://example.com/risotto_video2.mp4",
      },
    ],
  },
  {
    id: 2,
    name: "Grilled Salmon",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768630/Recipe-App/dinner/hoja-studio-Thw3nleO3cM-unsplash_fx0hw1.jpg",
    cal: 380,
    category: "dinner",
    cooking_time: "25 minutes",
    description:
      "This grilled salmon with asparagus is a healthy and delicious dinner option that is quick and easy to make. The salmon is marinated in a simple mixture of olive oil, lemon, and garlic, while the asparagus is roasted to perfection with a sprinkle of parmesan cheese.",
    ingredients: [
      { Ing: "Salmon fillets", quantity: "4 fillets" },
      { Ing: "Asparagus", quantity: "1 pound" },
      { Ing: "Olive oil", quantity: "2 tablespoons" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Juiced", quantity: "1 lemon" },
      { Ing: "Grated parmesan cheese", quantity: "1/4 cup" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
    ],
    videos: [
      {
        title: "Grilled Salmon with Asparagus Recipe",
        url: "https://example.com/salmon_video.mp4",
      },
    ],
  },
  {
    id: 3,
    name: "Chicken Fajitas",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768539/Recipe-App/dinner/casey-lee-awj7sRviVXo-unsplash_i21db3.jpg",
    cal: 480,
    category: "dinner",
    cooking_time: "30 minutes",
    description:
      "These chicken fajitas are a crowd-pleasing dinner option that is perfect for a weeknight meal. The tender and flavorful chicken is seasoned with a blend of spices and cooked with bell peppers and onions, then served with warm tortillas and all the fixings.",
    ingredients: [
      { Ing: "Chicken breast, sliced", quantity: "1 pound" },
      { Ing: "Red bell pepper, sliced", quantity: "1" },
      { Ing: "Green bell pepper, sliced", quantity: "1" },
      { Ing: "Onion, sliced", quantity: "1" },
      { Ing: "Chili powder", quantity: "1 tablespoon" },
      { Ing: "Cumin", quantity: "1 teaspoon" },
      { Ing: "Garlic powder", quantity: "1 teaspoon" },
      { Ing: "Onion powder", quantity: "1 teaspoon" },
      { Ing: "Olive oil", quantity: "2 tablespoons" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
      { Ing: "Tortillas", quantity: "8" },
      { Ing: "Shredded cheddar cheese", quantity: "1 cup" },
      { Ing: "Sour cream", quantity: "1 cup" },
      { Ing: "Salsa", quantity: "1/2 cup" },
    ],
    videos: [
      {
        title: "Easy Chicken Fajitas Recipe",
        url: "https://example.com/fajitas_video.mp4",
      },
      {
        title: "Homemade Chicken Fajitas",
        url: "https://example.com/fajitas_video2.mp4",
      },
    ],
  },
  {
    id: 4,
    name: "Beef Stroganoff",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768559/Recipe-App/dinner/ruyan-ayten-gUFI8SxNvxo-unsplash_alhy0b.jpg",
    cal: 520,
    category: "dinner",
    cooking_time: "1 hour",
    description:
      "This beef stroganoff is a classic and hearty dinner that is perfect for a chilly evening. The tender beef is cooked in a creamy sauce with mushrooms and onions, then served over a bed of egg noodles.",
    ingredients: [
      { Ing: "Beef sirloin, sliced", quantity: "1 pound" },
      { Ing: "Onion, chopped", quantity: "1" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Mushrooms, sliced", quantity: "1 pound" },
      { Ing: "Beef broth", quantity: "1 cup" },
      { Ing: "Sour cream", quantity: "1 cup" },
      { Ing: "Flour", quantity: "2 tablespoons" },
      { Ing: "Tomato paste", quantity: "1 tablespoon" },
      { Ing: "Worcestershire sauce", quantity: "1 tablespoon" },
      { Ing: "Paprika", quantity: "1 teaspoon" },
      { Ing: "Butter", quantity: "2 tablespoons" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
      { Ing: "Egg noodles", quantity: "1 pound" },
    ],
    videos: [
      {
        title: "Beef Stroganoff Recipe",
        url: "https://example.com/stroganoff_video.mp4",
      },
      {
        title: "Classic Beef Stroganoff",
        url: "https://example.com/stroganoff_video2.mp4",
      },
    ],
  },
  {
    id: 5,
    name: "Vegetable Stir",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768627/Recipe-App/dinner/chumil-photo-TK5VlaGqkZc-unsplash_1_vlkaio.jpg",
    cal: 320,
    category: "dinner",
    cooking_time: "20 minutes",
    description:
      "This vegetable stir fry is a healthy and flavorful dinner that is perfect for a quick and easy meal. The combination of colorful vegetables, garlic, and ginger create a fragrant and delicious dish that is sure to satisfy.",
    ingredients: [
      { Ing: "Red bell pepper, sliced", quantity: "1" },
      { Ing: "Bell pepper, sliced", quantity: "1" },
      { Ing: "Onion, sliced", quantity: "1" },
      { Ing: "Carrots, sliced", quantity: "2" },
      { Ing: "Broccoli crown, chopped", quantity: "1" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Grated ginger", quantity: "1 tablespoon" },
      { Ing: "Soy sauce", quantity: "2 tablespoons" },
      { Ing: "Honey", quantity: "2 tablespoons" },
      { Ing: "Olive oil", quantity: "2 tablespoons" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
      { Ing: "Cooked rice", quantity: "4 cups" },
    ],
    videos: [
      {
        title: "Vegetable Stir Fry Recipe",
        url: "https://example.com/stirfry_video.mp4",
      },
      {
        title: "Healthy Vegetable Stir Fry",
        url: "https://example.com/stirfry_video2.mp4",
      },
    ],
  },
  {
    id: 6,
    name: "Spaghetti Meatballs",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768627/Recipe-App/dinner/chumil-photo-TK5VlaGqkZc-unsplash_1_vlkaio.jpg",
    cal: 650,
    category: "dinner",
    cooking_time: "45 minutes",
    description:
      "Spaghetti and meatballs is a classic Italian-American dish that is perfect for a comforting and satisfying dinner. The homemade meatballs are cooked in a rich tomato sauce and served over a bed of spaghetti.",
    ingredients: [
      { Ing: "Ground beef", quantity: "1 pound" },
      { Ing: "Breadcrumbs", quantity: "1/2 cup" },
      { Ing: "Grated parmesan cheese", quantity: "1/4 cup" },
      { Ing: "Egg", quantity: "1" },
      { Ing: "Garlic powder", quantity: "1 teaspoon" },
      { Ing: "Onion powder", quantity: "1 teaspoon" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
      { Ing: "Olive oil", quantity: "1 tablespoon" },
      { Ing: "Onion, chopped", quantity: "1" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Crushed tomatoes", quantity: "1 can" },
      { Ing: "Dried basil", quantity: "1 teaspoon" },
      { Ing: "Dried oregano", quantity: "1 teaspoon" },
      { Ing: "Red pepper flakes", quantity: "1/2 teaspoon" },
      { Ing: "Spaghetti", quantity: "1 pound" },
    ],
    videos: [
      {
        title: "Spaghetti and Meatballs Recipe",
        url: "https://example.com/spaghetti_video.mp4",
      },
      {
        title: "Homemade Spaghetti and Meatballs",
        url: "https://example.com/spaghetti_video2.mp4",
      },
    ],
  },
  {
    id: 7,
    name: "Grilled Salmon",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768627/Recipe-App/dinner/chumil-photo-TK5VlaGqkZc-unsplash_1_vlkaio.jpg",
    cal: 420,
    category: "dinner",
    cooking_time: "15 minutes",
    description:
      "Grilled salmon is a healthy and delicious dinner option that is perfect for a summer evening. The salmon is seasoned with garlic and herbs, then grilled to perfection.",
    ingredients: [
      { Ing: "Salmon fillets", quantity: "4" },
      { Ing: "Garlic, minced", quantity: "2 cloves" },
      { Ing: "Chopped fresh dill", quantity: "1 tablespoon" },
      { Ing: "Chopped fresh parsley", quantity: "1 tablespoon" },
      { Ing: "Lemon, sliced", quantity: "1" },
      { Ing: "Olive oil", quantity: "2 tablespoons" },
      { Ing: "Salt and pepper, to taste", quantity: "To taste" },
    ],
    videos: [
      {
        title: "Grilled Salmon Recipe",
        url: "https://example.com/salmon_video.mp4",
      },
      {
        title: "Healthy Grilled Salmon",
        url: "https://example.com/salmon_video2.mp4",
      },
    ],
  },
];

export const lunchList = [
  {
    id: 1,
    name: "Chicken Wrap",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768288/Recipe-App/lunch/monika-grabkowska-pCxJvSeSB5A-unsplash_foecvh.jpg",
    cal: 450,
    category: "lunch",
    cooking_time: "15 minutes",
    description:
      "This spicy chicken wrap is the perfect lunch option for those who love a little heat. The tender chicken is seasoned with a spicy blend of cumin, paprika, and chili powder, and then wrapped up with fresh veggies and a tangy yogurt sauce.",
    ingredients: [
      { Ing: "Boneless, skinless chicken breasts", quantity: "2" },
      { Ing: "Ground cumin", quantity: "1 tsp" },
      { Ing: "Smoked paprika", quantity: "1 tsp" },
      { Ing: "Chili powder", quantity: "1 tsp" },
      { Ing: "Olive oil", quantity: "1 tbsp" },
      { Ing: "Large tortilla wraps", quantity: "4" },
      { Ing: "Shredded lettuce", quantity: "1 cup" },
      { Ing: "Sliced cherry tomatoes", quantity: "1 cup" },
      { Ing: "Sliced red onion", quantity: "1/2 cup" },
      { Ing: "Plain Greek yogurt", quantity: "1/2 cup" },
      { Ing: "Chopped fresh cilantro", quantity: "2 tbsp" },
      { Ing: "Lime juice", quantity: "1 tbsp" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
    ],
    videos: [
      {
        url: "https://example.com/spicy-chicken-wrap-video.mp4",
        title: "How to Make Spicy Chicken Wraps",
      },
      {
        url: "https://example.com/spicy-chicken-wrap-tutorial.mp4",
        title: "Step-by-Step Tutorial for Spicy Chicken Wraps",
      },
    ],
  },
  {
    id: 2,
    name: "Grilled Shrimp",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768293/Recipe-App/lunch/mariana-medvedeva-fk6IiypMWss-unsplash_qdhqnd.jpg",
    cal: 350,
    category: "lunch",
    cooking_time: "20 minutes",
    description:
      "This Greek salad with grilled shrimp is a light and refreshing lunch option that's packed with protein and healthy veggies. The shrimp is marinated in a lemony herb mixture and then grilled to perfection, while the salad is loaded with crunchy cucumber, juicy cherry tomatoes, and tangy feta cheese.",
    ingredients: [
      { Ing: "Large shrimp, peeled and deveined", quantity: "1 lb" },
      { Ing: "Olive oil", quantity: "1/4 cup" },
      { Ing: "Lemon juice", quantity: "2 tbsp" },
      { Ing: "Chopped fresh oregano", quantity: "1 tbsp" },
      { Ing: "Chopped fresh parsley", quantity: "1 tbsp" },
      { Ing: "Garlic, minced", quantity: "1 clove" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
      { Ing: "Mixed greens", quantity: "4 cups" },
      { Ing: "Sliced cucumber", quantity: "1 cup" },
      { Ing: "Halved cherry tomatoes", quantity: "1 cup" },
      { Ing: "Crumbled feta cheese", quantity: "1/2 cup" },
      { Ing: "Sliced Kalamata olives", quantity: "1/4 cup" },
      { Ing: "Chopped red onion", quantity: "1/4 cup" },
      { Ing: "Greek vinaigrette", quantity: "1/4 cup" },
    ],

    videos: [
      {
        url: "https://example.com/greek-salad",
        title: "Learn How to Make a Greek Salad with Grilled Shrimp",
      },
    ],
  },
  {
    id: 3,
    name: "Veggie Wrap",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768299/Recipe-App/lunch/chumil-photo-TK5VlaGqkZc-unsplash_fejxyu.jpg",
    cal: 300,
    category: "lunch",
    cooking_time: "10 minutes",
    description:
      "This Mediterranean veggie wrap is a delicious and healthy lunch option that's packed with flavor. The wrap is filled with grilled veggies, creamy hummus, and tangy feta cheese, making it a satisfying and nutritious meal.",
    ingredients: [
      { Ing: "Red bell pepper, sliced", quantity: "1" },
      { Ing: "Yellow bell pepper, sliced", quantity: "1" },
      { Ing: "Zucchini, sliced", quantity: "1" },
      { Ing: "Yellow squash, sliced", quantity: "1" },
      { Ing: "Olive oil", quantity: "1 tbsp" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
      { Ing: "Large tortilla wraps", quantity: "4" },
      { Ing: "Hummus", quantity: "1/2 cup" },
      { Ing: "Crumbled feta cheese", quantity: "1/2 cup" },
      { Ing: "Chopped fresh parsley", quantity: "1/4 cup" },
    ],
    videos: [
      {
        url: "https://example.com/mediterranean-veggie-wrap-video.mp4",
        title: "How to Make a Mediterranean Veggie Wrap",
      },
      {
        url: "https://example.com/mediterranean-veggie-wrap-tutorial.mp4",
        title: "Step-by-Step Tutorial for Making a Mediterranean Veggie Wrap",
      },
    ],
  },
  {
    id: 4,
    name: "Turkey Club",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768306/Recipe-App/lunch/ronise-daluz-LgTyii0GDKQ-unsplash_w656wa.jpg",
    cal: 550,
    category: "lunch",
    cooking_time: "15 minutes",
    description:
      "This turkey club sandwich is a classic lunch option that's perfect for satisfying hunger cravings. The sandwich is loaded with roasted turkey breast, crispy bacon, juicy tomato, fresh lettuce, and tangy mayo, all piled high on toasted bread.",
    ingredients: [
      { Ing: "Bread", quantity: "8 slices" },
      { Ing: "Roasted turkey breast, sliced", quantity: "1 lb" },
      { Ing: "Bacon, cooked until crispy", quantity: "8 slices" },
      { Ing: "Tomatoes, sliced", quantity: "2" },
      { Ing: "Lettuce", quantity: "4 leaves" },
      { Ing: "Mayonnaise", quantity: "1/2 cup" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
    ],
    videos: [
      {
        url: "https://example.com/turkey-club-sandwich-video.mp4",
        title: "How to Make a Turkey Club Sandwich",
      },
      {
        url: "https://example.com/turkey-club-sandwich-tutorial.mp4",
        title: "Step-by-Step Tutorial for Making a Turkey Club Sandwich",
      },
    ],
  },
  {
    id: 5,
    name: "Quinoa Salad",
    img: "https://res.cloudinary.com/dxsom7jmx/image/upload/v1680768373/Recipe-App/lunch/k8-w8OCrTBTaMc-unsplash_ihuj0c.jpg",
    cal: 400,
    category: "lunch",
    cooking_time: "20 minutes",
    description:
      "This quinoa and black bean salad is a hearty and nutritious lunch option that's perfect for those who are looking for a plant-based meal. The salad is loaded with protein-rich quinoa, fiber-packed black beans, fresh veggies, and a tangy lime dressing. It's a delicious and filling salad that's easy to make and great for meal prep.",
    ingredients: [
      { Ing: "Quinoa", quantity: "1 cup" },
      { Ing: "Water", quantity: "2 cups" },
      { Ing: "Black beans, drained and rinsed", quantity: "1 can" },
      { Ing: "Bell pepper, diced", quantity: "1" },
      { Ing: "Yellow bell pepper, diced", quantity: "1" },
      { Ing: "Red onion, diced", quantity: "1/2" },
      { Ing: "Chopped fresh cilantro", quantity: "1/2 cup" },
      { Ing: "Olive oil", quantity: "1/4 cup" },
      { Ing: "Lime juice", quantity: "3 tbsp" },
      { Ing: "Honey", quantity: "1 tsp" },
      { Ing: "Cumin", quantity: "1 tsp" },
      { Ing: "Salt and pepper to taste", quantity: "To taste" },
    ],
    videos: [
      {
        url: "https://example.com/quinoa-black-bean-salad-video.mp4",
        title: "How to Make a Quinoa and Black Bean Salad",
      },
      {
        url: "https://example.com/quinoa-black-bean-salad-tutorial.mp4",
        title: "Step-by-Step Tutorial for Making a Quinoa and Black Bean Salad",
      },
    ],
  },
];
