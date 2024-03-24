const getCrafts = async () => {
    try {
      return (await fetch("api/crafts/")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showCrafts = async () => {
    let crafts = await getCrafts();
    let craftsDiv = document.getElementById("craft-list");
    craftsDiv.innerHTML = "";
    crafts.forEach((craft) => {
      const section = document.createElement("section");
      section.classList.add("craft");
      craftsDiv.append(section);
  
      const a = document.createElement("a");
      a.href = "#";
      section.append(a);
  
      const h3 = document.createElement("h3");
      h3.innerHTML = craft.name;
      a.append(h3);
  
      const img = document.createElement("img");
      img.src = craft.img;
      a.append(img);
  
      a.onclick = (e) => {
        e.preventDefault();
        displayDetails(craft);
      };
    });
  };
  
  const displayDetails = (craft) => {
    openDialog("craft-details");
    const craftDetails = document.getElementById("craft-details");
    craftDetails.innerHTML = "";
    craftDetails.classList.remove("hidden");
  
    const h3 = document.createElement("h3");
    h3.innerHTML = craft.name;
    craftDetails.append(h3);
  
    const p = document.createElement("p");
    craftDetails.append(p);
    p.innerHTML = craft.description;
  
    const ul = document.createElement("ul");
    craftDetails.append(ul);
    console.log(craft.supplies);
    craft.supplies.forEach((item) => {
      const li = document.createElement("li");
      ul.append(li);
      li.innerHTML = item;
    });
  
    const spoon = document.createElement("section");
    spoon.classList.add("spoon");
    craftDetails.append(spoon);
  };
  
  const addCraft = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-craft-form");
    const formData = new FormData(form);
    let response;
    formData.append("supplies", getSupplies());
  
    console.log(...formData);
  
    response = await fetch("/api/crafts", {
      method: "POST",
      body: formData,
    });
  
    //successfully got data from server
    if (response.status != 200) {
      console.log("Error posting data");
    }
  
    await response.json();
    resetForm();
    document.getElementById("dialog").style.display = "none";
    showCrafts();
  };
  
  const getSupplies = () => {
    const inputs = document.querySelectorAll("#item-boxes input");
    let supplies = [];
  
    inputs.forEach((input) => {
      supplies.push(input.value);
    });
  
    return supplies;
  };
  
  const resetForm = () => {
    const form = document.getElementById("add-craft-form");
    form.reset();
    document.getElementById("item-boxes").innerHTML = "";
    document.getElementById("img-prev").src = "";
  };
  
  const showCraftForm = (e) => {
    e.preventDefault();
    openDialog("add-craft-form");
    resetForm();
  };
  
  const addItem = (e) => {
    e.preventDefault();
    const section = document.getElementById("item-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
  };
  
  const openDialog = (id) => {
    document.getElementById("dialog").style.display = "block";
    document.querySelectorAll("#dialog-details > *").forEach((item) => {
      item.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
  };
  
  //initial code
  showCrafts();
  document.getElementById("add-craft-form").onsubmit = addCraft;
  document.getElementById("add-link").onclick = showCraftForm;
  document.getElementById("add-item").onclick = addItem;
  
  document.getElementById("img").onchange = (e) => {
    if (!e.target.files.length) {
      document.getElementById("img-prev").src = "";
      return;
    }
    document.getElementById("img-prev").src = URL.createObjectURL(
      e.target.files.item(0)
    );
  };