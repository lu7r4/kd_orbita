// отзывы
const testimonials = [
    {
        name: "Тамара Андреева",
        data: "09.10.2022",
        testimonial:
        "Были у вас на конной прогулке, все очень понравилось: умные и ухоженные лошадки, внимательные инструктора!Непременно приедем ещё, все просто супер! 🐎❤️"
    },
    {
        name: "Юлия Говолко",
        data: "15.08.2022",
        testimonial:
        "Мне очень понравилось кататься на горделии красивая лошадь рысью понравилась скакать в субботу у вас была спасибо за хорошие эмоции"
    },
    {
        name: "Елена Мялкина",
        data: "18.07.2022",
        testimonial:
        "Были сегодня на конной прогулке, очень понравилось. Ещё до дома не доехали, а сын уже просит на новую прогулку записать. Отдельное спасибо Екатерине и Максиму."
    },
    {
        name: "Sakura Horuno",
        data: "21.06.2021",
        testimonial:
        "ездила на мирте очень крутая лошадь 'галоп мягкий сама красавица все очень круто прошло получила массу класный ощущений приеду к вам еще 😍😍😍😍"
    },
    {
        name: "Юлия Королева",
        data: "29.08.2020",
        testimonial:
        "Очень крутая прогулка! Грамотные и приятные инструктора, шикарные и послушные лошадки! Были всей семьёй, ребенок 7 лет, в восторге! Рекомендую всем! Мы обязательно будем посещать сие место на регулярной основе 🙂"
    },
];
  //Current Slide
let i = 0;
  //Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
        <h5>${testimonials[i].data}</h5>
        <h3>${testimonials[i].name}</h3>
    `;
};
window.onload = displayTestimonial;

