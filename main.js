
        function addItem() {
            var itemsDiv = document.getElementById("items");
            var newItemDiv = document.createElement("div");
            newItemDiv.classList.add("item");
            newItemDiv.innerHTML = `
                <label for="itemName">Nama Barang:</label>
                <input type="text" class="itemName" name="itemName" required><br><br>
                <label for="itemPrice">Harga Barang:</label>
                <input type="number" class="itemPrice" name="itemPrice" required><br><br>
            `;
            itemsDiv.appendChild(newItemDiv);
        }

        function calculateSales() {
            var totalMoney = parseFloat(document.getElementById('totalMoney').value);
            var items = document.getElementsByClassName('item');
            var totalCost = 0;
            var itemListHTML = '';

            for (var i = 0; i < items.length; i++) {
                var itemName = items[i].getElementsByClassName('itemName')[0].value;
                var itemPrice = parseFloat(items[i].getElementsByClassName('itemPrice')[0].value); // Menggunakan parseFloat() untuk harga barang
                totalCost += itemPrice;
                var formattedPrice = itemPrice.toLocaleString('id-ID'); // Menambahkan titik setelah tiga digit angka
                itemListHTML += '<li>' + itemName + ' (Rp' + formattedPrice + ')</li>'; 
            }
            var remainingMoney = totalMoney - totalCost;

            if (remainingMoney >= 0) {
                var formattedTotalCost = totalCost.toLocaleString('id-ID'); // Menambahkan titik setelah tiga digit angka
                var formattedRemainingMoney = remainingMoney.toLocaleString('id-ID'); // Menambahkan titik setelah tiga digit angka
                document.getElementById('result').innerHTML = 
                    'Total biaya: Rp' + formattedTotalCost + '<br>' + 
                    'Kembalian: Rp' + formattedRemainingMoney; 
            } else {
                var formattedShortage = Math.abs(remainingMoney).toLocaleString('id-ID'); // Menambahkan titik setelah tiga digit angka
                document.getElementById('result').innerHTML = 
                    'Uang tidak cukup untuk membeli. Anda kekurangan: Rp' + formattedShortage; 
            }

            document.getElementById('itemList').innerHTML = itemListHTML;
        }

