// เลือกองค์ประกอบที่จำเป็น
const slideBanner = document.getElementById("slidebanner");
const slides = document.querySelectorAll("#slidebanner > div"); // สไลด์ทั้งหมด
const totalSlides = slides.length; // จำนวนสไลด์
let currentIndex = 0; // เริ่มต้นที่สไลด์แรก

// ฟังก์ชันแสดงสไลด์เพียงครั้งละ 1 อัน
function showSlide(index) {
    const offset = -index * 100; // คำนวณตำแหน่ง (เลื่อนไปทีละ 100% ตามสไลด์)
    slideBanner.style.transform = `translateX(${offset}%)`; // เลื่อนตำแหน่ง
    slideBanner.style.transition = "transform 0.5s ease-in-out"; // เพิ่มการเลื่อนแบบ Smooth
}

// การตั้งเวลาเลื่อนอัตโนมัติ
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // วนกลับไปที่สไลด์แรกเมื่อถึงอันสุดท้าย
    showSlide(currentIndex);
}, 5000); // เปลี่ยนสไลด์ทุก 5 วินาที
