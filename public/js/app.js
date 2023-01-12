import styles from "/styles/Home.module.css"

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
        }else{
            entry.target.classList.remove(styles.show);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {
    observer.observe(element);
});