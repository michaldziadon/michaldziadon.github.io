document.querySelector('button').addEventListener('click', function(){
    console.log('klikam');
    document.getElementsByTagName('p')[0].classList.toggle('bg-yellow');
    document.getElementsByTagName('p')[1].classList.toggle('bg-red');;
})