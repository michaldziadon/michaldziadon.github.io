$(document).ready(function() {

    // odwolywanie sie po znacznik

    // jak zrobimy var to bedzie kombatybilne z IE

    let allListItems = $(`li`);

    console.log(allListItems);

    allListItems.css(`background-color` , `red` );



    // odwolywanie sie po klasach


    // let appParagraphs = $(` body > .content`);
    // // poszukujemy pierwszego

    let allParagraphs = $(` section .content `);

    console.log(allParagraphs);


     // odwolywanie sie po indentyfikatorach


     let sectionAbout = $(`#about`);

    console.log(sectionAbout);

})