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
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 5,
        name: "Comet의 상점",
        category: "판매",
        description: "건물판매, 음식모델링 판매",
        images: ["img/Comet1.png", "img/Comet2.png", "img/Comet3.png", "img/Comet4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/x6Z4dFsMK6",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 6,
        name: "Artemis",
        category: "판매",
        description: "로블록스 한국 커뮤니티 서버입니다.",
        images: ["img/Artemis1.png", "img/Artemis2.png","img/Artemis3.png", "img/Artemis4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/3UmfyZFc3Y",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 7,
        name: "로샵",
        category: "판매",
        description: "RoShop, First Step of Development.",
        images: ["img/RoShop1.png", "img/RoShop2.png","img/RoShop3.png", "img/RoShop4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/rosyab-704997870310260766",
        isRecommended: true // 
    },
    {
        id: 8,
        name: "#",
        category: "판매",
        description: "3D 복장, 군 관련 모델 전문 #",
        images: ["img/1#.png", "img/2#.png","img/3#.png", "img/4#.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/Pzh2xPpZ47",
        isRecommended: true // 
    },
    {
        id: 9,
        name: "Asset Shop",
        category: "판매",
        description: "모든 로샵인들을 위한 서버",
        images: ["img/AssetShop1.png", "img/AssetShop2.png","img/AssetShop3.png", "img/AssetShop4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/Pzh2xPpZ47",
        isRecommended: true // 
    },
];

// data.js 파일의 navLinks 수정

const navLinks = [
    { text: "홈", href: "home.html" },
    { text: "서버 목록", href: "index.html" },
    { text: "서버 등록", href: "submit.html" } // 링크 추가
];