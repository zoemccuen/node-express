const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts", (req,res)=>{
    console.log("Someone is requesting our api");
    const crafts = [];
    crafts[0] = {
        name: "Beaded JellyFish",
        img: "crafts/bead-jellyfish.jpg",
        description: "Create a hanging jellyfish using eggcartons and multicolored beads",
        supplies: [
            "string",
            "egg cartons",
            "beads"
        ]
    };
    crafts[1] = {
        name: "Character Bookmarks",
        img: "crafts/bookmarks.jpeg",
        description: "Create a little birdy bookmark to always remin you were you were",
        supplies: [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
        ]
    };
    crafts[2] = {
        name: "Button Flowers",
        img: "crafts/button-flowers.jpeg",
        description: "Create a fun bouquet of flowers with your favorite buttons",
        supplies: [
            "multicolored buttons",
            "multicolored felt",
            "green staws",
            "ribbon"
        ]
    };
    crafts[3] = {
        name: "Cheerio Necklaces",
        img: "cheerio-necklace.webp",
        description: "Create a fun and edible necklace",
        supplies: [
            "Cheerios or Fruit Loops",
            "Elastic string"
        ]
    };
    crafts[4] = {
        name: "Cotton Ball Cupcakes",
        img: "crafts/cotton-ball-cupcakes.webp",
        description: "Decorate your fun filled cupcake however you want.",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };
    crafts[5] = {
        name: "School Themed Mason Jars",
        img: "crafts/decorated-jars.jpeg",
        description: "Let's make mason jars to ",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ]
    };
    crafts[6] = {
        name: "Egg Carton Flowers",
        img: "crafts/egg-carton-flowers.jpg",
        description: "Make a beautiful bouquet with egg cartons and other items you can find around the house",
        supplies: [
            "Egg Cartons",
            "Butons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
        ]
    };
    crafts[7] = {
        name: "Finger Puppets",
        img: "crafts/finger-puppets.jpeg",
        description: "These little critters are easy to make, and will entertain your little one while they make a show.",
        supplies: [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
        ]
    };
    crafts[8] = {
        name: "Ribbon Flower Headbands",
        img: "crafts/flower-headbands.jpg",
        description: "Let your little one show off her new style with these pretty and customizable headbands",
        supplies: [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
        ]
    };
    crafts[9] = {
        name: "Hand Print Fish Puppets",
        img: "crafts/handprint-fish.jpg",
        description: "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
        supplies: [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
        ]
    };
    crafts[10] = {
        name: "Hand Print Tree",
        img: "crafts/hand-print-tree.jpeg",
        description: "This is a fun way to get your little one into finger painting.",
        supplies:[
            "Watercolor Paper",
            "Finger paint"
        ]
    };
    crafts[11] = {
        name: "Melted Bead Bowl",
        img: "crafts/melted-bead-bowl.jpeg",
        description: "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
        supplies: [
            "Beads",
            "Bowl",
            "Parchment paper"
        ]
    };
    crafts[12] = {
        name: "Monster Kites",
        img: "crafts/monster-rolls.jpg",
        description: "Let's make those scary toilet paper rolls fly!",
        supplies: [
            "Toilet paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
        ]
    };
    crafts[13] = {
        name: "Pool Noogle Boats",
        img: "crafts/noodle-boats.phn",
        description: "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
        supplies: [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
        ]
    };
    crafts[14] = {
        name: "Paper Plate Bees",
        img: "crafts/paper-plate-bees.jpeg",
        description: "Let's have fun with making cute little bees, or big bees actually.",
        supplies: [
            "Paper Plate",
            "Googly Eyes",
            "Close Pins",
            "Black pom poms",
            "Yellow Paint",
            "Black Paint"
        ]
    };
    crafts[15] = {
        name: "Paper Plate Dinosaurs",
        img: "crafts/paper-plate-dinosaurs.jpg",
        description: "Who would have thought that half a paper plate would be the base of a dinosaur.",
        supplies: [
            "Paper Plate",
            "Paint",
            "Close Pins",
            "Construction Paper"
        ]
    };
    crafts[16] = {
        name: "Porcupine Leafs",
        img: "crafts/porcupine-leaf.webp",
        description: "Let's turn an ordinary paper plate into a fun filled mask.",
        supplies: [
            "Leafs",
            "Berries",
            "Acorns",
            "Construction Paper"
        ]
    };
    crafts[17] = {
        name: "Rainbow Cloud",
        img: "crafts/rainbow-cloud.webp",
        description: "Some cotton and color and you'll have a beautiful rainbow.",
        supplies: [
            "Paper Plate",
            "Cotton Balls",
            "Construction Paper"
        ]
    };
    crafts[18] = {
        name: "Fun Shaped Crayons",
        img: "crafts/shaped-crayons.jpg",
        description: "Let's melt some crayons together and let them harden into fun shapes.",
        supplies: [
            "Broken Crayons",
            "Mold"
        ]
    };
    crafts[19] = {
        name: "Straw Farris Wheel",
        img: "crafts/straw-faris-wheel.jpg",
        description: "It might be too small to ride, but this farris wheel is the most colorful of all.",
        supplies: [
            "Multicolored straws",
            "Platform"
        ]
    };
    crafts[20] = {
        name: "Sunny String",
        img: "crafts/sun-string.jpg",
        description: "Let's practice our fine motor skills while we weave the string into a fun sun.",
        supplies: [
            "Yellow String",
            "Paper Plate",
            "Yellow construction paper",
            "Yellow and Orange beads"
        ]
    };
    crafts[21] = {
        name: "Tissue Ballerinas",
        img: "crafts/tisue-dancer.jpeg",
        description: "These beautiful dancers will look great on display",
        supplies: [
            "Pipe cleaner",
            "Tissue Paper",
            "Elastics"
        ]
    };
    crafts[22] = {
        name: "Toilet Paper Roll Animals",
        img: "crafts/toilet-paper-animals.jpeg",
        description: "These beautiful dancers will look great on display",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes"
        ]
    };
    crafts[23] = {
        name: "Toilet Paper Butterfly",
        img: "crafts/toilet-paper-butterfly.jpg",
        description: "Such a sweat little flyer",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes",
            "Buttons"
        ]
    };
    crafts[24] = {
        name: "Valentines Jar",
        img: "crafts/valentines-jar.webp",
        description: "So much hearts all in one",
        supplies: [
            "Clay",
            "Glitter"
        ]
    };


    console.log(crafts);
    res.json(crafts);
});



app.listen(3000,()=>{
    console.log("listening");
});