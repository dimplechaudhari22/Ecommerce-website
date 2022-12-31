var indicator = document.getElementsByClassName('indicator');
var section = document.querySelector('.content');
var video = document.querySelector('video');
for (var i = 0; i < indicator.length; i++) {
    indicator[i].onclick = function (e) {



        var indicator_image = document.getElementsByClassName("active");
        indicator_image[0].className = indicator_image[0].className.replace("active", "");
        this.className += " active";


        if (indicator_image) {
            section.src = e.target.src;
            section.style.display = "block";
            video.style.display = "none";
            video.src = "";
        }
        if (e.target == indicator[4]) {
            section.style.display = "none";
            video.style.display = "block";
            video.src = "video.mp4";
        }

    }
}
/*for add to cart*/
var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var addtoCart = document.querySelectorAll('.addTo-cart');
for (but of addtoCart) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
        if (add >= 1) {
            confirm('This item is already added your cart');
            noti.setAttribute('data-count', 1);

        }



        //copy and paste element

        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";
        if (clone) {
            noti.onclick = () => {
                select.classList.toggle('display');
            }

        }
    })
}

