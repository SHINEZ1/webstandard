// //배열의 결합
// {
//     const veggie = ['tomato','cucumber','beans'];
// const meat = ['pork','beef','chicken'];

// const menu=[...veggie,'pasta',...meat];
// console.log(menu);
// }

// //배열의 복사
// {
// const veggie = ['tomato','cucumber','beans'];
// const newVeggie = veggie;
// console.log(newVeggie);

// veggie.push('peas');
// console.log(newVeggie);
// console.log(veggie);

// }

{
    const veggie = ['tomato','cucumber','beans'];
    const newVeggie = [...veggie];
    console.log(veggie);
    console.log(newVeggie);
    newVeggie.push('peas');
    console.log(newVeggie);
    console.log(veggie);
}