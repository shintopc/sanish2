// Standard ingredients for 100 people
let standardIngredients = {
    biriyani: {
        അരി: { quantity: 15, unit: 'kg' },
        ചിക്കൻ: { quantity: 40, unit: 'kg' },
        RKG: { quantity: 900, unit: 'ml' },
        Dalda: { quantity: 900, unit: 'ml' },
        oil: { quantity: 900, unit: 'ml' },
        അണ്ടിപരിപ്പ്: { quantity: 250, unit: 'g' },
        മുന്തിരി: { quantity: 250, unit: 'g' },
        Milkmaid: { quantity: 100, unit: 'ml' },
        Rose_water: { quantity: 100, unit: 'ml' },
        സവോള: { quantity: 14, unit: 'kg' },
        ഏലക്ക: { quantity: 30, unit: 'g' },
        ഗ്രാമ്പൂ: { quantity: 30, unit: 'g' },
        കറുവപട്ട: { quantity: 50, unit: 'g' },
        ജാതിപത്രി: { quantity: 30, unit: 'g' },
        പെരുംജീരകം: { quantity: 100, unit: 'g' },
        ജീരകം: { quantity: 30, unit: 'g' },
        കറിവേപ്പില: { quantity: 200, unit: 'g' },
        മല്ലിയില: { quantity: 250, unit: 'g' },
        പുതിനയില: { quantity: 250, unit: 'g' },
        നാരങ്ങാ: { quantity: 300, unit: 'g' },
        കക്കിരി: { quantity: 3, unit: 'kg' },
        തക്കാളി: { quantity: 3, unit: 'kg' },
        ജാതിക്കക്കുരു: { quantity: 30, unit: 'g' },
        തക്കോലം: { quantity: 20, unit: 'g' },
        കുരുമുളക്: { quantity: 100, unit: 'g' },
        ചിക്കൻ_മസാല: { quantity: 150, unit: 'g' },
        മഞ്ഞൾ_പൊടി: { quantity: 100, unit: 'g' },
        ഉപ്പ്: { quantity: 1, unit: 'kg' },
        കോൺഫ്ലർ: { quantity: 400, unit: 'g' },
        കാശ്മീരി_മുളക്പൊടി: { quantity: 100, unit: 'g' },
        തൈര്: { quantity: 4, unit: 'kg' },
        കാരറ്റ്: { quantity: 600, unit: 'g' },
        പൈനാപ്പിൾ: { quantity: 600, unit: 'g' },
        അച്ചാർ: { quantity: 2, unit: 'kg' },
        Oil_ചിക്കൻഫ്രൈ: { quantity: 4, unit: 'L' },
    },
    
    rice: {
        അരി: { quantity: 8.5, unit: 'kg' },
        അവിയൽ: { quantity: 5, unit: 'kg' },
        പയർ: { quantity: 3, unit: 'kg' },
        ബീഫ്: { quantity: 1.5, unit: 'kg' },
        ചിക്കൻ65: { quantity: 1.5, unit: 'kg' },
        തൈര്: { quantity: 3, unit: 'L' },
        പച്ചടി: { quantity: 1, unit: 'kg' },
        പാവയ്ക്കാ_കൊണ്ടാട്ടം: { quantity: 1, unit: 'kg' },
        മാങ്ങാ_അച്ചാർ: { quantity: 1, unit: 'kg' },
    },

    rice_dinner: {
        അപ്പം: { quantity: 150, unit: 'Nos' },
        കട്ലറ്റ്: { quantity: 105, unit: 'Nos' },
        ബീഫ്_മപ്പാസ്: { quantity: 8, unit: 'kg' },
        ബീഫ്_ഫ്രൈ: { quantity: 10, unit: 'kg' },
        ചിക്കൻ_സ്റ്റൂ: { quantity: 8, unit: 'kg' },
        പന്നി_ഫ്രൈ: { quantity: 10, unit: 'kg' },
        ഇഞ്ചി_കറി: { quantity: 700, unit: 'g' },
        ഇഞ്ചി: { quantity: 1, unit: 'kg' },
        പൈൻആപ്പിൾ_പച്ചടി: { quantity: 1, unit: 'kg' },
        സവോള: { quantity: 15, unit: 'kg' },
        ചെറിയഉള്ളി: { quantity: 1, unit: 'kg' },
        വെളുത്തുള്ളി: { quantity: 1, unit: 'kg' },
        പച്ചമുളക്: { quantity: 1.5, unit: 'kg' },
        കാരറ്റ്: { quantity: 1, unit: 'kg' },
    },
    
    Ghee_rice: {
        rice: { quantity: 8, unit: 'kg' },
        oil: { quantity: 0.5, unit: 'L' },
        salt: { quantity: 0.2, unit: 'kg' },
    }
};

