const   dyBox = select ('.dyBox'),
        legends = select ('.legends'),
        leftSection = select ('.left-section'),
        uploadBtn = select ('.upload-btn')

uploadBtn.addEventListener('click', () => {
    legends.classList.add('hidden')
    leftSection.classList.add('hidden')
    uploadBtn.classList.add('hidden')
    setTimeout(() => {
        dyBox.classList.remove('primary')
        dyBox.classList.add('secondary')
    }, 100);
})