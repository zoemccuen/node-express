const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts", (req, res) => {
    const crafts = [
        {
            "id": "1",
            "name": "Beaded JellyFish",
            "image": "bead-jellyfish.jpg",
            "description": "Create a hanging jellyfish using eggcartons and multicolored beads",
            "supplies": [
                "string",
                "egg cartons",
                "beads"
            ]
        },
        {
            "id": "2",
            "name": "Character Bookmarks",
            "image": "bookmarks.jpeg",
            "description": "Create a little birdy bookmark to always remin you were you were",
            "supplies": [
                "yellow construction paper",
                "orange construction paper",
                "black construction paper"
            ]
        },
        {
            "id": "3",
            "name": "Button Flowers",
            "image": "button-flowers.jpeg",
            "description": "Create a fun bouquet of flowers with your favorite buttons",
            "supplies": [
                "multicolored buttons",
                "multicolored flet",
                "green straws",
                "ribbon"
            ]
        },
        {
            "id": "4",
            "name": "Cheerio Necklaces",
            "image": "cheerio-necklace.webp",
            "description": "Create a fun and edible necklace",
            "supplies": [
                "Cheerios or Fruit Loops",
                "Elastic string"
            ]
        },
        {
            "id": "5",
            "name": "Cotton Ball Cupcakes",
            "image": "cotton-ball-cupcakes.webp",
            "description": "Decorate your fun filled cupcake however you want.",
            "supplies": [
                "Construction Paper",
                "Cotton Balls",
                "Black Sharpie",
                "Glitter"
            ]
        },
        {
            "id": "6",
            "name": "School Themed Mason Jars",
            "image": "decorated-jars.jpeg",
            "description": "Let's make mason jars to ",
            "supplies": [
                "Construction Paper",
                "Cotton Balls",
                "Black Sharpie",
                "Glitter"
            ]
        },
        {
            "id": "7",
            "name": "Egg Carton Flowers",
            "image": "egg-carton-flowers.jpg",
            "description": "Make a beautiful bouquet with egg cartons and other items you can find around the house",
            "supplies": [
                "Egg Cartons",
                "Butons",
                "Green Pipe Cleaner",
                "Ribbon",
                "Canvas"
            ]
        },
        {
            "id": "8",
            "name": "Finger Puppets",
            "image": "finger-puppets.jpeg",
            "description": "These little critters are easy to make, and will entertain your little one while they make a show.",
            "supplies": [
                "Pom-poms",
                "Googly Eyes",
                "Pipe Cleaner"
            ]
        },
        {
            "id": "9",
            "name": "Ribbon Flower Headbands",
            "image": "flower-headbands.jpg",
            "description": "Let your little one show off her new style with these pretty and customizable headbands",
            "supplies": [
                "Plain headband",
                "Ribbon",
                "Buttons",
                "Gems"
            ]
        },
        {
            "id": "10",
            "name": "Hand Print Fish Puppets",
            "image": "handprint-fish.jpg",
            "description": "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
            "supplies": [
                "Popsicle sticks",
                "Cardstock",
                "Gems",
                "Googly Eyes"
            ]
        },
        {
            "id": "11",
            "name": "Hand Print Tree",
            "image": "hand-print-tree.jpeg",
            "description": "This is a fun way to get your little one into finger painting.",
            "supplies": [
                "Watercolor Paper",
                "Finger paint"
            ]
        },
        {
            "id": "12",
            "name": "Melted Bead Bowl",
            "image": "melted-bead-bowl.jpeg",
            "description": "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
            "supplies": [
                "Beads",
                "Bowl",
                "Parchment paper"
            ]
        },
        {
            "id": "13",
            "name": "Monster Kites",
            "image": "monster-rolls.jpg",
            "description": "Let's make those scary toilet paper rolls fly!",
            "supplies": [
                "Toilet paper rolls",
                "Paint",
                "Tissue Paper",
                "String"
            ]
        },
        {
            "id": "14",
            "name": "Pool Noodle Boats",
            "image": "noodle-boats.png",
            "description": "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
            "supplies": [
                "Pool Noodle",
                "Straw",
                "Plastic Paper"
            ]
        },
        {
            "id": "15",
            "name": "Paper Plate Bees",
            "image": "paper-plate-bees.jpeg",
            "description": "Let's have fun with making cute little bees, or big bees actually.",
            "supplies": [
                "Paper Plate",
                "Googly Eyes",
                "Close Pins",
                "Black pom poms",
                "Yellow Paint",
                "Black Paint"
            ]
        },
        {
            "id": "16",
            "name": "Paper Plate Dinosaurs",
            "image": "paper-plate-dinosaurs.jpg",
            "description": "Who would have thought that half a paper plate would be the base of a dinosaur.",
            "supplies": [
                "Paper Plate",
                "Paint",
                "Close Pins",
                "Construction Paper"
            ]
        },
        {
            "id": "17",
            "name": "Porcupine Leafs",
            "image": "porcupine-leaf.webp",
            "description": "Let's turn an ordinary paper plate into a fun filled mask.",
            "supplies": [
                "Leafs",
                "Berries",
                "Acorns",
                "Construction Paper"
            ]
        },
        {
            "id": "18",
            "name": "Rainbow Cloud",
            "image": "rainbow-cloud.webp",
            "description": "Some cotton and color and you'll have a beautiful rainbow.",
            "supplies": [
                "Paper Plate",
                "Cotton Balls",
                "Construction Paper"
            ]
        },
        {
            "id": "19",
            "name": "Fun Shaped Crayons",
            "image": "shaped-crayons.jpg",
            "description": "Let's melt some crayons together and let them harden into fun shapes.",
            "supplies": [
                "Broken Crayons",
                "Mold"
            ]
        },
        {
            "id": "20",
            "name": "Straw Farris Wheel",
            "image": "straw-faris-wheel.jpg",
            "description": "It might be too small to ride, but this farris wheel is the most colorful of all.",
            "supplies": [
                "Multicolored straws",
                "Platform"
            ]
        },
        {
            "id": "21",
            "name": "Sunny String",
            "image": "sun-string.jpg",
            "description": "Let's practice our fine motor skills while we weave the string into a fun sun.",
            "supplies": [
                "Yellow String",
                "Paper Plate",
                "Yellow construction paper",
                "Yellow and Orange beads"
            ]
        },
        {
            "id": "22",
            "name": "Tissue Ballerinas",
            "image": "tisue-dancer.jpeg",
            "description": "These beautiful dancers will look great on display",
            "supplies": [
                "Pipe cleaner",
                "Tissue Paper",
                "Elastics"
            ]
        },
        {
            "id": "23",
            "name": "Toilet Paper Roll Animals",
            "image": "toilet-paper-animals.jpeg",
            "description": "These beautiful dancers will look great on display",
            "supplies": [
                "Toilet Paper Rolls",
                "Construction Paper",
                "Googly Eyes"
            ]
        },
        {
            "id": "24",
            "name": "Toilet Paper Butterfly",
            "image": "toilet-paper-butterfly.jpg",
            "description": "Such a sweat little flyer",
            "supplies": [
                "Toilet Paper Rolls",
                "Construction Paper",
                "Googly Eyes",
                "Buttons"
            ]
        },
        {
            "id": "25",
            "name": "Valentines Jar",
            "image": "valentines-jar.webp",
            "description": "So much hearts all in one",
            "supplies": [
                "Clay",
                "Glitter"
            ]
        }];
    console.log("/api/crafts/ called. Returning json");
    res.json(crafts);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
