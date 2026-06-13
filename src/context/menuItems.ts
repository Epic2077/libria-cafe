import type { Language } from "./LanguageContext";

export const baseCategoryKeys = [
  "all",
  "hotCoffee",
  "coldCoffee",
  "brewedCoffee",
  "coldBrew",
  "warmDrinks",
  "hotDrinks",
  "mocktails",
  "smoothies",
  "shakes",
  "cakesSweets",
  "snacks",
  "food",
] as const;

export type BaseMenuCategoryKey = (typeof baseCategoryKeys)[number];
export type MenuCategoryKey = BaseMenuCategoryKey | (string & {});

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: string;
  category: Exclude<MenuCategoryKey, "all">;
  options?: string[];
  isPopular?: boolean;
  developerSpecial?: boolean;
}

export interface MenuCategory {
  key: MenuCategoryKey;
  label: string;
}

const menuItemsByLanguage: Record<Language, MenuItem[]> = {
  en: [
    // Hot Coffee
    {
      id: 1,
      name: "Espresso",
      description:
        "Intense shot pulled from premium single-origin beans with a rich crema on top.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
      isPopular: true,
    },
    {
      id: 2,
      name: "Americano",
      description:
        "Bold espresso shots diluted with hot water for a smooth, clean brew.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
      developerSpecial: true,
    },
    {
      id: 3,
      name: "Latte",
      description:
        "Silky steamed milk poured over rich espresso, finished with a light foam layer.",
      category: "hotCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 4,
      name: "Mocha",
      description:
        "Rich espresso blended with chocolate sauce and steamed milk, topped with whipped cream.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
    },
    {
      id: 5,
      name: "Cappuccino",
      description:
        "Classic Italian coffee with equal parts espresso, steamed milk, and velvety foam.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    // Cold Coffee
    {
      id: 6,
      name: "Ice Americano",
      description:
        "Bold espresso shots over ice with cold water for a crisp, refreshing drink.",
      category: "coldCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "soda"],
    },
    {
      id: 7,
      name: "Ice Latte",
      description:
        "Smooth espresso poured over ice and cold milk for a chilled, creamy classic.",
      category: "coldCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 8,
      name: "Ice Mocha",
      description:
        "Chilled espresso, chocolate sauce, and cold milk over ice with a hint of sweetness.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica"],
    },
    {
      id: 9,
      name: "Affogato",
      description:
        "A scoop of vanilla ice cream drowned in a hot shot of espresso.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 10,
      name: "Frappuccino",
      description:
        "Blended espresso, milk, and ice for a thick, creamy frozen coffee drink.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 11,
      name: "Fruit Coffee",
      description:
        "Espresso paired with fresh fruit flavors for a bright, refreshing twist on cold coffee.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "Fruits"],
    },
    {
      id: 12,
      name: "Peanut Cream",
      description:
        "Rich espresso topped with a sweet and salty peanut cream foam.",
      category: "coldCoffee",
      options: ["blend", "arabica", "ice cream"],
    },
    {
      id: 13,
      name: "Nutella Cream",
      description:
        "Smooth espresso layered under a luxurious Nutella cream foam.",
      category: "coldCoffee",
      options: ["blend", "arabica", "ice cream"],
    },
    // Brewed Coffee
    {
      id: 14,
      name: "Kamex",
      description:
        "Slow-brewed coffee using the Kamex method for a clean, full-bodied cup.",
      category: "brewedCoffee",
    },
    {
      id: 15,
      name: "V60",
      description:
        "Hand-poured single-origin coffee through a V60 dripper for a bright, nuanced flavor.",
      category: "brewedCoffee",
    },
    // Cold Brew
    {
      id: 16,
      name: "Cold Brew Classic",
      description:
        "Coffee steeped cold for 24 hours for a smooth, low-acid concentrate.",
      category: "coldBrew",
    },
    {
      id: 17,
      name: "Cold Brew Granadin",
      description:
        "Cold brew coffee with grenadine syrup for a sweet, fruity twist.",
      category: "coldBrew",
    },
    {
      id: 18,
      name: "Cold Brew Lemon Soda",
      description: "Refreshing cold brew topped with sparkling lemon soda.",
      category: "coldBrew",
    },
    {
      id: 19,
      name: "Cold Brew PenuColda",
      description:
        "Cold brew with coconut and pineapple notes for a tropical escape.",
      category: "coldBrew",
    },
    {
      id: 20,
      name: "Cold Brew Mango Lemon",
      description:
        "Cold brew brightened with fresh mango and a squeeze of lemon.",
      category: "coldBrew",
    },
    // Warm Drinks
    {
      id: 21,
      name: "Tea",
      description: "Classic hot tea brewed to order.",
      category: "warmDrinks",
    },
    {
      id: 22,
      name: "Herbal Tea",
      description: "A soothing blend of aromatic herbs and botanicals.",
      category: "warmDrinks",
    },
    {
      id: 23,
      name: "Mixed Herbal Tea",
      description: "A curated mix of herbal teas for a balanced, calming sip.",
      category: "warmDrinks",
    },
    // Hot Drinks
    {
      id: 24,
      name: "White / Hot Chocolate",
      description: "Rich, velvety chocolate melted with steamed milk.",
      category: "hotDrinks",
    },
    {
      id: 25,
      name: "Masala",
      description: "Warming spiced chai brewed with milk and fragrant spices.",
      category: "hotDrinks",
    },
    {
      id: 26,
      name: "Crack Tea",
      description: "A bold, addictive blend of tea with a secret spice mix.",
      category: "hotDrinks",
    },
    {
      id: 27,
      name: "Nutella / Lotus Milk",
      description:
        "Steamed milk swirled with creamy Nutella or Lotus Biscoff spread.",
      category: "hotDrinks",
    },
    {
      id: 28,
      name: "Chocolate / Biscuit Milk",
      description:
        "Steamed milk with chocolate and crushed biscuit for a comforting treat.",
      category: "hotDrinks",
    },
    {
      id: 29,
      name: "Butter Biscuit",
      description:
        "Warm milk with a buttery biscuit flavor, smooth and comforting.",
      category: "hotDrinks",
    },
    {
      id: 30,
      name: "Caramel Milk",
      description:
        "Steamed milk with rich caramel syrup for a sweet, warming drink.",
      category: "hotDrinks",
    },
    // Mocktails
    {
      id: 31,
      name: "PB",
      description: "Creamy peanut butter mocktail with a smooth, nutty finish.",
      category: "mocktails",
    },
    {
      id: 32,
      name: "Original",
      description:
        "Our signature house mocktail with a refreshing blend of flavors.",
      category: "mocktails",
    },
    {
      id: 33,
      name: "Ginger Lime",
      description: "Zesty ginger and fresh lime for a bold, invigorating sip.",
      category: "mocktails",
    },
    {
      id: 34,
      name: "Cool Garden",
      description: "Crisp cucumber and mint mocktail, light and refreshing.",
      category: "mocktails",
    },
    {
      id: 35,
      name: "Africola",
      description:
        "A vibrant, fruity mocktail inspired by bold African flavors.",
      category: "mocktails",
    },
    {
      id: 36,
      name: "Pak",
      description: "A bold and tangy mocktail with a unique flavor profile.",
      category: "mocktails",
    },
    {
      id: 37,
      name: "Violeta",
      description: "Floral violet syrup with a light, sweet finish.",
      category: "mocktails",
    },
    {
      id: 38,
      name: "Pink Rose",
      description:
        "Delicate rose water and fruit blend with a beautiful pink hue.",
      category: "mocktails",
    },
    // Smoothies
    {
      id: 39,
      name: "Tropical",
      description:
        "A vibrant blend of tropical fruits for a refreshing, sunny sip.",
      category: "smoothies",
    },
    {
      id: 40,
      name: "Escream",
      description: "Creamy blended smoothie with a sweet, indulgent flavor.",
      category: "smoothies",
    },
    {
      id: 41,
      name: "Sisa",
      description: "A refreshing blend of seasonal fruits.",
      category: "smoothies",
    },
    {
      id: 42,
      name: "Mangom",
      description:
        "Lush mango smoothie, thick and bursting with tropical sweetness.",
      category: "smoothies",
    },
    {
      id: 43,
      name: "Mamba",
      description: "A bold, energizing smoothie blend.",
      category: "smoothies",
    },
    // Shakes
    {
      id: 44,
      name: "Peanut Butter",
      description: "Thick, creamy shake loaded with rich peanut butter flavor.",
      category: "shakes",
    },
    {
      id: 45,
      name: "Biscuit",
      description: "Indulgent shake blended with crushed biscuits and cream.",
      category: "shakes",
    },
    {
      id: 46,
      name: "Nutella",
      description: "Velvety shake swirled with Nutella and topped with cream.",
      category: "shakes",
    },
    {
      id: 47,
      name: "Lotus",
      description: "Creamy shake made with the iconic Lotus Biscoff spread.",
      category: "shakes",
    },
    {
      id: 48,
      name: "Oreo",
      description: "Classic Oreo shake blended with milk and cream.",
      category: "shakes",
    },
    {
      id: 49,
      name: "Chocolate Banana",
      description:
        "Rich chocolate shake with fresh banana for a classic combo.",
      category: "shakes",
    },
    // Cakes & Sweets
    {
      id: 50,
      name: "Baqlava",
      description:
        "Traditional Middle Eastern pastry with layers of filo and honey-soaked nuts.",
      category: "cakesSweets",
    },
    {
      id: 51,
      name: "Cookies",
      description: "Freshly baked cookies, crispy outside and soft inside.",
      category: "cakesSweets",
    },
    {
      id: 52,
      name: "Cake of the Day",
      description: "Ask your server for today's freshly made cake selection.",
      category: "cakesSweets",
    },
    // Snacks
    {
      id: 53,
      name: "Toast Kaperze",
      description:
        "Toasted bread topped with capers, cream cheese, and fresh herbs.",
      category: "snacks",
    },
    {
      id: 54,
      name: "Peanut Butter Toast",
      description: "Thick toast generously spread with creamy peanut butter.",
      category: "snacks",
    },
    {
      id: 55,
      name: "Nutella Banana Toast",
      description: "Warm toast with Nutella and fresh banana slices.",
      category: "snacks",
    },
    {
      id: 56,
      name: "Pepperoni Toast",
      description:
        "Crispy toast topped with spicy pepperoni and melted cheese.",
      category: "snacks",
    },
    {
      id: 57,
      name: "Bandari Sandwich",
      description: "A bold, spicy southern-style sandwich packed with flavor.",
      category: "snacks",
    },
    {
      id: 58,
      name: "Chicken / Beef Mediterranean Sandwich",
      description:
        "Grilled chicken or beef with Mediterranean herbs and fresh vegetables.",
      category: "snacks",
    },
    {
      id: 59,
      name: "Kashk Eggplant",
      description:
        "Classic Persian eggplant dip with kashk, dried mint, and caramelized onion.",
      category: "snacks",
    },
    {
      id: 60,
      name: "Vegetable Noodle",
      description: "Stir-fried noodles with fresh seasonal vegetables.",
      category: "snacks",
    },
    {
      id: 61,
      name: "Chicken Noodle",
      description: "Savory noodles tossed with tender grilled chicken.",
      category: "snacks",
    },
    {
      id: 62,
      name: "Dopiaze Aloo",
      description: "Spiced potato and onion dish with Persian seasoning.",
      category: "snacks",
    },
    {
      id: 63,
      name: "French Fries",
      description: "Crispy golden fries, lightly seasoned and perfectly fried.",
      category: "snacks",
    },
    // Food
    {
      id: 64,
      name: "Omelet",
      description: "Classic fluffy omelet cooked to order.",
      category: "food",
    },
    {
      id: 65,
      name: "Sausage Omelet",
      description: "Hearty omelet filled with savory sausage.",
      category: "food",
    },
    {
      id: 66,
      name: "Sausage and Cheese Wrap",
      description:
        "Grilled sausage and melted cheese wrapped in a warm tortilla.",
      category: "food",
    },
    {
      id: 67,
      name: "Egg and Pepperoni Ciabatta",
      description: "Toasted ciabatta with fried egg and spicy pepperoni.",
      category: "food",
    },
    {
      id: 68,
      name: "Beef Alfredo Ciabatta",
      description: "Ciabatta loaded with creamy beef alfredo sauce.",
      category: "food",
    },
    {
      id: 69,
      name: "Bett Tai Ciabatta",
      description: "Toasted ciabatta with a flavorful Bett Tai style filling.",
      category: "food",
    },
    {
      id: 70,
      name: "Chicken Pesto Ciabatta",
      description: "Grilled chicken with basil pesto on toasted ciabatta.",
      category: "food",
    },
    {
      id: 71,
      name: "Satoori Burger",
      description:
        "Signature Satoori-style burger with special seasoning and fresh toppings.",
      category: "food",
    },
    {
      id: 72,
      name: "American Hot Dog",
      description:
        "Classic American-style hot dog loaded with all the toppings.",
      category: "food",
    },
    {
      id: 73,
      name: "Chicken Alfredo Pasta",
      description: "Creamy alfredo pasta with tender grilled chicken.",
      category: "food",
    },
    {
      id: 74,
      name: "Chicken Pesto Pasta",
      description:
        "Al dente pasta tossed with basil pesto and grilled chicken.",
      category: "food",
    },
  ],
  fa: [
    // Hot Coffee
    {
      id: 1,
      name: "اسپرسو",
      description: "شات غلیظ از دانه‌های تک‌مبدأ با کِرِمای طلایی روی آن.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
      isPopular: true,
    },
    {
      id: 2,
      name: "آمریکانو",
      description:
        "شات‌های اسپرسو رقیق‌شده با آب داغ برای دم‌نوشی ملایم و خالص.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
      developerSpecial: true,
    },
    {
      id: 3,
      name: "لاته",
      description: "شیر بخارپز ابریشمی روی اسپرسوی غنی با لایه‌ای از کف سبک.",
      category: "hotCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 4,
      name: "موکا",
      description: "اسپرسو با سس شکلات و شیر بخارپز، با خامه فراوان روی آن.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica"],
    },
    {
      id: 5,
      name: "کاپوچینو",
      description:
        "قهوه کلاسیک ایتالیایی با سه بخش مساوی اسپرسو، شیر بخارپز و کف مخملی.",
      category: "hotCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    // Cold Coffee
    {
      id: 6,
      name: "آیس آمریکانو",
      description:
        "شات‌های اسپرسو روی یخ با آب سرد برای نوشیدنی تازه و دلنشین.",
      category: "coldCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "soda"],
    },
    {
      id: 7,
      name: "آیس لاته",
      description: "اسپرسو روی یخ و شیر سرد برای یک کلاسیک خنک و خامه‌ای.",
      category: "coldCoffee",
      isPopular: true,
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 8,
      name: "آیس موکا",
      description:
        "اسپرسو سرد، سس شکلات و شیر سرد روی یخ با طعمی شیرین و دلپذیر.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica"],
    },
    {
      id: 9,
      name: "افوگاتو",
      description: "یک اسکوپ بستنی وانیلی غرق‌شده در یک شات داغ اسپرسو.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 10,
      name: "فراپوچینو",
      description:
        "اسپرسو، شیر و یخ بلند شده برای یک نوشیدنی منجمد غلیظ و خامه‌ای.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "syrups"],
    },
    {
      id: 11,
      name: "قهوه میوه‌ای",
      description:
        "اسپرسو با طعم‌های میوه‌های تازه برای تجربه‌ای متفاوت از قهوه سرد.",
      category: "coldCoffee",
      options: ["single", "double", "blend", "arabica", "Fruits"],
    },
    {
      id: 12,
      name: "کِرِم بادام‌زمینی",
      description: "اسپرسوی غنی با کف کِرِم شیرین و شور بادام‌زمینی.",
      category: "coldCoffee",
      options: ["blend", "arabica", "ice cream"],
    },
    {
      id: 13,
      name: "کِرِم نوتلا",
      description: "اسپرسوی ملایم زیر یک کف نوتلای لوکس.",
      category: "coldCoffee",
      options: ["blend", "arabica", "ice cream"],
    },
    // Brewed Coffee
    {
      id: 14,
      name: "کامکس",
      description:
        "قهوه دم‌کشیده آرام با روش کامکس برای فنجانی شفاف و پُرمایه.",
      category: "brewedCoffee",
    },
    {
      id: 15,
      name: "وی‌شصت",
      description:
        "قهوه تک‌مبدأ دست‌ریخته از طریق قیف V60 برای طعمی روشن و ظریف.",
      category: "brewedCoffee",
    },
    // Cold Brew
    {
      id: 16,
      name: "کلد برو کلاسیک",
      description:
        "قهوه دم‌کشیده سرد به مدت ۲۴ ساعت برای کنسانتره‌ای ملایم و کم‌اسید.",
      category: "coldBrew",
    },
    {
      id: 17,
      name: "کلد برو گرنادین",
      description: "کلد برو با شربت گرنادین برای طعمی شیرین و میوه‌ای.",
      category: "coldBrew",
    },
    {
      id: 18,
      name: "کلد برو لیمون سودا",
      description: "کلد برو تازه‌کننده با سودای لیمو.",
      category: "coldBrew",
    },
    {
      id: 19,
      name: "کلد برو پینا کولادا",
      description: "کلد برو با نت‌های نارگیل و آناناس برای حسی استوایی.",
      category: "coldBrew",
    },
    {
      id: 20,
      name: "کلد برو انبه لیمو",
      description: "کلد برو با انبه تازه و فشار لیمو.",
      category: "coldBrew",
    },
    // Warm Drinks
    {
      id: 21,
      name: "چای",
      description: "چای داغ کلاسیک دم‌شده بر اساس سفارش.",
      category: "warmDrinks",
    },
    {
      id: 22,
      name: "دمنوش گیاهی",
      description: "ترکیبی آرام‌بخش از گیاهان معطر و گل‌های طبیعی.",
      category: "warmDrinks",
    },
    {
      id: 23,
      name: "دمنوش گیاهی مخلوط",
      description: "ترکیب گزیده‌ای از دمنوش‌های گیاهی برای یک لحظه آرام.",
      category: "warmDrinks",
    },
    // Hot Drinks
    {
      id: 24,
      name: "شکلات سفید / داغ",
      description: "شکلات غنی و مخملی ذوب‌شده با شیر بخارپز.",
      category: "hotDrinks",
    },
    {
      id: 25,
      name: "ماسالا",
      description: "چای ادویه‌دار گرم‌کننده با شیر و ادویه‌های معطر.",
      category: "hotDrinks",
    },
    {
      id: 26,
      name: "کِرَک تی",
      description: "ترکیب جسورانه و اعتیادآور چای با مخلوطی مخفی از ادویه‌ها.",
      category: "hotDrinks",
    },
    {
      id: 27,
      name: "شیر نوتلا / لوتوس",
      description: "شیر بخارپز با کِرِم نوتلا یا خمیر بیسکویت لوتوس.",
      category: "hotDrinks",
    },
    {
      id: 28,
      name: "شیر شکلات / بیسکویت",
      description:
        "شیر بخارپز با شکلات و بیسکویت خرد شده برای یک نوشیدنی دلنشین.",
      category: "hotDrinks",
    },
    {
      id: 29,
      name: "بیسکویت کره‌ای",
      description: "شیر گرم با طعم بیسکویت کره‌ای، ملایم و دلنشین.",
      category: "hotDrinks",
    },
    {
      id: 30,
      name: "شیر کارامل",
      description:
        "شیر بخارپز با شربت کارامل غنی برای نوشیدنی شیرین و گرم‌کننده.",
      category: "hotDrinks",
    },
    // Mocktails
    {
      id: 31,
      name: "پی‌بی",
      description: "موکتیل خامه‌ای بادام‌زمینی با پایانی ملایم و آجیلی.",
      category: "mocktails",
    },
    {
      id: 32,
      name: "اوریجینال",
      description: "موکتیل خانگی ما با ترکیبی تازه‌کننده از طعم‌ها.",
      category: "mocktails",
    },
    {
      id: 33,
      name: "زنجبیل لیمو",
      description: "زنجبیل تند و لیموی تازه برای یک جرعه پرانرژی.",
      category: "mocktails",
    },
    {
      id: 34,
      name: "باغ خنک",
      description: "موکتیل خیار و نعنا، سبک و تازه‌کننده.",
      category: "mocktails",
    },
    {
      id: 35,
      name: "آفریکولا",
      description: "موکتیل پرطراوت و میوه‌ای الهام‌گرفته از طعم‌های آفریقایی.",
      category: "mocktails",
    },
    {
      id: 36,
      name: "پاک",
      description: "یک موکتیل جسور و تند با پروفایل طعمی منحصربه‌فرد.",
      category: "mocktails",
    },
    {
      id: 37,
      name: "ویولتا",
      description: "شربت بنفشه گلدار با پایانی سبک و شیرین.",
      category: "mocktails",
    },
    {
      id: 38,
      name: "رز صورتی",
      description: "ترکیب آب گل رز و میوه با رنگ صورتی زیبا.",
      category: "mocktails",
    },
    // Smoothies
    {
      id: 39,
      name: "تروپیکال",
      description: "ترکیب پرطراوت میوه‌های استوایی برای یک جرعه آفتابی.",
      category: "smoothies",
    },
    {
      id: 40,
      name: "اسکریم",
      description: "اسموتی خامه‌ای با طعمی شیرین و لذیذ.",
      category: "smoothies",
    },
    {
      id: 41,
      name: "سیسا",
      description: "ترکیب تازه‌کننده‌ای از میوه‌های فصلی.",
      category: "smoothies",
    },
    {
      id: 42,
      name: "مانگوم",
      description: "اسموتی انبه غلیظ و سرشار از شیرینی استوایی.",
      category: "smoothies",
    },
    {
      id: 43,
      name: "مامبا",
      description: "ترکیب اسموتی جسور و پرانرژی.",
      category: "smoothies",
    },
    // Shakes
    {
      id: 44,
      name: "بادام‌زمینی",
      description: "شیک غلیظ و خامه‌ای با طعم غنی بادام‌زمینی.",
      category: "shakes",
    },
    {
      id: 45,
      name: "بیسکویت",
      description: "شیک لذیذ با بیسکویت خرد شده و خامه.",
      category: "shakes",
    },
    {
      id: 46,
      name: "نوتلا",
      description: "شیک مخملی با نوتلا و خامه.",
      category: "shakes",
    },
    {
      id: 47,
      name: "لوتوس",
      description: "شیک خامه‌ای با خمیر بیسکویت لوتوس محبوب.",
      category: "shakes",
    },
    {
      id: 48,
      name: "اورئو",
      description: "شیک کلاسیک اورئو با شیر و خامه.",
      category: "shakes",
    },
    {
      id: 49,
      name: "شکلات موز",
      description: "شیک شکلاتی غنی با موز تازه برای یک ترکیب کلاسیک.",
      category: "shakes",
    },
    // Cakes & Sweets
    {
      id: 50,
      name: "باقلوا",
      description:
        "شیرینی سنتی خاورمیانه‌ای با لایه‌های فیلو و آجیل آغشته به عسل.",
      category: "cakesSweets",
    },
    {
      id: 51,
      name: "کوکی",
      description: "کوکی‌های تازه پخته، ترد از بیرون و نرم از درون.",
      category: "cakesSweets",
    },
    {
      id: 52,
      name: "کیک روز",
      description: "برای انتخاب کیک تازه امروز از سرویسکار بپرسید.",
      category: "cakesSweets",
    },
    // Snacks
    {
      id: 53,
      name: "توست کاپرز",
      description: "نان توست با کِیپر، پنیر خامه‌ای و سبزیجات تازه.",
      category: "snacks",
    },
    {
      id: 54,
      name: "توست بادام‌زمینی",
      description: "توست ضخیم با کِرِم بادام‌زمینی سخاوتمندانه.",
      category: "snacks",
    },
    {
      id: 55,
      name: "توست نوتلا موز",
      description: "توست گرم با نوتلا و برش‌های موز تازه.",
      category: "snacks",
    },
    {
      id: 56,
      name: "توست پپرونی",
      description: "توست ترد با پپرونی تند و پنیر ذوب‌شده.",
      category: "snacks",
    },
    {
      id: 57,
      name: "ساندویچ بندری",
      description: "ساندویچ جسور و تند به سبک جنوبی.",
      category: "snacks",
    },
    {
      id: 58,
      name: "ساندویچ مدیترانه‌ای مرغ / گوشت",
      description: "مرغ یا گوشت کبابی با سبزیجات و ادویه‌های مدیترانه‌ای.",
      category: "snacks",
    },
    {
      id: 59,
      name: "کشک بادمجان",
      description: "دیپ بادمجان کلاسیک ایرانی با کشک، نعنا خشک و پیاز داغ.",
      category: "snacks",
    },
    {
      id: 60,
      name: "نودل سبزیجات",
      description: "نودل سرخ‌شده با سبزیجات تازه فصل.",
      category: "snacks",
    },
    {
      id: 61,
      name: "نودل مرغ",
      description: "نودل خوشمزه با مرغ کبابی لطیف.",
      category: "snacks",
    },
    {
      id: 62,
      name: "دوپیاز آلو",
      description: "غذای سیب‌زمینی و پیاز ادویه‌دار با چاشنی ایرانی.",
      category: "snacks",
    },
    {
      id: 63,
      name: "سیب‌زمینی سرخ‌کرده",
      description: "سیب‌زمینی طلایی و ترد با ادویه سبک.",
      category: "snacks",
    },
    // Food
    {
      id: 64,
      name: "املت",
      description: "املت کلاسیک پفکی بر اساس سفارش.",
      category: "food",
    },
    {
      id: 65,
      name: "املت سوسیس",
      description: "املت دلچسب با سوسیس خوشمزه.",
      category: "food",
    },
    {
      id: 66,
      name: "رپ سوسیس و پنیر",
      description: "سوسیس کبابی و پنیر ذوب‌شده پیچیده در نان تورتیلای گرم.",
      category: "food",
    },
    {
      id: 67,
      name: "چاباتا تخم‌مرغ و پپرونی",
      description: "چاباتای تُست‌شده با تخم‌مرغ سرخ‌شده و پپرونی تند.",
      category: "food",
    },
    {
      id: 68,
      name: "چاباتا گوشت آلفردو",
      description: "چاباتا با سس آلفردوی گوشت خامه‌ای.",
      category: "food",
    },
    {
      id: 69,
      name: "چاباتا بِت تای",
      description: "چاباتای تُست‌شده با فیلینگ خوشمزه به سبک بِت تای.",
      category: "food",
    },
    {
      id: 70,
      name: "چاباتا مرغ پستو",
      description: "مرغ کبابی با پستو ریحان روی چاباتای تُست‌شده.",
      category: "food",
    },
    {
      id: 71,
      name: "برگر ساتوری",
      description:
        "برگر منحصربه‌فرد به سبک ساتوری با ادویه ویژه و تاپینگ‌های تازه.",
      category: "food",
    },
    {
      id: 72,
      name: "هات‌داگ آمریکایی",
      description: "هات‌داگ کلاسیک آمریکایی با تمام تاپینگ‌ها.",
      category: "food",
    },
    {
      id: 73,
      name: "پاستا مرغ آلفردو",
      description: "پاستای خامه‌ای آلفردو با مرغ کبابی لطیف.",
      category: "food",
    },
    {
      id: 74,
      name: "پاستا مرغ پستو",
      description: "پاستای آل‌دنته با پستو ریحان و مرغ کبابی.",
      category: "food",
    },
  ],
};

