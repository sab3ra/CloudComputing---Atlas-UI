const apiUrl = "http://127.0.0.1:8000";

function fetchInventory() {
    fetch(`${apiUrl}/local_grocery_inventory/`)
        .then(response => response.json())
        .then(data => {
            const inventoryList = document.getElementById('inventory-list');
            inventoryList.innerHTML = ''; 
            data.forEach(item => {
                inventoryList.innerHTML += `<p>${item.product_name}: $${item.retail_price}</p>`;
            });
        })
        .catch(error => console.error("Error fetching inventory:", error));
}

function fetchPromotions() {
    fetch(`${apiUrl}/promotions/`)
        .then(response => response.json())
        .then(data => {
            const promotionsList = document.getElementById('promotions-list');
            promotionsList.innerHTML = ''; 
            data.forEach(promotion => {
                promotionsList.innerHTML += `<p>${promotion.promotion_name} - ${promotion.discount}% off</p>`;
            });
        })
        .catch(error => console.error("Error fetching promotions:", error));
}
