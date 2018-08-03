import $ from 'jquery';
import './style.css';

$('#login').click(()=>{
    console.log('Button Clicked');
    
    import('./helpers').then( resp => {
        console.log('Import Resp:', resp);

        const { login, addToDom } = resp;

        const result1 = login ('SassySally', 'sass');

        const result2 = login ('somerandomname', 'password');

        addToDom('h1', result1, 'blue');

        addToDom('h1', result2, 'purple');

    })
});


// $('#load-image').click((() => {
//     console.log('load image clicked');

//     import('./helpers').then(resp => {
//         const {addImg } = resp;

//         import('./webpack.jpeg').then(src => {
//             addImg(src.default);
//         });

//         addImg(logo);
//     })
// }));

$('#load-image').click( async () => {
    console.log('load image clicked');

        const resp = await import('./helpers');

        const { addImg } = resp;

        const src = await import('./webpack.jpeg');


        addImg(src.default);
    });