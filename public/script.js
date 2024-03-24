const getCrafts = async () => {
    try {
      return (await fetch("api/crafts/")).json();
    } catch (error) {
      console.log(error);
    }
  };
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
            const craftsData = await response.json();
            const craft = craftsData.map(craftsData => {
                const { _id, name, image, description, supplies } = craftData;
                return new Craft(_id, name, image, description, supplies);
            });
            return crafts;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    get expandedSection() {        
        const photoSection = document.createElement("section");
        const target = "modal-" + this.craftID;        
        photoSection.classList.add("w3-modal");
        photoSection.id = target;

        /* Add the main div which will contain the modal */
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("w3-modal-content");
        infoDiv.classList.add("expanded-info");

        /* Add the next div which will contain the Content of the modal */
        const contentDiv = document.createElement("div");
       // contentDiv.classList.add("w3-container");

        /* Add Close Button for Modal */
        const closeButton = document.createElement("span");
        closeButton.classList.add("w3-button");
        closeButton.classList.add("w3-display-topright");
        closeButton.classList.add("close-button");
        closeButton.onclick = () => { modalClose(target); };
        closeButton.innerHTML = "&times;";

        /* Create an image element for the craft */
        const photoImg = document.createElement("img");
        photoImg.src = this.source;
        photoImg.classList.add("photo-element-big");

        /* Create the text div and elements */
        const textBox = document.createElement("div");
        textBox.classList.add("craft-info");
        const heading = document.createElement("p");
        heading.innerText = this.name;
        heading.classList.add("craft-heading");

        const craftFacts = document.createElement("p");
        const craftFactText = "<p><b>Name:</b> " + this.craftName + "</p>" +
                            "<p><b>Description:</b> " + this.description + "</p>" +
                            "<p><b>Supplies:</b> " + this.supplies + "</p>";

        craftFacts.innerHTML = craftFactText;
        textBox.appendChild(heading); // Add Header to top of textBox
        textBox.appendChild(craftFacts); // Add the craft Facts!

        
        /* Create the div that holds the image on the right side of the info card */
        const imageBox = document.createElement("div");
        imageBox.classList.add("photo-big");    
        imageBox.appendChild(photoImg); // Add the image to the imageBox
        

        /* Put close button into the container for the expanded info card */
        contentDiv.appendChild(closeButton);

        /* Create div to contain the expanded text and image */
        const infoCard = document.createElement("div");
        infoCard.classList.add("info-card");
        infoCard.appendChild(textBox);
        infoCard.appendChild(imageBox);

        /* Put InfoCard into the modal content under the close button */
        contentDiv.appendChild(infoCard);

        /* Add the inside stuff to the modal dialog */
        infoDiv.appendChild(contentDiv);
        photoSection.appendChild(infoDiv);

        return photoSection;
    }

    get section() {
        const photoSection = document.createElement("section");
        photoSection.classList.add("photo");
        const target = "modal-" + this.craftID;
        photoSection.onclick = () => { modalOpen(target); };
        const photoImg = document.createElement("img");
        photoImg.src = this.source;        
        photoImg.classList.add("photo-element");
        const titleLine = document.createElement("p");
        titleLine.classList.add("photo-title");
        titleLine.innerText = this.name;
        photoSection.appendChild(titleLine);
        photoSection.appendChild(photoImg);
        return photoSection;
    }
}

const modalOpen = (theName) => {
    document.getElementById(theName).style.display = "block";
}

const modalClose = (theName) => {
    document.getElementById(theName).style.display = "none";
}

const loadCrafts = async () => {
    const url = "https://portiaportia.github.io/json/crafts.json?" + new Date().getTime(); // Trick to get it to not cache the file
    try {
        const crafts = await Craft.fetch(url);
        return await crafts;
    } catch (error) {
        console.log(error);
    }
}

const initGallery = async () => {
    let craftArray = await loadCrafts();
    let photoGallery = document.getElementById("image-gallery");

    if (craftArray !== undefined && craftArray.length > 0) {
        craftArray.forEach((aCraft) => {
            photoGallery.append(aCraft.section);
            photoGallery.append(aCraft.expandedSection);
        })
    }
}


/* Put everything that will talk to elements on the page AFTER the load is complete */
window.onload = () => {
    initGallery();
};