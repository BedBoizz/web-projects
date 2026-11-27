const btnToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const label = document.getElementById("theme-label");

// Khối 1: Chạy mỗi lần bấm nút (ghi giấy nhớ)
btnToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.className = "ti ti-sun";
        label.textContent = "Chế độ sáng";
        localStorage.setItem("theme", "dark");
    } else {
        icon.className = "ti ti-moon";
        label.textContent = "Chế độ tối";
        localStorage.setItem("theme", "light");
    }
});

// Khối 2: Chạy 1 lần lúc mở trang (đọc giấy nhơ)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.className = "ti ti-sun";
    label.textContent = "Chế độ sáng";
}
