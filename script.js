document.addEventListener("DOMContentLoaded", function() {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Display current day of the week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `Current Day: ${currentDay}`;

    // Display current UTC time in milliseconds
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `Current UTC Time (ms): ${currentDate.getTime()}`;

    // Replace with your GitHub repository URL
    const githubURLElement = document.querySelector('[data-testid="githubURL"]');
    githubURLElement.href = "https://github.com/yourusername/your-repo";
});