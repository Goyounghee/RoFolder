// script.js (for index.html)

const serverGrid = document.getElementById('serverGrid');
const categoryNav = document.getElementById('categoryNav');
const mainNav = document.getElementById('mainNav'); // 네비게이션 바 요소

// --- 네비게이션 바 생성 ---
function setupNavigationBar() {
    const mainNav = document.getElementById('mainNav');
    if (!mainNav) return;
     const navLinksContainer = document.getElementById('navLinksContainer'); // ul 요소 선택
    if (!navLinksContainer) return;

     navLinksContainer.innerHTML = ''; // 기존 내용 초기화

     navLinks.forEach(linkInfo => { // data.js의 navLinks 사용
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkInfo.href;
        a.textContent = linkInfo.text;

         // 현재 페이지 링크 활성화 (home.html 일 때 '홈' 활성화)
        if (window.location.pathname.endsWith(linkInfo.href) || (window.location.pathname.includes('home.html') && linkInfo.href === 'home.html')) {
            a.classList.add('active');
        }
          else if (linkInfo.href === 'home.html' && window.location.pathname === '/') { // 루트 경로일 때도 홈 활성화
            a.classList.add('active');
        }

        li.appendChild(a);
         navLinksContainer.appendChild(li); // ul 요소에 li 추가
    });
}

document.addEventListener('DOMContentLoaded', () => {
     setupNavigationBar(); // 네비게이션 바 설정
});

// --- 서버 카드 생성 함수 (수정) ---
function createServerCard(server) {
    // div 대신 a 태그 사용 (카드 전체를 링크로)
    const cardLink = document.createElement('a');
    cardLink.classList.add('server-card');
    // URL 파라미터로 id 전달
    cardLink.href = `server-detail.html?id=${server.id}`;
    // cardLink.dataset.serverId = server.id; // data 속성 대신 href 사용

    // 카드 내용 구성
    let cardHTML = `
        <img src="${server.images[0]}" alt="${server.name} 대표 이미지" class="server-card-image">
        <div class="server-card-content">
            <div class="server-card-category">${server.category}</div>
            <h3 class="server-card-name">${server.name}</h3>
            <p class="server-card-description">${server.description}</p>
        </div>
    `;

    // 추천 서버 배지 추가
    if (server.isRecommended) {
        cardHTML += `<span class="recommend-badge">추천</span>`; // 배지 추가
    }

    cardLink.innerHTML = cardHTML;

    // 클릭 이벤트 리스너는 이제 필요 없음 (a 태그가 링크 역할 수행)
    // cardLink.addEventListener('click', () => { /* 이전 모달 로직 제거 */ });

    return cardLink;
}

// script.js 파일의 displayServers 함수 수정

function displayServers(filterCategory = 'all') {
    serverGrid.innerHTML = ''; // 기존 카드 초기화

    // --- 정렬 로직 추가 ---
    // 원본 배열 변경 방지를 위해 복사본 사용
    let sortedServers = [...servers];
    // isRecommended가 true인 서버가 위로 오도록 정렬 (true > false)
    sortedServers.sort((a, b) => (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0));
    // --- 정렬 로직 끝 ---

    // 정렬된 배열을 기반으로 필터링
    const filteredServers = filterCategory === 'all'
        ? sortedServers // 정렬된 전체 목록 사용
        : sortedServers.filter(server => server.category === filterCategory); // 정렬된 목록에서 필터링

    if (filteredServers.length === 0) {
        serverGrid.innerHTML = '<p class="no-results">해당 카테고리의 서버가 없습니다.</p>';
        return;
    }

    filteredServers.forEach(server => {
        const card = createServerCard(server);
        serverGrid.appendChild(card);
    });
}

// --- 카테고리 버튼 생성 및 이벤트 리스너 설정 함수 (수정) ---
function setupCategories() {
    categoryNav.innerHTML = ''; // 카테고리 버튼 초기화

    const categories = ['all', ...new Set(servers.map(s => s.category))];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.dataset.category = category;
        button.textContent = category === 'all' ? '전체' : category;

        // "전체" 버튼 기본 활성화
        if (category === 'all') {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            // 모든 버튼에서 active 클래스 제거
            categoryNav.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            // 클릭된 버튼에 active 클래스 추가
            button.classList.add('active');
            // 해당 카테고리의 서버만 표시
            displayServers(category);
        });
        categoryNav.appendChild(button);
    });
}

// --- 페이지 로드 시 초기화 ---
document.addEventListener('DOMContentLoaded', () => {
    setupNavigationBar(); // 네비게이션 바 설정
    setupCategories();    // 카테고리 버튼 설정
    displayServers();     // 초기 서버 목록 표시 ('전체')
});

// --- 모달 관련 함수 및 이벤트 리스너 제거 ---
// showServerDetails, closeModal 함수 및 관련 이벤트 리스너 삭제