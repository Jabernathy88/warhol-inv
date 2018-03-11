Artwork.destroy_all
Gallery.destroy_all
User.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

## 4 users
susan = User.create(
  name: 'Susan Bishop',
  img_url: 'user image'
)
nathan = User.create(
  name: 'Nathan Sheraton',
  img_url: 'user image'
)
ayana = User.create(
  name: 'Ayana Reddick',
  img_url: 'user image'
)
jeremy = User.create(
  name: 'Jeremy Abernathy',
  img_url: 'user image'
)

## susan has 3 galleries 
susan_gallery1 = Gallery.create(
  user: susan,
  name: "Whitespace",
  img_url: "gallery image"
)
susan_gallery2 = Gallery.create(
  user: susan,
  name: "Saltworks",
  img_url: "gallery image"
)
susan_gallery3 = Gallery.create(
  user: susan,
  name: "Pepperworks",
  img_url: "gallery image"
)

## whitespace has 5 artworks
Artwork.create(
  gallery: susan_gallery1,
  name: "Girl With Pearl Earring",
  artist: "Vermeer",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery1,
  name: "Elvis Presley Print",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery1,
  name: "Poseiden Rocks",
  artist: "Donatello",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery1,
  name: "School of Athens",
  artist: "Raphael",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery1,
  name: "Starry Night",
  artist: "Van Gogh",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)

# saltworks has 2 artworks
Artwork.create(
  gallery: susan_gallery2,
  name: "Girl With Pearl Earring 2",
  artist: "Vermeer",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery2,
  name: "Starry Night 2",
  artist: "Van Gogh",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)

# pepperworks has 2 artworks
Artwork.create(
  gallery: susan_gallery3,
  name: "Girl With Pearl Earring 3",
  artist: "Vermeer",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: susan_gallery3,
  name: "Starry Night 3",
  artist: "Van Gogh",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)

# nathan has 2 galleries 
nathan_gallery1 = Gallery.create(
  user: nathan,
  name: "MINT Gallery",
  img_url: "gallery image"
)
nathan_gallery2 = Gallery.create(
  user: nathan,
  name: "Mason Mirror Projects",
  img_url: "gallery image"
)

# mint gallery has 2 artworks
Artwork.create(
  gallery: nathan_gallery1,
  name: "Soup Cans Print",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: nathan_gallery1,
  name: "Soup Cans Print 2",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)

# mason mirror has 2 artworks
Artwork.create(
  gallery: nathan_gallery2,
  name: "Soup Cans Print 3",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)
Artwork.create(
  gallery: nathan_gallery2,
  name: "Soup Cans Print 4",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)

# ayana has 1 gallery with 1 artwork
ayana_gallery1 = Gallery.create(
  user: ayana,
  name: "High Fives Gallery",
  img_url: "gallery image"
)
Artwork.create(
  gallery: ayana_gallery1,
  name: "LOVE",
  artist: "Ayana Reddick",
  img_url: "/img/ayanas-purplebg.png"
)

# jeremy has 1 gallery with 1 artwork
jeremy_gallery1 = Gallery.create(
  user: jeremy,
  name: "The Brooklyn Museum",
  img_url: "gallery image"
)
Artwork.create(
  gallery: jeremy_gallery1,
  name: "Soup Cans Print 5",
  artist: "Andy Warhol",
  img_url: "/img/vermeer_girl-w-pearl1.jpg"
)