let confirm = document.querySelector('.submit');
let block = $('.block');

const show = () => {

    // Taking data from input's
    let text = document.querySelector('.text').value;
    let bgColor = document.querySelector('.backgroundColor').value;
    let fontSize = document.querySelector('.fontSize').value;
    let fontColor = document.querySelector('.fontColor').value;
    let fontWeight = document.querySelector('.fontWeight').value;
    let opacity = document.querySelector('.opacity').value;
    let border = document.querySelector('.border').value;
    let borderRadius = document.querySelector('.borderRadius').value;
    let letterSpacing = document.querySelector('.letterSpacing').value;

    let width = document.querySelector('.width').value;
    let height = document.querySelector('.height').value;
    let margin = document.querySelector('.margin').value;
    let padding = document.querySelector('.padding').value;
    let posTop = document.querySelector('.posTop').value;
    let posRight = document.querySelector('.posRight').value;
    let posBottom = document.querySelector('.posBottom').value;
    let posLeft = document.querySelector('.posLeft').value;
    let textAlign = document.querySelector('.textAlign').value;


    // Taking data from variables and changing style
    block.html(text);
    block.css('background-color', bgColor);
    block.css('font-size', fontSize);
    block.css('color', fontColor);
    block.css('font-weight', fontWeight);
    block.css('opacity', opacity);
    block.css('border', border);
    block.css('border-radius', borderRadius);
    block.css('letter-spacing', letterSpacing);

    block.css('width', width);
    block.css('height', height);
    block.css('margin', margin);
    block.css('padding', padding);
    block.css('top', posTop);
    block.css('right', posRight);
    block.css('bottom', posBottom);
    block.css('left', posLeft);
    block.css('text-align', textAlign);

}

setInterval(show, 100);
// confirm.setAttribute("onclick",`show()`);


