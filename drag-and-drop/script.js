const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');



function imgdragStart(e) {
    console.log(e.target.id + ' drag started')
    e.dataTransfer.setData('imgId', e.target.id);

}

function divDragOver(e) {
    // by default dropping something inside other tag is not allowed
    e.preventDefault();
    // console.log(e.target.id + ' dragged over')
}

function divDrop(e) {
    e.preventDefault();
    // console.log(e.target.id + ' dropped inside')

    const imgNode = document.getElementById(e.dataTransfer.getData('imgId'))

    const oldparent = imgNode.parentElement;
    let parent = e.target;
    // the following if statement changed the parent from the img to the div tag if we dropped the image inside
    // another image
    if (parent.tagName === 'IMG') parent = parent.parentElement;

    const secondImg = parent.querySelector('img');



    parent.appendChild(imgNode);
    oldparent.appendChild(secondImg);

}


// ondragstart


img1.ondragstart = imgdragStart
img2.ondragstart = imgdragStart
img3.ondragstart = imgdragStart


div1.ondragover = divDragOver;
div2.ondragover = divDragOver;
div3.ondragover = divDragOver;

div1.ondrop = divDrop;
div2.ondrop = divDrop;
div3.ondrop = divDrop;  