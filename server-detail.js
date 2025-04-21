// server-detail.js

// --- 네비게이션 바 생성 (index.js와 동일한 함수 재사용) ---
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
         if (linkInfo.href === 'server-detail.html' && window.location.pathname.includes('index.html')) {
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


// --- URL에서 서버 ID 가져오는 함수 ---
function getServerIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    // 'id' 파라미터 값을 숫자로 변환하여 반환
    return parseInt(params.get('id'), 10);
}

// --- 서버 상세 정보 표시 함수 ---
function displayServerDetails(serverId) {
    // data.js에서 불러온 servers 배열에서 id가 일치하는 서버 찾기
    const server = servers.find(s => s.id === serverId);

    // 서버 정보가 없으면 에러 처리 또는 다른 페이지로 리다이렉트
    if (!server) {
        document.querySelector('.detail-container').innerHTML = '<h1>서버 정보를 찾을 수 없습니다.</h1><p><a href="index.html">홈으로 돌아가기</a></p>';
        document.title = "오류 - 서버 정보 없음";
        return;
    }

    // HTML 요소에 서버 정보 채우기
    document.title = `${server.name} - 서버 상세 정보`; // 페이지 타이틀 변경
    document.getElementById('serverName').textContent = server.name;
    document.getElementById('serverCategory').textContent = `카테고리: ${server.category}`;
    document.getElementById('serverDescription').textContent = server.description;
    document.getElementById('serverInviteLink').href = server.inviteLink;

    // 서버 이미지 표시 (여러 장 처리)
    const imagesContainer = document.getElementById('serverImages');
    imagesContainer.innerHTML = ''; // 기존 이미지 초기화
    if (server.images && server.images.length > 0) {
        server.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${server.name} 상세 이미지`;
            img.onerror = () => { // 이미지 로드 실패 시 대체 처리 (선택 사항)
                img.alt = "이미지를 불러올 수 없습니다.";
                // img.src = 'img/placeholder.jpg'; // 대체 이미지 경로
            };
            imagesContainer.appendChild(img);
        });
    } else {
        // 이미지가 없을 경우 메시지 표시 (선택 사항)
        imagesContainer.innerHTML = '<p>제공된 이미지가 없습니다.</p>';
    }

     // 추천 서버인 경우 추가 표시 (선택 사항)
    if (server.isRecommended) {
        const recommendedBadge = document.createElement('span');
        recommendedBadge.textContent = '⭐ 추천 서버';
        recommendedBadge.classList.add('detail-recommend-badge'); // CSS 스타일링을 위한 클래스
        document.querySelector('.detail-header').appendChild(recommendedBadge); // 헤더에 추가
    }
}

// --- 페이지 로드 시 실행 ---
document.addEventListener('DOMContentLoaded', () => {
    setupNavigationBar(); // 네비게이션 바 설정

    const serverId = getServerIdFromUrl(); // URL에서 ID 가져오기
    if (isNaN(serverId)) { // ID가 유효하지 않으면 오류 처리
        document.querySelector('.detail-container').innerHTML = '<h1>잘못된 접근입니다.</h1><p><a href="index.html">홈으로 돌아가기</a></p>';
        document.title = "오류 - 잘못된 접근";
    } else {
        displayServerDetails(serverId); // 서버 상세 정보 표시
    }
});