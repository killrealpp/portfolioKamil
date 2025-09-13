export const translate = () => {
    const translations = {
        ru: {
            menu1: "Образование",
            menu2: "Опыт работы",
            menu3: "Контакты",
            myName: "Галиуллин Камиль Ниязович",
            city: "Казань",
            age: "Возраст: 22 года",
            download: "Скачать",
            education: "Образование",
            educationText: "«Казанский национальный исследовательский технический университет им. А.Н. Туполева-КАИ» г. Казань 2021-2025 бакалавр: «Электроэнергетика и электротехника» ВКР на тему «Адаптивный круиз контроль в грузовых авто»",
            work: "Опыт работы",
            ikea: "«ИКЕА ДОМ» 06.2019-08.2022",
            worker1: "Продавец консультант",
            workDesk1: "Консультирование покупателей в отделе сопутствующих товаров и света. Оформление заказ-наряда. Работа во внутреннем документ обороте на базе Excel.",
            iro: "«ИРО РТ» 11.2022–08.2025",
            worker2: "Оператор котельной",
            workDesk2: "Обеспечение бесперебойной работы котлов течения отопительного сезона",
            skill1: "английский (А2)",
            skill2: "Excel (сводные таблицы)",
            call: "Позвонить мне?",
            footerName: "Галиуллин Камиль Ниязович",
            footerText: "Если вам понравилось мое резюме, свяжитесь со мной и давайте работать вместе"
        },
        en: {
            menu1: "Education",
            menu2: "Work experience",
            menu3: "Contacts",
            myName: "Galiullin Kamil Niyazovich",
            city: "Kazan",
            age: "Age: 22 years old",
            download: "Download",
            education: "Education",
            educationText: "Federal State Budgetary Educational Institution of Higher Education «Kazan National Research Technical University named after A. N. Tupolev KAI» (KNRTU-KAI) 2021-2025 bachelor: Electric Power Engineering and Electrical Engineering Final qualifying work: Adaptive cruise control (CC) system of a truck",
            work: "Work experience",
            ikea: "“IKEA-HOME” 06.2019-08.2022",
            worker1: "Sales consultant",
            workDesk1: "Consulting customers in the department of related goods and light. Drawing up an application-order. Working with internal document flow based on Excel.",
            iro: "«Institute of Education Development of the Republic of Tatarstan» 11.2022-08.2025",
            worker2: "Boiler room operator",
            workDesk2: "Ensuring the smooth operation of boiler houses during the heating season",
            skill1: "English (A2)",
            skill2: "Excel(Summary tables)",
            call: "Call me",
            footerName: "Galiullin Kamil Niyazovich",
            footerText: "If you like my resume, please contact me and let's work together"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'ru';

    const updateText = (lang) => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        const button = document.querySelector('.translate.btn');
        if (button) {
            button.textContent = lang === 'ru' ? 'en' : 'ru';
        }
    };

    const toggleLanguage = () => {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        localStorage.setItem('language', currentLanguage);
        updateText(currentLanguage);
    };

    const button = document.querySelector('.translate.btn');
    if (button) {
        button.addEventListener('click', toggleLanguage);
    }

    updateText(currentLanguage);
};