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

    const form = document.getElementById('serverSubmitForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // 폼 데이터 수집
        const formData = new FormData(form);
        const data = {
            serverName: formData.get('serverName'),
            inviteLink: formData.get('inviteLink'),
            ownerTag: formData.get('ownerTag'),
            description: formData.get('description'), // name 변경 반영
            category: formData.get('category'),
            email: formData.get('email'),
            check: formData.get('check')
        };

        // 디스코드 웹훅 URL (여기에 본인 웹훅 주소 입력)
        const webhookUrl = "https://discord.com/api/webhooks/1363678854312362084/CfONCgOzLiPFND3196giOLdMV2I2pWVXRw0dErF0_6rbkKaH6fZcUajieuaYyATul9oq";

        // 디스코드 메시지 포맷
        const payload = {
            content: null,
            embeds: [
                {
                    title: "서버 등록 신청이 접수되었습니다!",
                    color: 0xBF5B04,
                    fields: [
                        { name: "서버 이름", value: data.serverName, inline: false },
                        { name: "초대 링크", value: data.inviteLink, inline: false },
                        { name: "서버 소유주", value: data.ownerTag, inline: false },
                        { name: "서버 소개", value: data.description, inline: false },
                        { name: "카테고리", value: data.category, inline: false },
                        { name: "이메일", value: data.email, inline: false },
                        { name: "약관 동의", value: data.check, inline: false }
                    ],
                    timestamp: new Date().toISOString()
                }
            ]
        };

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('신청이 성공적으로 접수되었습니다!');
                form.reset();
            } else {
                alert('신청 접수에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            alert('오류가 발생했습니다: ' + error.message);
        }
    });
});