let calculatedIngredients = {};

// Navigation functions
function navigateToPurchaseList() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('purchaseListPage').classList.remove('hidden');
}

function navigateToHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('purchaseListPage').classList.add('hidden');
}

// Purchase List functions
function calculateIngredients() {
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const dishType = document.getElementById('dishType').value;

    if (isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    const ingredients = standardIngredients[dishType];
    const calculatedItemsList = document.getElementById('calculatedItems');
    calculatedItemsList.innerHTML = '';

    calculatedIngredients = {}; // Reset calculated ingredients

    for (const [ingredient, details] of Object.entries(ingredients)) {
        const calculatedQuantity = (details.quantity / 100) * numPeople;
        calculatedIngredients[ingredient] = { quantity: calculatedQuantity.toFixed(2), unit: details.unit };

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${ingredient}: ${calculatedQuantity.toFixed(2)} ${details.unit}</span>
            <button onclick="editCalculatedItem('${ingredient}')"><i class="fas fa-edit"></i></button>
            <button onclick="deleteCalculatedItem('${ingredient}')"><i class="fas fa-trash-alt"></i></button>
        `;
        calculatedItemsList.appendChild(li);
    }

    // Enable the Export as PDF, Add Item, and Share to WhatsApp buttons
    document.getElementById('exportPdf').disabled = false;
    document.getElementById('addItemButton').classList.remove('hidden');
    document.getElementById('sharePurchaseWhatsApp').disabled = false;
}

function editCalculatedItem(ingredient) {
    const newQuantity = prompt(`Enter new quantity for ${ingredient}:`, calculatedIngredients[ingredient].quantity);
    if (newQuantity && !isNaN(newQuantity)) {
        calculatedIngredients[ingredient].quantity = parseFloat(newQuantity).toFixed(2);
        renderCalculatedItems(); // Re-render the list
    }
}

function deleteCalculatedItem(ingredient) {
    delete calculatedIngredients[ingredient];
    renderCalculatedItems(); // Re-render the list
}

function addItemAfterCalculation() {
    const itemName = prompt("Enter the name of the item to add:");
    const itemQuantity = prompt("Enter the quantity of the item:");
    const itemUnit = prompt("Enter the unit of the item (kg, g, L, mL):");

    if (itemName && itemQuantity && itemUnit && !isNaN(itemQuantity)) {
        calculatedIngredients[itemName] = { quantity: parseFloat(itemQuantity).toFixed(2), unit: itemUnit };
        renderCalculatedItems(); // Re-render the list
    } else {
        alert("Please enter valid item details.");
    }
}

function renderCalculatedItems() {
    const calculatedItemsList = document.getElementById('calculatedItems');
    calculatedItemsList.innerHTML = '';

    for (const [ingredient, details] of Object.entries(calculatedIngredients)) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${ingredient}: ${details.quantity} ${details.unit}</span>
            <button onclick="editCalculatedItem('${ingredient}')"><i class="fas fa-edit"></i></button>
            <button onclick="deleteCalculatedItem('${ingredient}')"><i class="fas fa-trash-alt"></i></button>
        `;
        calculatedItemsList.appendChild(li);
    }
}

function exportToPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Eden's Kitchen - Purchase List", 10, 10);

    // Add dish info
    doc.setFontSize(12);
    doc.text(`Dish: ${document.getElementById('dishType').value}`, 10, 20);
    doc.text(`People: ${document.getElementById('numPeople').value}`, 10, 30);

    // Add ingredients
    let yPosition = 40;
    for (const [ingredient, details] of Object.entries(calculatedIngredients)) {
        doc.text(`${ingredient}: ${details.quantity} ${details.unit}`, 10, yPosition);
        yPosition += 10;
    }

    // Save the PDF
    doc.save("purchase_list.pdf");
}

