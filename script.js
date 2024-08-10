const stickers = [
    "https://hackclub.com/stickers/2016_hack_camp.svg",
    "https://hackclub.com/stickers/2018_holidays.svg",
    "https://hackclub.com/stickers/2020_progress.png",
    "https://hackclub.com/stickers/2020_storm_the_hack.png",
    "https://hackclub.com/stickers/2021_design_awards.png",
    "https://hackclub.com/stickers/Blot.png",
    "https://hackclub.com/stickers/HackHackClub.png",
    "https://hackclub.com/stickers/I_❤%EF%B8%8F_HC.png",
    "https://hackclub.com/stickers/In-N-Out.png",
    "https://hackclub.com/stickers/MRT.png",
    "https://hackclub.com/stickers/airlines.png",
    "https://hackclub.com/stickers/Rummage.png",
    "https://hackclub.com/stickers/adobe.svg",
    "https://hackclub.com/stickers/all_fun_javascript.svg",
    "https://hackclub.com/stickers/anxiety.png",
    "https://hackclub.com/stickers/apocalypse.png",
    "https://hackclub.com/stickers/bottle_caps.png",
    "https://hackclub.com/stickers/emergency_meeting.svg",
    "https://hackclub.com/stickers/assemble.svg",
    "https://hackclub.com/stickers/black_lives_matter.svg",
    "https://hackclub.com/stickers/burst.png",
    "https://hackclub.com/stickers/drake.svg",
    "https://hackclub.com/stickers/enjoy.svg",
    "https://hackclub.com/stickers/epoch.png",
    "https://hackclub.com/stickers/epoch_among_us.png",
    "https://hackclub.com/stickers/epoch_bubbly.png",
    "https://hackclub.com/stickers/epoch_h.png",
    "https://hackclub.com/stickers/find%20out.png",
    "https://hackclub.com/stickers/friends.svg",
    "https://hackclub.com/stickers/game_lab.png",
    "https://hackclub.com/stickers/game_lab_flask.png",
    "https://hackclub.com/stickers/grab.png",
    "https://hackclub.com/stickers/hack-club-anime.png",
    "https://hackclub.com/stickers/hack_in_the_club.svg",
    "https://hackclub.com/stickers/hack_ok_please.png",
    "https://hackclub.com/stickers/hack_strikes_back.svg",
    "https://hackclub.com/stickers/hack_to_the_future.svg",
    "https://hackclub.com/stickers/hcb.png",
    "https://hackclub.com/stickers/hcb_sticker_sheet_1.png",
    "https://hackclub.com/stickers/hcb_sticker_sheet_2.png",
    "https://hackclub.com/stickers/hcb_(dark).png",
    "https://hackclub.com/stickers/hackers,_assemble!.png",
    "https://hackclub.com/stickers/hacky_new_year.png",
    "https://hackclub.com/stickers/hcb_pumpkin.png",
    "https://hackclub.com/stickers/horizon_computer.png",
    "https://hackclub.com/stickers/horizon_patch.png",
    "https://hackclub.com/stickers/jurassic_hack.png",
    "https://hackclub.com/stickers/macintosh.svg",
    "https://hackclub.com/stickers/horse.png",
    "https://hackclub.com/stickers/logo.png",
    "https://hackclub.com/stickers/minecraft.svg",
    "https://hackclub.com/stickers/jetlag.png",
    "https://hackclub.com/stickers/m_a_s_h.png",
    "https://hackclub.com/stickers/mo’%20parts%20mo’%20problems.png",
    "https://hackclub.com/stickers/nasa.svg",
    "https://hackclub.com/stickers/orpheus_flag.svg",
    "https://hackclub.com/stickers/orphmoji_peefest.png",
    "https://hackclub.com/stickers/orphmoji_scared.png",
    "https://hackclub.com/stickers/orpheus_goes_to_FIRST_robotics.png",
    "https://hackclub.com/stickers/orpheus-having-boba.png",
    "https://hackclub.com/stickers/orpheus-skateboarding-PCB.png",
    "https://hackclub.com/stickers/orpheus_with_duck.png",
    "https://hackclub.com/stickers/orphmoji_yippee.png",
    "https://hackclub.com/stickers/pride.svg",
    "https://hackclub.com/stickers/semicolon.svg",
    "https://hackclub.com/stickers/sinerider_pink.png",
    "https://hackclub.com/stickers/raycast.png",
    "https://hackclub.com/stickers/riveter.svg",
    "https://hackclub.com/stickers/ship.png",
    "https://hackclub.com/stickers/single%20neuron%20activated.png",
    "https://hackclub.com/stickers/sinerider_blue.png",
    "https://hackclub.com/stickers/skullpup.png",
    "https://hackclub.com/stickers/skullpup_boba.png",
    "https://hackclub.com/stickers/skullpup_pixel.png",
    "https://hackclub.com/stickers/sledding.png",
    "https://hackclub.com/stickers/some_assembly_required.png",
    "https://hackclub.com/stickers/sprig.svg",
    "https://hackclub.com/stickers/sprig_holographic.png",
    "https://hackclub.com/stickers/stranger_hacks.png",
    "https://hackclub.com/stickers/the-bin.png",
    "https://hackclub.com/stickers/summer_of_making.svg",
    "https://hackclub.com/stickers/swiss_miss.png",
    "https://hackclub.com/stickers/tiktok.svg",
    "https://hackclub.com/stickers/tootsie_roll.png",
    "https://hackclub.com/stickers/undertale.svg",
    "https://hackclub.com/stickers/zephyr.svg",
    "https://hackclub.com/stickers/valorant.png",
    "https://hackclub.com/stickers/valorant_vertical.svg"
];

const stickersPerPage = 24;
let currentPage = 1;

function displayStickers(page) {
    const stickerSheet = document.getElementById('stickerSheet');
    stickerSheet.innerHTML = '';

    const start = (page - 1) * stickersPerPage;
    const end = start + stickersPerPage;
    const pageStickers = stickers.slice(start, end);

    pageStickers.forEach((url) => {
        const stickerDiv = document.createElement('div');
        stickerDiv.className = 'sticker';
        stickerDiv.innerHTML = `<img src="${url}" alt="Sticker">`;
        stickerSheet.appendChild(stickerDiv);
    });

    document.getElementById('pageInfo').textContent = `Page ${page} of ${Math.ceil(stickers.length / stickersPerPage)}`;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayStickers(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < Math.ceil(stickers.length / stickersPerPage)) {
        currentPage++;
        displayStickers(currentPage);
    }
});

displayStickers(currentPage);
