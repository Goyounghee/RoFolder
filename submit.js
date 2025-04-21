// submit.js

// --- 네비게이션 바 생성 함수 (공통 함수 - 필요시 별도 파일로 분리 권장) ---
function setupNavigationBar() {
    const mainNav = document.getElementById('mainNav');
    if (!mainNav) return;
    const navLinksContainer = document.getElementById('navLinksContainer');
    if (!navLinksContainer) return;

    navLinksContainer.innerHTML = ''; // 초기화

    navLinks.forEach(linkInfo => { // data.js의 navLinks 사용
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkInfo.href;
        a.textContent = linkInfo.text;

        // 현재 페이지 링크 활성화 (submit.html 일 때 '서버 등록 문의' 활성화 - 가정)
         if (linkInfo.href === 'submit.html' && window.location.pathname.includes('submit.html')) {
            a.classList.add('active');
        }
         // 다른 페이지 활성화 로직 추가 필요 시
         else if (window.location.pathname.endsWith(linkInfo.href)) {
            a.classList.add('active');
         }
         else if (linkInfo.href === 'home.html' && (window.location.pathname === '/' || window.location.pathname.includes('home.html'))) {
             a.classList.add('active');
         }


        li.appendChild(a);
        navLinksContainer.appendChild(li);
    });
}

// --- 카테고리 드롭다운 채우기 함수 ---
function populateCategories() {
    const categorySelect = document.getElementById('category');
    if (!categorySelect) return;

    // data.js의 servers 배열에서 중복 없이 카테고리 목록 추출
    const categories = [...new Set(servers.map(s => s.category))];
    // 또는 미리 정의된 카테고리 목록 사용 가능
    // const predefinedCategories = ["게임", "개발", "창작", "음악", "친목", "기타"];

    categories.sort(); // 가나다 순 정렬 (선택 사항)

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}
// --- 페이지 로드 시 실행 ---
document.addEventListener('DOMContentLoaded', () => {
    setupNavigationBar(); // 네비게이션 바 설정
    populateCategories(); // 카테고리 목록 채우기

    // 폼 제출 이벤트 리스너 (백엔드 없을 시 기본 동작 막기 - 선택적)
    const form = document.getElementById('serverSubmitForm');
    form.addEventListener('submit', (event) => {
         // 백엔드 구현 전까지 실제 제출 막기
        event.preventDefault();
        alert('현재 폼 제출 기능은 구현되지 않았습니다. 백엔드 연동이 필요합니다.');
    });
});