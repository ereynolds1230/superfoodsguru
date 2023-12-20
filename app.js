
const nunjucks = require('nunjucks');
const express = require('express');
var path = require('path');
const app = express();

// Configure Nunjucks
nunjucks.configure('templates', {
    autoescape: true,
    express: app,
});

// Serve static files
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));


app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'), { "headers": { "Content-Type": "application/javascript" } });
});

// Set 'views' directory for any views, will default to 'views' if 'templates' is not found
app.set('views', 'templates');

// Object list for foods.html template
let foods = [
    {
      "name": "Eggs",
      "nutrients": "Protein, Omega 3 Fatty Acids, B Vitamins",
      "description": "Although eggs are a commonly found, regurlar staple of many cultures, don't underestimate the nutritional power of these nuggets of gold",
      "video": "https://www.youtube.com/embed/--Rx7EZyC7s?si=AouS0LY8DZ9W6m70"
    },
    {
      "name": "Sauerkraut",
      "nutrients": "Vitamin C, Probiotics, Prebiotics",
      "description": "This food, well-known in German cuisine, is known to be a powehouse for your microbiome.",
      "video": "https://www.youtube.com/embed/jmf83p-BiXA?si=cVWhTy1LDccp7lwM"
    },
    {
      "name": "Avocados",
      "nutrients": "Monounsaturated Fats, Oleic Acid, Leutin Zeaxanthin, Fiber",
      "description": "These delicious fruits (yes, they are fruits) are full of good fats and help you to better absorb vitamins and minerals.",
      "video": "https://www.youtube.com/embed/HlkW6kEIpnA?si=va_Ftl-dUhOKNeiZ",
    },
    {
      "name": "Artichokes",
      "nutrients": "Prebiotic Fiber, Folates",
      "description": "With their fiber content, artichokes are a great way to help lose weight, feed the good bacteria in your gut, and even help to boost DHT in men!",
      "video":"https://www.youtube.com/embed/GmiqJTnW9Qs?si=O1Hm8y6NGf6K5Hhi"
    },
    {
      "name": "Olives/Olive Oil",
      "nutrients": "Vitamin E, Polyphenols, Monounsaturated Fat",
      "description": "Olive oil, the staple of all Mediterranean cuisine, is excellent for skin, heart, and gut health. Click the video below to hear Dr. Gundry's expertise and research.",
      "video": "https://www.youtube.com/embed/H5mhYpKUlgk?si=vQhSuJT2vYjWy4SR"
    },
    {
      "name": "Wild-Caught Salmon",
      "nutrients": "Omega 3 Fats, Protein",
      "description": "Wild caught salmon, not to be substituted by farm-raised salmon, is an excellent source of omega 3 fatty acids, which are highly beneficial for your body's natural hormone production, heart health, and brain health.",
      "video": "https://www.youtube.com/embed/0WmRW3ICbA0?si=Mnega6vvMQVhZm63"
    },
    {
      "name": "Kimchi",
      "nutrients": "Prebiotic Fiber, Probiotics, Vitamin K2",
      "description": "This popular Korean dish is excellent for your microbiome and gut health.",
      "video": "https://www.youtube.com/embed/DmlxAVvOGiY?si=N0yrLzgTVPGf8SKz"
    },
    {
      "name": "Lemons",
      "nutrients": "Vitamin C, Potassium, Calcium, Magnesium",
      "description": "This tart citrus fruit brings a refreshing tanginess to both sweet and savory foods. Not only does this fruit hydrate you, but it is excellent for supporting liver health. Squeeze some fresh lemon juice in water for a fantastic thirst quencher!",
      "video":"https://www.youtube.com/embed/xT-xBk8-UoQ?si=3i5WZFMqpg3pB20O"
    }
];



