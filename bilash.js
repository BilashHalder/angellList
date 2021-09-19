function save(){ 
    let css = `
        .div1{
            width: 200px;
            border-radius:50px;
            animation-name: div1 4s;
            -moz-animation:div1 4s infinite;
            -webkit-animation:div1 4s infinite;
        }

        .div2{
            height:150px;
            border-radius:50px;
            animation-name: div2 4s;
            -moz-animation:div2 4s infinite;
            -webkit-animation:div2 4s infinite;
        }

        .div3{
            height:150px;
            border-radius:50px;
            animation-name: div3 4s;
            -moz-animation:div3 4s infinite;
            -webkit-animation:div3 4s infinite;
        }

        .div4{
            width: 200px;
            border-radius:50px;
            animation-name: div4 4s;
            -moz-animation:div4 4s infinite;
            -webkit-animation:div4 4s infinite;
        }
    `

    let style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
  }

function fade(){
    let css = `
        .div1{
            width: 50px;
            border-radius:50px;
            transition: width 2s linear;
            animation:none;
        }

        .div2{
            height:50px;
            border-radius:50px;
            transition: height 2s linear;
            animation:none;
        }

        .div3{
            height:50px;
            border-radius:50px;
            transition: height 2s linear;
            animation:none;
        }

        .div4{
            width: 50px;
            border-radius:50px;
            transition: width 2s linear;
            animation:none;
        }
    
    `
    let style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
}
let timeout1 = null;
let timeout2 = null;

function startAnimation(){
    save()
    timeout1 = setTimeout(function () {
        fade()
        timeout2=setTimeout(function () {
            startAnimation()
        }, 2000);
    }, 2000);
}

function stopAnimation(){
    if (timeout1) {
        clearTimeout(timeout1);
    }

    if (timeout2) {
        clearTimeout(timeout2);
    }
    fade()
}
