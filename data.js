// 서버 데이터 (여기에 서버 정보를 추가/수정하세요)
const servers = [
    {
        id: 1,
        name: "KU's:/STUDIO",
        category: "무료배포",
        description: "에셋&시스템 종합 무료배포 서버",
        images: ["img/Ku1.png", "img/Ku2.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/hzXWrRm3BA",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 2,
        name: "만족샵ㅣManjok Shop",
        category: "판매",
        description: "안녕하세요! 이곳은 더 나은 메타버스를 만들기 위해 노력하는 곳, 만족샵 입니다 😄",
        images: ["img/Manjok1.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/qZ8vWK4zHW",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 3,
        name: "KeyChain Studio™",
        category: "무료배포",
        description: "저희는 Roblox에 관련된 고퀄리티 모델을 무료배포하는 서버입니다!!",
        images: ["img/Keychain1.png", "img/Keychain2.png", "img/Keychain3.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/y4fNvRJZcN",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 4,
        name: "Rocord",
        category: "무료배포",
        description: "한국로블록스 무료배포 서버",
        images: ["img/Rocord1.png", "img/Rocord2.png", "img/Rocord3.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/NC4DQ3Cet9",
        isRecommended: false // 실제 초대 링크로 변경하세요
    }
    // --- 새로운 서버를 추가하려면 이 아래에 같은 형식으로 객체를 추가하세요 ---
    // {
    //     id: 5,
    //     name: "새로운 서버 이름",
    //     category: "서버 카테고리",
    //     description: "서버에 대한 상세 설명",
    //     images: ["img/new_server_1.jpg", "img/new_server_2.jpg"],
    //     inviteLink: "#"
    // },
];

// data.js 파일의 navLinks 수정

const navLinks = [
    { text: "홈", href: "home.html" },
    { text: "서버 목록", href: "index.html" },
    { text: "서버 등록", href: "submit.html" } // 링크 추가
];