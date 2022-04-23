console.log('Hey');

const imgBox=document.querySelector('.imgBox');
const whiteBoxes=document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e) => {
    console.log('dragstart');
    setTimeout(() =>{
       e.targetclassName='hide';
    },0);
    e.target.className +=' hold';
});

imgBox.addEventListener('dragend',(e) => {
    console.log('dragend');
    e.targetclassName='imgBox';
});

for(var whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e) => {
        console.log('dragover');
        e.preventDefault();
    });
    whiteBox.addEventListener('dragenter',(e) =>  {
        console.log('dragenter');
    });
    whiteBox.addEventListener('dragleave',(e) =>  {
        console.log('dragleave');
    });
    whiteBox.addEventListener('drop',(e) =>{
        console.log('drop');
        e.target.append(imgBox);
    });
}