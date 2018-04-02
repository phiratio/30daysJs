document.addEventListener("DOMContentLoaded", function() {
    const hoursHand = document.querySelector(".hours-hand");
    const minutesHand = document.querySelector(".mins-hand");
    const secondsHand = document.querySelector(".seconds-hand");

    function setDate() {
        const now = new Date();
        const nowSeconds = now.getSeconds();
        const nowMinutes = now.getMinutes();
        const nowHours = now.getHours();

        const secondsInDegrees = ((nowSeconds / 60) * 360) + 90;
        const minutesInDegrees = ((nowMinutes / 60) * 360) + 90;
        const hoursInDegrees = ((nowHours / 12) * 360) + 90;
        hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
        minutesHand.style.transform = `rotate(${minutesInDegrees}deg)`;
        secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;

        let secondStyle = window.getComputedStyle(secondsHand, null).getPropertyValue('transform');
        if (secondStyle === 'matrix(0.207912, 0.978148, -0.978148, 0.207912, 0, 0)') {
            secondsHand.style.transition = "all 0s";
            minutesHand.style.transition = "all 0s";
            hoursHand.style.transition = "all 0s";
        } else {
            secondsHand.style.removeProperty('transition');
            minutesHand.style.removeProperty('transition');
            hoursHand.style.removeProperty('transition');
        };

    }

    setInterval(setDate,1000);
    setDate();
});