// Object list for herbs_spices.html
let herbs = [
    {
      "name": "Rose Hips",
      "nutrients": "Vitamin C, Beta Carotein, Fiber",
      "description": "Rose hips, the 'fruit' of the rose, are harvested in the fall, and are usually dried to make a tart and flavorful tea. This herb is excellent for youthful skin and a healthy immune system.",
      "video": "https://www.youtube.com/embed/InBz4WihXT0?si=Z8_zFBghjQh_1-Es"
    },
    {
      "name": "Maca Root",
      "nutrients": "Zinc",
      "description": "This root, indeginous to Peru, is an adaptogen, known for increasing endurance and promoting hormonal health.",
      "video": "https://www.youtube.com/embed/dwBq2FVL--8?si=JNE1TaanrycWBC6H"
    },
    {
      "name": "Turmeric",
      "nutrients": "Curcumins, Antioxidants",
      "description": "This spice, commonly used in Thai and Indian cuisine, is full of incredibly potent antioxidants that decrease inflammation and strengthens the immune system.",
      "video": "https://www.youtube.com/embed/Rn7-ZHHjD8I?si=AIyEEuJJNt9DfoI0"
    },
    {
      "name": "Green Tea",
      "nutrients": "Antioxidants, L-Theanine, EGCG", 
      "description": "Highly regarded and used in Chinese and Japanese royal ceremonies, green tea is filled with antioxidants and EGCG, known for increasing metabolism.",
      "video":"https://www.youtube.com/embed/W1Bj7sKWxi8?si=tWTGPZss8_ruN6zR"
    },
    {
      "name": "Garlic",
      "nutrients": "Vitamin B6, Manganese, Vitaimin C, Selenium, Antioxidants",
      "description":"Garlic can be found in almost any cuisine. With it's rich flavor, it is the perfect savory spice that is a powerhouse for the immune system. In additon, it is a great parasite repellent.There is some validitiy to the legend of repelling vampires with the power of garlic!",
      "video":"https://www.youtube.com/embed/p1H4520GlfQ?si=j0fg6V6ljEMA_CqA"
    },
    {
      "name":"Spirulina",
      "nutrients":"Protein, Chlorophyll, Copper, Omega 3 Fatty Acids",
      "description":"This stikingly deep blue-green algae is just as rich in nutrients as it is in color.",
      "video":"https://www.youtube.com/embed/-NOq7ZUfkY8?si=3A8n0b1480mVuAKl"
    }
];

// Object list for recipes.html
let recipes = [
  {
    "name": "Avocado Chocolate Mousse",
    "ingredients": "Avocados, Raw Cocoa Powder",
    "video": "https://www.youtube.com/embed/QEpmrWOkH70?si=8cxhAW-VV6Oy0JeY"
  },
  {
    "name": "Fried Artichoke Hearts",
    "ingredients": "Artichokes, Lemons, Olive Oil",
    "video": "https://www.youtube.com/embed/cFx97DGswik?si=jy_XiyAoR3CQK6ja"
  },
  {
    "name": "Spinach Artichoke Dip",
    "ingredients": "Garlic, Artichoke, Spinach",
    "video": "https://www.youtube.com/embed/zGc6IPePDGA?si=cdfe1rhqb4h8UDKY",
  },
  {
    "name": "Baked Salmon",
    "ingredients":"Salmon, Garlic, Lemon",
    "video":"https://www.youtube.com/embed/2uYoqclu6so?si=5SIdXfnXuDmeQFl7"
  },
  {
    "name": "Egg and Avocado Toast",
    "ingredients":"Avocados, Eggs",
    "video":"https://www.youtube.com/embed/MqYPKimycmI?si=F3ifTd7oYXyQDiH8"
  },
  {
    "name": "Reuben Sandwich",
    "ingredients": "Sauerkraut",
    "video":"https://www.youtube.com/embed/DpI9JtaMtec?si=HJv3XTAKBLkEKsFd"
  },
  
];

// Define routes
app.get('/', (req, res) => {
    res.render('home.html', { title: 'Home'});
});

app.get('/foods', (req, res) => {
    res.render('foods.html', { title: 'Foods', foods: foods  });
});

app.get('/herbs_spices', (req, res) => {
    res.render('herbs_spices.html', { title: 'Herbs & Spices', pageTitle: 'Discover Aromatic Herbs & Spices', herbs: herbs});
});

app.get('/recipes', (req, res) => {
    res.render('recipes.html', { title: 'Recipes', pageTitle: 'Try Delicious Recipes', recipes: recipes });
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



