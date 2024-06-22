document.addEventListener('DOMContentLoaded', function() {
const professionalTab = document.getElementById('professional-tab');
const personalTab = document.getElementById('personal-tab');
const professionalContent = document.getElementById('professional-content');
const personalContent = document.getElementById('personal-content');

professionalTab.addEventListener('click', function() {
    // Show Professional content
    professionalContent.style.display = 'block';
    professionalTab.classList.add('active');

    // Hide Personal content
    personalContent.style.display = 'none';
    personalTab.classList.remove('active');
});

personalTab.addEventListener('click', function() {
    // Show Personal content
    personalContent.style.display = 'block';
    personalTab.classList.add('active');

    // Hide Professional content
    professionalContent.style.display = 'none';
    professionalTab.classList.remove('active');
});

professionalTab.classList.add('active');
});
