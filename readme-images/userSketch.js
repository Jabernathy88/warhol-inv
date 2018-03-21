// **example seed, MVP VERSION** 

// 1.
const userSusan = {
  name: "Susan Bishop",
  galleries: [
    {
      name: "Whitespace",
      artworks: [
        {
          name: "Girl With Pearl Earring",
          artist: "Vermeer",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Starry Night",
          artist: "Van Gogh",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Mona Lisa",
          artist: "Leo",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "School of Athens",
          artist: "Raphael",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Elvis Presley Print",
          artist: "Andy Warhol",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }
      ]
    }, {
      name: "Saltworks",
      artworks: [
        {
          name: "School of Athens 2",
          artist: "Raphael",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Elvis Presley Print 2",
          artist: "Andy Warhol",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }
      ]
    }, {
      name: "Pepperworks",
      artworks: [
        {
          name: "School of Athens 3",
          artist: "Raphael",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Elvis Presley Print 3",
          artist: "Andy Warhol",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }
      ]
    }
  ]
}

const susansFirstGallery = userSusan.galleries[0]
const artworksAtWhitespace = susansFirstGallery.artworks

console.log(userSusan)
console.log(artworksAtWhitespace)

// 2.
const userNathan = {
  name: "Nathan Sheraton",
  galleries: [
    {
      name: "MINT Gallery",
      artworks: [
        {
          name: "Poseiden Rocks",
          artist: "Donatello",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Soup Cans Print",
          artist: "Andy Warhol",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }
      ]
    }, {
      name: "Mason Mirror Projects",
      artworks: [
        {
          name: "School of Athens 4",
          artist: "Raphael",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }, {
          name: "Soup Cans Print 2",
          artist: "Andy Warhol",
          img: `../public/img/vermeer_girl-w-pearl1.jpg`
        }
      ]
    }
  ]
}

// working here.