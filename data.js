// 서버 데이터 (여기에 서버 정보를 추가/수정하세요)
const servers = [
    {
        id: 1,
        name: "KU's:/STUDIO",
        category: "무료배포",
        description: "에셋&시스템 종합 무료배포 서버",
        images: ["img/KR/Ku1.png", "img/KR/Ku2.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/hzXWrRm3BA",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 2,
        name: "만족샵ㅣManjok Shop",
        category: "판매",
        description: "안녕하세요! 이곳은 더 나은 메타버스를 만들기 위해 노력하는 곳, 만족샵 입니다 😄",
        images: ["img/KR/Manjok1.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/qZ8vWK4zHW",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 3,
        name: "KeyChain Studio™",
        category: "무료배포",
        description: "저희는 Roblox에 관련된 고퀄리티 모델을 무료배포하는 서버입니다!!",
        images: ["img/KR/Keychain1.png", "img/KR/Keychain2.png", "img/KR/Keychain3.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/y4fNvRJZcN",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 4,
        name: "Rocord",
        category: "무료배포",
        description: "한국로블록스 무료배포 서버",
        images: ["img/KR/Rocord1.png", "img/KR/Rocord2.png", "img/KR/Rocord3.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/NC4DQ3Cet9",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 5,
        name: "Comet의 상점",
        category: "판매",
        description: "건물판매, 음식모델링 판매",
        images: ["img/KR/Comet1.png", "img/KR/Comet2.png", "img/KR/Comet3.png", "img/KR/Comet4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/x6Z4dFsMK6",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 6,
        name: "Artemis",
        category: "판매",
        description: "로블록스 한국 커뮤니티 서버입니다.",
        images: ["img/KR/Artemis1.png", "img/KR/Artemis2.png","img/KR/Artemis3.png", "img/KR/Artemis4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/3UmfyZFc3Y",
        isRecommended: true // 실제 초대 링크로 변경하세요
    },
    {
        id: 7,
        name: "로샵",
        category: "판매",
        description: "RoShop, First Step of Development.",
        images: ["img/KR/Roshop1.png", "img/KR/Roshop2.png","img/KR/Roshop3.png", "img/KR/Roshop4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/rosyab-704997870310260766",
        isRecommended: true // 
    },
    {
        id: 8,
        name: "#",
        category: "판매",
        description: "3D 복장, 군 관련 모델 전문 #",
        images: ["img/KR/Sh1.png", "img/KR/Sh2.png","img/KR/Sh3.png", "img/KR/Sh4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/Pzh2xPpZ47",
        isRecommended: true // 
    },
    {
        id: 9,
        name: "Asset Shop",
        category: "판매",
        description: "모든 로샵인들을 위한 서버",
        images: ["img/KR/AssetShop1.png", "img/KR/AssetShop2.png","img/KR/AssetShop3.png", "img/KR/AssetShop4.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/Pzh2xPpZ47",
        isRecommended: false // 
    },
    {
        id: 10,
        name: "Blox Manager Support",
        category: "판매",
        description: "로블록스 그룹 인증 및 관리하는 한국 개발자가 만든 봇 지원 서버",
        images: ["img/KR/BMSS.png"], // img 폴더에 실제 이미지 파일 필요
        inviteLink: "https://discord.gg/ANeNwBAt7m",
        isRecommended: false // 
    },
    {
        id: 11,
        name: "Terramars Technology Corporation",
        category: "판매",
        description: "Roblox 대한민국 군사장비 판매처",
        images: ["img/KR/TTX1.png", "img/KR/TTX2.png","img/KR/TTX3.png", "img/KR/TTX4.png"],
        inviteLink: "https://discord.gg/Hf5sUtUmk7",
        isRecommended: false // 
    },
    {
        id: 12,
        name: "전구센터",
        category: "판매",
        description: "로블록스 24시간 메타버스 전구센터",
        images: ["img/KR/Light1.png", "img/KR/Light2.png","img/KR/Light3.png", "img/KR/Light4.png"],
        inviteLink: "https://discord.gg/Hf5sUtUmk7",
        isRecommended: false // 
    },
    {
        id: 13,
        name: "The Platform",
        category: "판매",
        description: 'The Platform /"가격은 저렴하게, 상품은 확실하게"',
        images: ["img/KR/TP1.png", "img/KR/TP2.png","img/KR/TP3.png", "img/KR/TP4.png"],
        inviteLink: "https://discord.gg/3sn47CzJFK",
        isRecommended: false // 
    },
    {
        id: 14,
        name: "RS24",
        category: "판매",
        description: '소개문구없음, 변경 바랄시 로폴더 디스코드로 문의 부탁드립니다.',
        images: ["img/KR/RS1.png", "img/KR/RS2.png","img/KR/RS3.png", "img/KR/RS4.png"],
        inviteLink: "https://discord.gg/vrj38ymmwv",
        isRecommended: false // 
    },
    {
        id: 15,
        name: "개인샵",
        category: "판매",
        description: '개인샵ㅣ로블록스 모델 판매서버,',
        images: ["img/KR/PS1.png", "img/KR/PS2.png","img/KR/PS3.png", "img/KR/PS4.png"],
        inviteLink: "https://discord.gg/dSWpGeYJfu",
        isRecommended: false // 
    },
    {
        id: 16,
        name: "Karma Shop",
        category: "판매",
        description: '카르마 샵은 카르마 소프트웨어 직속 로블록스 개발 샵입니다. 저희는 주로 RP 또는 여러 장르 게임에 도움되는 제품들을 팔고 있는 서버입니다.',
        images: ["img/KR/Karma1.png", "img/KR/Karma2.png","img/KR/Karma3.png", "img/KR/Karma4.png"],
        inviteLink: "https://discord.gg/mkdTfNNVHH",
        isRecommended: false // 
    },
    {
        id: 17,
        name: "Paint.net",
        category: "판매",
        description: "소개문구없음, 변경 바랄시 로폴더 디스코드로 문의 부탁드립니다.",
        images: ["img/KR/Paint1.png", "img/KR/Paint2.png","img/KR/Paint3.png", "img/KR/Paint4.png"],
        inviteLink: "https://discord.gg/bCTEkaqVK6",
        isRecommended: false // 
    },
];

// data.js 파일의 navLinks 수정

const navLinks = [
    { text: "홈", href: "index.html" },
    { text: "한국 서버 목록", href: "korea.html" },
    { text: "외국 서버 목록", href: "foreign.html" },
    { text: "서버 등록", href: "submit.html" } // 링크 추가
];