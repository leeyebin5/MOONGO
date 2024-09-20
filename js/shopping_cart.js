//전체 삭제
function selectAll(selectAll) {
    // 네임속성이 ㅇ저 셀렉 인 것 모든 체크박스 선택
    const checkboxes = document.querySelectorAll('input[name="user_select"]');
    //체크박스 리스트 반복 작업 수행
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
}

//선택 삭제
function deleteCheckedItems() {
    //체크 박스를 모두 불러옴
    const checkboxes = document.querySelectorAll(".chk");
    // 체크 박스 리스트 반복 작업 수행
    checkboxes.forEach((checkbox) => {
        //체크박스가 체크드가 되어 있으면
        if (checkbox.checked) {
            checkbox.closest(".cart_list").remove();
        }
    });
    // 위 함수가 실행되면
    noneCheckbox();
}
// 삭제
function list_delete(id) {
    //아이디와 일치하는 요소 불러오고
    const listItem = document.getElementById(id);
    // 요소가 있으면 실행
    if (listItem) {
        listItem.remove();
        // 그리고 나서 논체크박스 실행
        noneCheckbox();
    }
}

function noneCheckbox() {
    const listItem = document.querySelectorAll(".cart_list");
    const message = document.getElementById("message");

    if (listItem.length === 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

// 수량 입력에 따라 총 상품금액과 할인 금액을 업데이트하는 함수
function updateTotals() {
    // 기본 가격과 할인 금액
    const basePrice = 9000; // 원래 가격 (기본값)
    const discount = 1000; // 원래 할인 금액 (기본값)

    // 수량 입력 요소에서 현재 수량 밸류값을 가져옵니다.
    const quantityInput = document.getElementById("quantity").value;

    // 수량 값을 숫자로 변환합니다.
    const quantity = Number(quantityInput);

    // 수량이 숫자가 아닌 경우 기본값으로 1을 사용합니다.
    if (isNaN(quantity) || quantity < 1) {
        // 수량이 유효하지 않거나 1보다 작은 경우 1로 설정합니다.
        quantity = 1;
    }

    // 기본 가격 * 수량(1)
    const totalPrice = basePrice * quantity;

    // 할인금액 * 수량(1)
    const totalDiscount = discount * quantity;

    // 총 상품금액과 할인 금액을 표시할 요소를 찾습니다.
    const totalPriceElement = document.getElementById("totalPrice");
    const discountElement = document.getElementById("discount");

    // 총 상품금액과 할인 금액을 업데이트합니다.
    totalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;
    discountElement.textContent = `-${totalDiscount.toLocaleString()}원`;
}

// 수량
document.getElementById("increase").addEventListener("click", function () {
    // 수량버튼 불러옴
    const quantityInput = document.getElementById("quantity");
    // 수량값 숫자로 변경
    let quantity = Number(quantityInput.value);
    // 수량 1 증가시키기
    quantityInput.value = quantity + 1;
    // 위에서 만든 총금액 호출
    updateTotals();
});

document.getElementById("decrease").addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity");
    let quantity = Number(quantityInput.value);
    // 수량이 1보다 클경우 감소시킴
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateTotals();
    }
});