const categoryLabels: Record<Language, Record<MenuCategoryKey, string>> = {
  en: {
    all: "All",
    hotCoffee: "Hot Coffee",
    coldCoffee: "Ice Coffee",
    brewedCoffee: "Brewed Coffee",
    coldBrew: "Cold Brew",
    warmDrinks: "Warm Drinks",
    hotDrinks: "Hot Drinks",
    mocktails: "Mocktails",
    smoothies: "Smoothies",
    shakes: "Shakes",
    cakesSweets: "Cakes & Sweets",
    snacks: "Snacks",
    food: "Food",
  },
  fa: {
    all: "همه",
    hotCoffee: "قهوه گرم",
    coldCoffee: "قهوه سرد",
    brewedCoffee: "قهوه دمی",
    coldBrew: "کلد برو",
    warmDrinks: "نوشیدنی گرم",
    hotDrinks: "هات درینک",
    mocktails: "موکتیل",
    smoothies: "اسموتی",
    shakes: "شیک",
    cakesSweets: "کیک و شیرینی",
    snacks: "اسنک",
    food: "غذا",
  },
};

const categoryOrder: MenuCategoryKey[] = [...baseCategoryKeys];

export function getMenuItems(language: Language): MenuItem[] {
  return menuItemsByLanguage[language];
}

export function getMenuCategories(language: Language): MenuCategory[] {
  return categoryOrder.map((key) => ({
    key,
    label: categoryLabels[language][key],
  }));
}

// Backward compatibility exports
export const menuItems = menuItemsByLanguage.en;
export const menuCategories = categoryOrder.map(
  (key) => categoryLabels.en[key],
);

export const defaultMenuItemsByLanguage = menuItemsByLanguage;
export const defaultCategoryLabels = categoryLabels;
export const defaultCategoryOrder = categoryOrder;
