document.addEventListener("DOMContentLoaded", () => {
    const courseItems = document.querySelectorAll(".course-item");

    courseItems.forEach(item => {
        item.addEventListener("click", () => {
            const content = item.querySelector("p");

            // Close all other expanded course items
            document.querySelectorAll(".course-item.expanded").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("expanded");
                    otherItem.querySelector("p").style.maxHeight = 0;
                }
            });

            // Toggle the clicked course item
            item.classList.toggle("expanded");
            if (item.classList.contains("expanded")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});
