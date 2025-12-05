const   dyBoxContainer = select ('.dyBox-container')
        dyBox = select ('.dyBox'),
        innerBox_S1 = select('.inner-box.s1'),
        legends = select ('.legends'),
        leftSection = select ('.left-section'),
        uploadBtn = select ('.upload-btn')
        

uploadBtn.addEventListener('click', () => {
    legends.classList.add('hidden')
    leftSection.classList.add('hidden')
    uploadBtn.classList.add('hidden')
    dyBoxContainer.classList.add('stretched-full')
    setTimeout(() => {
        dyBox.classList.remove('primary')
        dyBox.classList.add('secondary')
    }, 100);
    setTimeout(() => {
        innerBox_S1.classList.add('none')
    }, 200);
})