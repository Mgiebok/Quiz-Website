const questionsData = {
  GK: [
    { q: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai", "Kolkata"], answer: "Delhi" },
    { q: "National animal of India?", options: ["Tiger", "Lion", "Elephant", "Leopard"], answer: "Tiger" },
    { q: "Currency of Japan?", options: ["Yen", "Won", "Dollar", "Peso"], answer: "Yen" },
    { q: "Largest democracy?", options: ["USA", "India", "UK", "China"], answer: "India" },
    { q: "Taj Mahal is in?", options: ["Delhi", "Agra", "Jaipur", "Kolkata"], answer: "Agra" },
    { q: "National bird of India?", options: ["Crow", "Peacock", "Sparrow", "Eagle"], answer: "Peacock" },
    { q: "Sun rises in the?", options: ["North", "South", "East", "West"], answer: "East" },
    { q: "Which is a Union Territory?", options: ["UP", "Maharashtra", "Delhi", "Bihar"], answer: "Delhi" },
    { q: "Who wrote the Indian Constitution?", options: ["Gandhi", "Ambedkar", "Patel", "Nehru"], answer: "Ambedkar" },
    { q: "National flower?", options: ["Rose", "Lotus", "Lily", "Sunflower"], answer: "Lotus" }
  ],

  Science: [
    { q: "Water formula?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
    { q: "Speed of light approx?", options: ["3x10^8 m/s", "1x10^6 m/s", "5x10^7 m/s", "9x10^8 m/s"], answer: "3x10^8 m/s" },
    { q: "Plant prepares food by?", options: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"], answer: "Photosynthesis" },
    { q: "Gas used by humans to breathe?", options: ["CO2", "N2", "O2", "H2"], answer: "O2" },
    { q: "The hardest natural substance?", options: ["Iron", "Gold", "Diamond", "Platinum"], answer: "Diamond" },
    { q: "Earth revolves around?", options: ["Moon", "Sun", "Mars", "Venus"], answer: "Sun" },
    { q: "S.I unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], answer: "Newton" },
    { q: "Which vitamin from sunlight?", options: ["A", "B", "C", "D"], answer: "Vitamin D" },
    { q: "Human body temperature?", options: ["37°C", "39°C", "35°C", "40°C"], answer: "37°C" },
    { q: "Electric current is measured in?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere" }
  ],

  Biology: [
    { q: "Largest human organ?", options: ["Heart", "Skin", "Liver", "Brain"], answer: "Skin" },
    { q: "Blood cells produced in?", options: ["Heart", "Lungs", "Bone marrow", "Kidney"], answer: "Bone marrow" },
    { q: "Basic unit of life?", options: ["Atom", "Cell", "Tissue", "Organ"], answer: "Cell" },
    { q: "Heart pumps?", options: ["Water", "Blood", "Air", "Plasma"], answer: "Blood" },
    { q: "Number of bones in adult human?", options: ["206", "300", "150", "250"], answer: "206" },
    { q: "The brain is protected by?", options: ["Rib cage", "Skull", "Skin", "Spine"], answer: "Skull" },
    { q: "Plants breathe through?", options: ["Nose", "Leaves", "Roots", "Stem"], answer: "Leaves" },
    { q: "Largest gland?", options: ["Heart", "Liver", "Pancreas", "Kidney"], answer: "Liver" },
    { q: "Blood is red due to?", options: ["Platelets", "RBC", "WBC", "Plasma"], answer: "RBC" },
    { q: "Study of fungi?", options: ["Botany", "Zoology", "Mycology", "Ecology"], answer: "Mycology" }
  ],

  Space: [
    { q: "Red planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], answer: "Mars" },
    { q: "Moon of Jupiter?", options: ["Titan", "Europa", "Ganymede", "Phobos"], answer: "Ganymede" },
    { q: "Closest star to Earth?", options: ["Polaris", "Sun", "Sirius", "Vega"], answer: "Sun" },
    { q: "Galaxy we live in?", options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"], answer: "Milky Way" },
    { q: "Planet with rings?", options: ["Earth", "Venus", "Saturn", "Mars"], answer: "Saturn" },
    { q: "First man on moon?", options: ["Armstrong", "Aldrin", "Gagarin", "Kalpana"], answer: "Armstrong" },
    { q: "Shape of Earth?", options: ["Flat", "Round", "Oval", "Rectangle"], answer: "Round" },
    { q: "Sun is a?", options: ["Planet", "Star", "Galaxy", "Comet"], answer: "Star" },
    { q: "Biggest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { q: "Earth takes ___ days to orbit the sun?", options: ["300", "365", "400", "200"], answer: "365" }
  ],

  Math: [
    { q: "2+2=?", options: ["3", "4", "5", "6"], answer: "4" },
    { q: "Square root of 16?", options: ["2", "4", "8", "16"], answer: "4" },
    { q: "5×6=?", options: ["30", "20", "25", "35"], answer: "30" },
    { q: "Value of pi approx?", options: ["2.14", "3.14", "4.14", "1.14"], answer: "3.14" },
    { q: "10/2=?", options: ["2", "5", "10", "8"], answer: "5" },
    { q: "50% of 100?", options: ["20", "40", "50", "10"], answer: "50" },
    { q: "20 squared?", options: ["200", "400", "300", "40"], answer: "400" },
    { q: "7×8=?", options: ["54", "56", "58", "60"], answer: "56" },
    { q: "1000 = ___ × 10", options: ["10", "50", "100", "400"], answer: "100" },
    { q: "Smallest prime?", options: ["1", "2", "3", "5"], answer: "2" }
  ],

  History: [
    { q: "First President of India?", options: ["Gandhi", "Nehru", "Patel", "Rajendra Prasad"], answer: "Rajendra Prasad" },
    { q: "India independence year?", options: ["1945", "1947", "1950", "1952"], answer: "1947" },
    { q: "Who discovered India (sea route)?", options: ["Columbus", "Vasco da Gama", "Marco Polo", "Cook"], answer: "Vasco da Gama" },
    { q: "First Mughal Emperor?", options: ["Akbar", "Babur", "Aurangzeb", "Shah Jahan"], answer: "Babur" },
    { q: "Father of Nation?", options: ["Gandhi", "Nehru", "Tilak", "Bhagat"], answer: "Gandhi" },
    { q: "Quit India movement?", options: ["1930", "1942", "1947", "1950"], answer: "1942" },
    { q: "Great Wall of China built for?", options: ["Decoration", "Defense", "Tourism", "Storage"], answer: "Defense" },
    { q: "Who built Taj Mahal?", options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"], answer: "Shah Jahan" },
    { q: "World War II started?", options: ["1914", "1939", "1945", "1920"], answer: "1939" },
    { q: "First Prime Minister of India?", options: ["Modi", "Gandhi", "Nehru", "Ambedkar"], answer: "Nehru" }
  ],

  Sports: [
    { q: "Olympics held every?", options: ["2 years", "4 years", "3 years", "5 years"], answer: "4 years" },
    { q: "Who won 2022 FIFA World Cup?", options: ["France", "Argentina", "Germany", "Brazil"], answer: "Argentina" },
    { q: "Cricket originated in?", options: ["India", "Australia", "England", "South Africa"], answer: "England" },
    { q: "How many players in football team?", options: ["9", "10", "11", "12"], answer: "11" },
    { q: "Badminton uses?", options: ["Ball", "Shuttlecock", "Puck", "Disc"], answer: "Shuttlecock" },
    { q: "ICC stands for?", options: ["International Cricket Council", "Indian Cricket Club", "International Club", "None"], answer: "International Cricket Council" },
    { q: "T20 match overs?", options: ["10", "20", "50", "40"], answer: "20" },
    { q: "Who is 'King of Football'?", options: ["Ronaldo", "Pele", "Messi", "Neymar"], answer: "Pele" },
    { q: "Olympics symbol has how many rings?", options: ["3", "4", "5", "6"], answer: "5" },
    { q: "Cricket pitch length?", options: ["20 yards", "22 yards", "25 yards", "18 yards"], answer: "22 yards" }
  ],

  Tech: [
    { q: "Programming language of web?", options: ["Python", "C++", "HTML", "Java"], answer: "HTML" },
    { q: "Company behind Windows?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Microsoft" },
    { q: "Founder of Facebook?", options: ["Jobs", "Bezos", "Zuckerberg", "Gates"], answer: "Zuckerberg" },
    { q: "Android is based on?", options: ["iOS", "Windows", "Linux", "MacOS"], answer: "Linux" },
    { q: "CPU stands for?", options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Performance Unit"], answer: "Central Processing Unit" },
    { q: "Main memory is?", options: ["ROM", "RAM", "Hard disk", "Pen drive"], answer: "RAM" },
    { q: "Google's browser?", options: ["Bing", "Chrome", "Edge", "Safari"], answer: "Chrome" },
    { q: "Shortcut to copy?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+A"], answer: "Ctrl+C" },
    { q: "WhatsApp owned by?", options: ["Google", "Meta", "Microsoft", "Apple"], answer: "Meta" },
    { q: "Binary uses?", options: ["0 & 3", "1 & 2", "0 & 1", "2 & 3"], answer: "0 & 1" }
  ],

  Music: [
    { q: "Beethoven was?", options: ["Composer", "Painter", "Poet", "Scientist"], answer: "Composer" },
    { q: "Famous pop singer?", options: ["Adele", "Shakespeare", "Einstein", "Picasso"], answer: "Adele" },
    { q: "Instrument with keys?", options: ["Drum", "Guitar", "Piano", "Flute"], answer: "Piano" },
    { q: "Rap God singer?", options: ["Eminem", "Drake", "Justin", "Weeknd"], answer: "Eminem" },
    { q: "Indian classical singer?", options: ["Lata Mangeshkar", "Deepika", "Alia", "Hema"], answer: "Lata Mangeshkar" },
    { q: "Sitar played by?", options: ["Ravi Shankar", "Arjit", "Rafi", "SPB"], answer: "Ravi Shankar" },
    { q: "Song with rhythm?", options: ["Poem", "Music", "Drama", "Play"], answer: "Music" },
    { q: "Slow emotional song?", options: ["Rock", "Metal", "Ballad", "Jazz"], answer: "Ballad" },
    { q: "Famous Korean band?", options: ["BTS", "1D", "Backstreet", "Maroon5"], answer: "BTS" },
    { q: "Pop queen?", options: ["Selena", "Rihanna", "Madonna", "Dua Lipa"], answer: "Madonna" }
  ],

  Art: [
    { q: "Mona Lisa painted by?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: "Da Vinci" },
    { q: "Famous sculpture?", options: ["David", "Mona Lisa", "Starry Night", "The Scream"], answer: "David" },
    { q: "Starry Night painter?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], answer: "Van Gogh" },
    { q: "Art of paper folding?", options: ["Origami", "Karate", "Calligraphy", "Sketching"], answer: "Origami" },
    { q: "Primary colors include?", options: ["Red", "Black", "Grey", "Pink"], answer: "Red" },
    { q: "Famous Indian painter?", options: ["MF Hussain", "SRK", "Modi", "Dhoni"], answer: "MF Hussain" },
    { q: "Painting surface?", options: ["Canvas", "Steel", "Wood", "Plastic"], answer: "Canvas" },
    { q: "Sculpture made of?", options: ["Pizza", "Clay", "Glass", "Rubber"], answer: "Clay" },
    { q: "Art museum called?", options: ["Library", "Gallery", "Theatre", "Stadium"], answer: "Gallery" },
    { q: "Portrait means?", options: ["Landscape", "Face painting", "Wall", "Dance"], answer: "Face painting" }
  ]
};