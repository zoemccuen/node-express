const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts", (req,res)=>{
    console.log("Someone is requesting our api");
    const animals = [];
    
class Craft {
    constructor(_id, name, image, description, supplies) {
        this._id = _id;
        this.name = name;
        this.image = "crafts/" + image;
        this.supplies = supplies;
    }

    static async fetch(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            const { crafts } = jsonData; // Accessing the "craftss" array
            const theCrafts = crafts.map(craftData => {
                const { _id, name, image, description, supplies } = craftData;
                return new Craft(_id, name, image, description, supplies);
            });
            return theCrafts;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    get renderCraft() {
        // Add the section for the craft
        const photoSection = document.createElement("section");
        photoSection.classList.add("column-craft");

        // Create the image
        const photoImg = document.createElement("img");
        photoImg.src = this.image;
        photoImg.classList.add("img-craft");

        // Name of the craft will be this H3 header
        const heading = document.createElement("h3");
        heading.innerText = this.name;

        // Create the description section from the class properties
        const craftDetails = document.createElement("span");
        const craftFactText = this.description;
        craftDetails.innerHTML = craftFactText;

        // Build the object in the DOM!
        photoSection.appendChild(photoImg); // Preview image
        photoSection.appendChild(heading); // Appending heading to craftBox
        photoSection.appendChild(craftDetails); // Append the details

        return photoSection;
        console.log(crafts);
        res.json(crafts);
    }

}

const loadCraft = async () => {
    const url = "https://portiaportia.github.io/json/crafts.json?" + new Date().getTime();;
    try {
        const craft = await Craft.fetch(url);
        return await craft;
    } catch (error) {
        0
        console.log(error);
    }
}

const initGallery = async () => {
    let craftArray = await loadCraft();
    let photoGallery = document.getElementById("craft-section");
    if (photoGallery !== null) {
        if (craftArray !== undefined && craftArray.length > 0) {
            craftArray.forEach((aCraft) => {
                photoGallery.append(aCraft.renderCraft);
            })
        }
    }
}
});



app.listen(3000,()=>{
    console.log("listening");
});