// 전체 선택
function selectAll(selectAll) {
  const checkboxes = document.querySelectorAll('input[name="user_select"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

// 선택 삭제
function deleteCheckedItems() {
  const checkboxes = document.querySelectorAll('.chk');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      // 삭제할 항목의 부모 요소인 .select_list1 또는 .select_list2를 찾아서 삭제
      checkbox.closest('div[id^="select_list"]').remove(); // ID로 시작하는 div를 찾아 삭제
    }
  });
  // 삭제 후에 메시지를 업데이트
  noneCheckbox();
}

function list_delete(id) {
  const listItem = document.getElementById(id);
  if (listItem) {
    // 지정된 ID의 요소를 삭제
    listItem.remove();
    // 삭제 후에 메시지를 업데이트
    noneCheckbox();
  }
}

function noneCheckbox() {
  // select_list1 및 select_list2 클래스를 가진 모든 요소를 선택
  const listItems = document.querySelectorAll('div[id^="select_list"]');
  const message = document.getElementById('message');

  if (listItems.length === 0) {
    // 목록이 비어 있으면 메시지 표시
    message.style.display = 'block';
  } else {
    // 목록에 항목이 있으면 메시지 숨기기
    message.style.display = 'none';
  }
}

// 개별 체크박스 클릭하면 전체선택 체크박스 선택됨
function updateSelectAllCheckbox() {
  // 모든 개별 체크박스 불러옴
  const checkboxes = document.querySelectorAll('.chk');
  // 전체 선택 체크박스 선택 상태
  const selectAllCheckbox = document.getElementById('chk');

  // 모든 체크박스가 선택된 경우 전체 선택 체크박스도 선택
  selectAllCheckbox.checked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
}

// 페이지 로드 시 개별 체크박스의 상태에 따라 전체 선택 체크박스 상태 업데이트
document.addEventListener('DOMContentLoaded', () => {
  // 개별 체크박스에 change 이벤트 리스너를 추가
  document.querySelectorAll('.chk').forEach((checkbox) => {
    checkbox.addEventListener('change', updateSelectAllCheckbox);
  });
});
