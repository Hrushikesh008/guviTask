let count = 10;

const countdown = () => {
    document.getElementById('countdown').textContent = count;
    count--;

    if (count >= 0) {
        setTimeout(countdown, 1000);
    } else {
        document.getElementById('countdown').textContent = "Happy Independence Day";
    }
};

setTimeout(countdown, 0);