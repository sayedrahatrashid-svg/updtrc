// ---------------------------------------------------------------------------
// Image sources. All photos below are free-to-use Unsplash images (Unsplash
// License: free for commercial use, no attribution required).
//
// To use YOUR OWN photos instead:
//   1. Put image files in the /public folder (e.g. /public/floor.jpg)
//   2. Replace the URL here with "/floor.jpg"
// For production, downloading these and self-hosting in /public is recommended
// so your site never depends on Unsplash being reachable.
// ---------------------------------------------------------------------------

const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const img = {
  // garment / factory
  factoryWorkers: u('1589793463357-5fb813435467', 1800), // production floor, workers
  sewingMachines: u('1675176785803-bffbbb0cd2f4'),       // row of industrial machines
  clothingRack:   u('1441984904996-e0b6ba687e04'),       // finished garments on rails
  apparel:        u('1562157873-818bc0726f68'),           // folded / hung apparel

  // corporate gifts
  gifting:        u('1732532973406-0a82b447739c', 1800),  // curated corporate gift flatlay
  luxuryBox:      u('1674620213535-9b2a2553ef40'),         // premium gift box

  // capabilities — self-hosted product photos
  capKnit:       '/capabilities/KNIT-TOP.jpg',
  capDenim:      '/capabilities/DENIM-BOTTOM.jpg',
  capOuterwear:  '/capabilities/OUTERWEAR.jpg',
  capKidswear:   '/capabilities/KIDSWEAR.jpg',
  capPrint:      '/capabilities/PRINT&EMBROIDERY.jpg',
}
