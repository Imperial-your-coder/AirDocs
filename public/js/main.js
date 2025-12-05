const   dyBoxContainer = select ('.dyBox-container')
        closingCurtain = select ('.dyBox-container .closing-curtain'),
        dyBox = select ('.dyBox'),
        innerBox_S1 = select('.inner-box.s1'),
        innerBox_S2 = select('.inner-box.s2'),
        legends = select ('.legends'),
        leftSection = select ('.left-section'),
        uploadBtn = select ('.upload-btn')
        

uploadBtn.addEventListener('click', () => {
    legends.classList.add('hidden')
    innerBox_S1.classList.add('hidden')
    dyBoxContainer.classList.add('stretched-full')
    closingCurtain.classList.remove('hidden')
    setTimeout(() => {
        dyBox.classList.remove('primary')
        dyBox.classList.add('secondary')
    }, 100);
    setTimeout(() => {
        innerBox_S1.classList.add('none')
        innerBox_S2.classList.remove('none')
    }, 200);
    setTimeout(() => {
        innerBox_S2.classList.remove('hidden')
    }, 300);
})