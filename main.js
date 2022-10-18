let rBut =   document.querySelector(".btnRight"); 
let lBut = document.querySelector(".btnLeft"); 
let slides = document.querySelectorAll("img"); 
// Объявляем переменную i  
let i = 0; 
  
// Объявляем событие нажатия на кнопку вперёд 
rBut.addEventListener("click", function () { 
    // Увеличиваем переменную i 
    // console.log(i); 
    ++i 
    // Условие если переменная i больше или равна количеству слайдов 
    if (i >= slides.length) { 
        // Удаляем класс block предыдущему слайду 
        slides[i-1].classList.remove("block"); 
        // Присваиваем переменной i ноль 
        i = 0; 
        // Добавляем класс block следующему слайду 
        slides[i].classList.add("block"); 
    } else { // Иначе 
        // Удаляем класс block предыдущему слайду 
        slides[i-1].classList.remove("block"); 
        // Добавляем класс block следующему слайду 
        slides[i].classList.add("block"); 
    } 
     
}) 
lBut.addEventListener("click", function(){ 
    --i; 
    // console.log('--i: ' + i)
    if (i < 0) { 
        // console.log('i < 0: ')
        // console.log(i)
        // Удаляем класс block предыдущему слайду 
        slides[i+1].classList.remove("block"); 
        // console.log('slides[i+1]: ')
        // console.log(slides[i+1])
        // Присваиваем переменной i ноль 
        i = slides.length ; 
        // console.log("i: ")
        // console.log(i)
        
        // Добавляем класс block следующему слайду 
        slides[i-1].classList.add("block"); 
        // console.log('slides[i-1]): ')
        // console.log(slides[i-1])
    } else if (i == 8) {
            //    slides[i].classList.remove("block"); 
            //    slides[i-1].classList.add("block"); 
    }   else { 
    //    console.log('else:' + i)
        // Удаляем класс block предыдущему слайду 
        slides[i+1].classList.remove("block"); 
        // console.log(slides[i+1 ]) 
        // Добавляем класс block следующему слайду 
        slides[i].classList.add("block"); 
        // console.log(slides[i])
    } 
})


