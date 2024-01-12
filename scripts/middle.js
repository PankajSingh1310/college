const selectedEventDay1=document.getElementById("event-date-day-1")
const selectedEventDay2=document.getElementById("event-date-day-2")

selectedEventDay1.addEventListener('click', function() {
    document.getElementById('event-day2').classList.add('event2-hidden');
    document.getElementById('event-day1').classList.remove('event1-hidden');
    selectedEventDay2.classList.remove('event-date-active');
    selectedEventDay1.classList.add('event-date-active');
    selectedEventDay1.querySelector('h4').style.color="#fff";
    selectedEventDay2.querySelector('h4').style.color="#8e8e8e";
});

selectedEventDay2.addEventListener('click', function() {
    document.getElementById('event-day2').classList.remove('event2-hidden');
    document.getElementById('event-day1').classList.add('event1-hidden');
    selectedEventDay1.classList.remove('event-date-active');
    selectedEventDay2.classList.add('event-date-active');
    selectedEventDay2.querySelector('h4').style.color="#fff";
    selectedEventDay1.querySelector('h4').style.color="#8e8e8e";
});