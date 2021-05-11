const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'сайт Гамлета!!', // ←  Start by adding your name!
    title: 'виды мечей',
    occupation: 'specialist in science fiction & swords',
    location: 'Magnitogorsk',
    bio: 'Я очень долго трудился над этим проектом. Почему я выбрал именно мечи. с раннего возраста. Я очень люблю фантастику, особенно всю тему связанную с мечами, поэтому я решил поделиться некой информации и с вами. https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%87',

    text: 'мечи',
    
    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'putin@mail.ru',
    twitter: 'elonmusk',
    linkedin: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%87',
    instagram: 'fire_and_sun',
    facebook: 'DonaldTrump',

    /**
     * Layout
     */
    photographer: 'Hamlet Mkrtchyan',
    service: 'Academic lyceum',
    credit: 'https://www.instagram.com/fire_and_sun/',
    image: arc.static('background.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
