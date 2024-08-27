// script.js
document.querySelector('.nav-menu button').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

<script>
    const menuButton = document.querySelector('.nav-menu button');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const closeButton = document.querySelector('.close-btn');

    // 메뉴 버튼을 클릭했을 때
    menuButton.addEventListener('click', () => {
        fullScreenMenu.classList.add('active'); // 전체 화면 메뉴 표시
    });

    // 닫기 버튼을 클릭했을 때
    closeButton.addEventListener('click', () => {
        fullScreenMenu.classList.remove('active'); // 전체 화면 메뉴 숨기기
    });
</script>
