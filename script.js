document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('hover-name');
    const tooltip = document.getElementById('tooltip');

    nameElement.addEventListener('mouseenter', function (e) {
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 10 + 'px';  // カーソルの右に少しオフセット（調整が必要に応じて変更）
        tooltip.style.top = e.pageY + 10 + 'px';   // カーソルの下に少しオフセット（調整が必要に応じて変更）
        tooltip.textContent = 'script.jsのtextContent';
    });

    nameElement.addEventListener('mousemove', function (e) {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });

    nameElement.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
    });

    // var profileIcon = document.getElementById('li');
    // profileIcon.addEventListener('dblclick', function () {
    //     this.style.display = 'none';
    // });
    
});


window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}