function sharePurchaseToWhatsApp() {
    // Format the purchase list into a readable text
    let shareText = "*Eden's Kitchen - Purchase List*\n\n";
    shareText += "*Dish Type:* " + document.getElementById('dishType').options[document.getElementById('dishType').selectedIndex].text + "\n";
    shareText += "*Number of People:* " + document.getElementById('numPeople').value + "\n\n";
    shareText += "*Ingredients:*\n";
    
    for (const [ingredient, details] of Object.entries(calculatedIngredients)) {
        shareText += `➡ ${ingredient}: ${details.quantity} ${details.unit}\n`;
    }

    // Encode the text for the WhatsApp URL
    const encodedText = encodeURIComponent(shareText);

    // Open WhatsApp with the shared text
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    // Menu section functionality
    const shareMenuBtn = document.getElementById('shareMenuBtn');
    const menuSection = document.getElementById('menuSection');
    
    if (shareMenuBtn && menuSection) {
        shareMenuBtn.addEventListener('click', function () {
            menuSection.style.display = menuSection.style.display === 'none' ? 'block' : 'none';
        });
    }

    const menuData = {
        lunch: ["Rice", "Sambar", "Fish Fry"],
        dinner: ["Porotta", "Chicken Curry"],
        breakfast: ["Appam", "Egg Curry"]
    };

    const loadMenuBtn = document.getElementById('loadMenu');
    if (loadMenuBtn) {
        loadMenuBtn.addEventListener('click', function () {
            const menuDropdown = document.getElementById('menuDropdown');
            if (menuDropdown) {
                const selectedMenu = menuDropdown.value;
                const menuHeading = document.getElementById('menuHeading');
                if (menuHeading) {
                    menuHeading.innerText = selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1) + " Menu";
                }
                loadMenuItems(menuData[selectedMenu]);
            }
        });
    }

    function loadMenuItems(items) {
        const menuList = document.getElementById('menuList');
        if (menuList) {
            menuList.innerHTML = "";
            items.forEach(item => addMenuItemToList(item));
        }
    }

    const addMenuItemBtn = document.getElementById('addMenuItem');
    if (addMenuItemBtn) {
        addMenuItemBtn.addEventListener('click', function () {
            const newItemInput = document.getElementById('menuItemInput');
            if (newItemInput) {
                const newItem = newItemInput.value.trim();
                if (newItem) {
                    addMenuItemToList(newItem);
                    newItemInput.value = "";
                }
            }
        });
    }

    function addMenuItemToList(item) {
        const menuList = document.getElementById('menuList');
        if (menuList) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="menuItemText">${item}</span> 
                            <span class="menuItemDelete">❌</span>`;
            menuList.appendChild(li);

            li.querySelector(".menuItemDelete").addEventListener('click', function () {
                li.remove();
            });
        }
    }

    const shareWhatsAppBtn = document.getElementById('shareWhatsApp');
    if (shareWhatsAppBtn) {
        shareWhatsAppBtn.addEventListener('click', function () {
            const menuDropdown = document.getElementById('menuDropdown');
            if (menuDropdown) {
                const selectedMenu = menuDropdown.value;
                const menuHeading = selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1);

                const items = Array.from(document.querySelectorAll('.menuItemText'))
                    .map(el => `• ${el.innerText}`)
                    .join('%0A');

                const whatsappURL = `https://wa.me/?text=${encodeURIComponent(menuHeading + ' Menu')}${'%0A' + items}`;
                window.open(whatsappURL, '_blank');
            }
        });
    }

    const exportPDFBtn = document.getElementById('exportMenuPDF');
    if (exportPDFBtn && window.jspdf) {
        exportPDFBtn.addEventListener('click', function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            const menuDropdown = document.getElementById('menuDropdown');
            if (menuDropdown) {
                const selectedMenu = menuDropdown.value;
                const menuHeading = selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1);

                doc.text(menuHeading + " Menu", 10, 10);

                let y = 20;
                document.querySelectorAll('.menuItemText').forEach(item => {
                    doc.text(`• ${item.innerText}`, 10, y);
                    y += 10;
                });

                doc.save(menuHeading.toLowerCase() + '-menu.pdf');
            }
        });
    }
});
