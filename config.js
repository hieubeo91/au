const config = {
    // 1. Cấu hình chung
    globalBgImage: "",

    // 2. Cấu hình Slidebar
    bannerSlides: [
        {
            link: "https://hieubeo91.github.io/au/posts/sun3.html",
            image: "https://lh3.googleusercontent.com/d/18-TpyUz6uPU2YZOClxlHwnzKTFXwtujH",
            title: "Thang cấp độ nhẫn trong Audition3",
            altText: "Bài viết mới 1"
        },
        {
            link: "https://hieubeo91.github.io/au/posts/sun3.html",
            image: "https://lh3.googleusercontent.com/d/1BKluvvJ1YrQS3FqGu8jV3Qn8zqkr_QAD",
            title: "Thang cấp độ level trong Audition",
            altText: "Bài viết mới 2"
        },
        {
            link: "https://hieubeo91.github.io/au/posts/sun3.html",
            image: "https://lh3.googleusercontent.com/d/1luXtV6Aq4_PszysrMwWfH27VZ6jlb0Ki",
            title: "Hướng dẫn viết tiếng Việt trong Audition",
            altText: "Bài viết mới 3"
        }
    ],

    // 3. Quản trị viên
    admin: {
        secureTargetHash: "57a81a4801bb04e890c8414a2ff4b6ea30dcdf25b5eec1c0e4eec8fbf3bd5181",
        displayName: "Hiệu Béo 👑",
        telegram: {
            token: "8635914876:AAEqk7b0HH6ygpTm5oN4-utvUn_YcZLgF2M",
            chatId: "-5280914251"
        }
    },

    // 4. Facebook Group
    facebookGroup: {
        title: "Thư viện Audition Group",
        description: "Chia sẻ kinh nghiệm, tài nguyên mod game Audition",
        groupUrl: "https://www.facebook.com/groups/ThuvienAu",
        imageUrl: "https://lh3.googleusercontent.com/d/1jNcrWoKc9YN3C8KiG1rT2LLUACaVl0LS",
        appUrl: ""
    },

    // 5. Reactions
    reactions: {
        favorite: "😆",
        haha: "😆",
        wow: "😆",
        sad: "😢",
        angry: "😆"
    },

    // 6. Layout Header/Footer
    layout: {
        headerHTML: `<header class="bg-white border-b border-slate-100 sticky top-0 z-40 backdrop-blur-md bg-white/80"><div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"><a href="https://hieubeo91.github.io/au/" id="header-logo" class="text-2xl font-bold tracking-tight text-indigo-600 flex items-center gap-2"><img src="https://github.com/hieubeo91/storage/blob/main/blog/icon.png?raw=true" alt="Logo Hieubeo's Audition Studio" class="w-6 h-6 object-contain"><span>Hieubeo's Audition Studio</span></a><p class="text-sm text-slate-500 text-center sm:text-right">♥ Kênh chia sẻ và thương mại tài nguyên cho game Audition (PC)</p></div></header>`,
        footerHTML: `<footer class="bg-slate-900 text-slate-400 py-8 mt-16 border-t border-slate-800"><div class="max-w-6xl mx-auto px-4 text-center"><p class="text-sm">© 2026-- Hieubeo's Audition Studio ♫ Rhythm of Life</p></div></footer>`
    }
};
