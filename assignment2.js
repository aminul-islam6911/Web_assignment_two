let clsName = document.getElementsByClassName('btn');
for (const btn of clsName) {
    btn.addEventListener('click', function () {
        selectButton(btn.id);
        showTotal();
    })
};

function selectButton(selectOption) {
    let exMemory = document.getElementById('extra-memory');
    let exStorage = document.getElementById('extra-storage');
    let charge = document.getElementById('delivery-charge');
    switch (selectOption) {
        case 'm-8gb':
            exMemory.innerText = 0;
            showTotal();
            break;
        case 'm-16gb':
            exMemory.innerHTML = 100;
            showTotal();
            break;
        case 's-256gb':
            exStorage.innerText = 0;
            showTotal();
            break;
        case 's-512gb':
            exStorage.innerText = 250;
            showTotal();
            break;
        case 's-1000gb':
            exStorage.innerText = 400;
            showTotal();
            break;
        case 'd-free':
            charge.innerText = 0;
            showTotal();
            break;
        case 'd-charge':
            charge.innerText = 20;
            showTotal();
            break;
    }
};

function showTotal() {
    let exMemory = document.getElementById('extra-memory');
    let exStorage = document.getElementById('extra-storage');
    let charge = document.getElementById('delivery-charge');
    let bestPrice = document.getElementById('best-price');
    let discount = document.getElementById('after-discount');
    let total = document.getElementById('total-price');
    total.innerText = parseInt(bestPrice.innerText) + parseInt(exMemory.innerText) +
        parseInt(exStorage.innerText) + parseInt(charge.innerText);
    discount.innerText = total.innerText;
};

let promo = document.getElementById('promo-apply');
promo.addEventListener('click', function () {
    let promoCode = document.getElementById('promo-code').value;
    if (promoCode === '') {
        alert("Please Type Promo Code.");
        return false;
    }
    else {
        if (promoCode == 'cse20') {
            let afterDiscount = document.getElementById('after-discount');
            let totalPrice = document.getElementById('total-price').innerText;
            afterDiscount.innerText = totalPrice - 100;
            document.getElementById('promo-code').value = '';
        }
        else {
            alert("Wrong Promo Code.");
            document.getElementById('promo-code').value = '';
        }
    }
});