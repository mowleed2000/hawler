/* Hawler Restaurant — full delivery menu (Uber Eats Edgware Rd, cross-checked) */
window.HAWLER_MENU = {
  meta: {
    source: 'Uber Eats · Hawler Restaurant (Edgware Rd)',
    rating: '4.4',
    reviewCount: '700+',
    address: '355 Edgware Rd, London W2 1BS',
    hours: '12:00 – 23:00',
    note: 'Prices reflect the Uber Eats menu and may vary for dine-in. Call 020 7724 5757 to confirm.'
  },
  categories: [
    {
      id: 'featured',
      name: 'Most loved',
      intro: 'The dishes guests order again and again.',
      items: [
        { id: 'kuzi_lamb_neck', name: 'Kuzi Lamb Neck', price: '£16.00', desc: 'Served with rice and one sauce.', image: 'images/items/kuzi_lamb_neck.jpg', badge: '#1 most liked' },
        { id: 'slemani_kabab', name: 'Slemani Kabab', price: '£14.99', desc: 'Minced lamb meat, two shish, grilled over charcoal. Served with salad and naan.', image: 'images/items/slemani_kabab.jpg', badge: 'Popular' },
        { id: 'mix_3_kabab', name: 'Mix 3 Kabab', price: '£20.99', desc: 'Mixed kabab — three shish of your choice, grilled. Served with salad and house naan.', image: 'images/items/mix_3_kabab.jpg' },
        { id: 'kuzi_lamb_shank', name: 'Kuzi Lamb Shank', price: '£18.49', desc: 'Served with rice and one sauce.', image: 'images/items/kuzi_lamb_shank.jpg' }
      ]
    },
    {
      id: 'starters',
      name: 'Starters',
      intro: 'Cold mezze and salads, each served with a single baked naan.',
      items: [
        { id: 'fattoush', name: 'Fattoush Salad', price: '£4.49', desc: 'Salad with fried bread bits, parsley and mint. Served with a single baked naan.' },
        { id: 'tabbouleh', name: 'Tabbouleh Salad', price: '£5.50', desc: 'Chopped parsley, tomatoes, crushed wheat, onion, olive oil and lemon juice. Served with a single baked naan.' },
        { id: 'hummus', name: 'Hummus', price: '£5.49', desc: 'Chickpea paste with olive oil, garlic, tahini and lemon juice. Served with a single baked naan. Contains nuts.' },
        { id: 'baba_ganoug', name: 'Baba Ganoug', price: '£5.49', desc: 'Baked aubergine paste with sesame, tahini, yogurt, garlic and lemon juice. Served with a single baked naan. Contains nuts.' },
        { id: 'jajick', name: 'Jajick', price: '£5.49', desc: 'Cucumber in yogurt. Served with a single baked naan.' },
        { id: 'cheese_salad', name: 'Cheese Salad', price: '£4.49', desc: 'Served with a single baked naan.' },
        { id: 'olives', name: 'Olives', price: '£3.50', desc: 'Briny and savoury — perfect alongside grills and mezze.' },
        { id: 'mix_plater', name: 'Mix Platter', price: '£18.99', desc: 'Starters mix of hummus, jajick, baba ganoug, tabbouleh and olives. Served with a single baked naan. Contains nuts.' }
      ]
    },
    {
      id: 'hot-starters',
      name: 'Hot starters',
      intro: 'Crisp kibbeh, falafel and fries from the kitchen.',
      items: [
        { id: 'potato_kibbeh', name: 'Potato Kibbeh', price: '£6.00', desc: 'Deep-fried potato dough stuffed with spiced minced meat. Served with a single baked naan.' },
        { id: 'bulghur_kibbeh', name: 'Bulghur Kibbeh', price: '£6.00', desc: 'Deep-fried dough stuffed with specially spiced minced meat. Served with a single baked naan.' },
        { id: 'rice_kibbeh', name: 'Rice Kibbeh', price: '£6.00', desc: 'Deep-fried dough stuffed with specially spiced minced meat. Served with a single baked naan.', image: 'images/items/rice_kibbeh.jpg' },
        { id: 'kibbeh_mosel', name: 'Kibbeh Mosel', price: '£6.00', desc: 'Cracked wheat and meat dough stuffed with spiced minced meat. Served with a single baked naan.' },
        { id: 'falafel', name: 'Falafel', price: '£5.00', desc: 'Hot falafels served with salad and bread. Served with a single baked naan.' },
        { id: 'fries', name: 'Fries', price: '£4.00', desc: 'Served with a single baked naan.' }
      ]
    },
    {
      id: 'grills',
      name: 'Grills',
      intro: 'Charcoal-fired kebabs, tikka and chops — served with salad and house naan unless noted.',
      items: [
        { id: 'mix_3_kabab_g', name: 'Mix 3 Kabab', price: '£20.99', desc: 'Three shish of your choice, grilled. Served with salad and house naan.', image: 'images/items/mix_3_kabab.jpg' },
        { id: 'slemani_kabab_g', name: 'Slemani Kabab', price: '£14.99', desc: 'Minced lamb, two shish, grilled over charcoal. Served with salad and naan.', image: 'images/items/slemani_kabab.jpg', badge: 'Popular' },
        { id: 'lamb_chops', name: 'Lamb Chops', price: '£18.00', desc: 'Lamb chops, two shish, grilled over charcoal. Served with house naan.' },
        { id: 'chicken_wings', name: 'Grilled Chicken Wing', price: '£12.99', desc: 'Chicken wings grilled over charcoal. Served with salad and house naan.' },
        { id: 'chicken_tikka', name: 'Chicken Tikka with Salad', price: '£15.99', desc: 'Cubes of marinated chicken breast, two shish, grilled over charcoal. Served with salad and house naan.', image: 'images/items/chicken_tikka.jpg' },
        { id: 'lamb_tikka', name: 'Lamb Tikka with Salad', price: '£15.99', desc: 'Cubes of marinated lamb fillet, two shish, grilled over charcoal. Served with salad and house naan.' },
        { id: 'chicken_kabab', name: 'Chicken Kabab with Salad', price: '£15.99', desc: 'Minced chicken breast, two shish, grilled over charcoal. Served with rice and house naan.' },
        { id: 'iranian_kabab', name: 'Iranian Kabab with Rice', price: '£18.00', desc: 'Minced lamb, two shish, grilled over charcoal. Served with rice and house naan.' },
        { id: 'mahshi_kabab', name: 'Mahshi Kabab', price: '£16.99', desc: 'Minced lamb, two shish, grilled over charcoal with parsley and herbs. Served with salad and house naan.' },
        { id: 'mix_2_shish', name: 'Mix 2 Shish with Salad', price: '£16.49', desc: 'Any two shish of kabab or tikka. Served with salad and house naan.' },
        { id: 'mix_5_shish', name: 'Mix of any Five Shish with Salad', price: '£37.49', desc: 'Five shish: lamb kabab, lamb tikka, chicken kabab, chicken tikka and chicken wings. Served with salad and house naan.' },
        { id: 'mix_10_shish', name: 'Mix of Any 10 Shish with Salad', price: '£69.99', desc: 'Ten shish: two lamb kabab, two lamb tikka, two chicken kabab, two chicken tikka, chicken wings and chops. Served with salad and house naan.' }
      ]
    },
    {
      id: 'seafood',
      name: 'Seafood grills',
      intro: 'Fresh fish over charcoal.',
      items: [
        { id: 'grilled_sea_bass', name: 'Grilled Sea Bass with Salad', price: '£18.99', desc: 'Sea bass grilled over charcoal, served with salad.', image: 'images/items/grilled_sea_bass.jpg' }
      ]
    },
    {
      id: 'mains',
      name: 'Main dishes',
      intro: 'Slow Kuzi, biryani and house sauces.',
      items: [
        { id: 'kuzi_lamb_neck_m', name: 'Kuzi Lamb Neck', price: '£16.00', desc: 'Served with rice and one sauce.', image: 'images/items/kuzi_lamb_neck.jpg', badge: '#1 most liked' },
        { id: 'kuzi_lamb_shank_m', name: 'Kuzi Lamb Shank', price: '£18.49', desc: 'Served with rice and one sauce.', image: 'images/items/kuzi_lamb_shank.jpg' },
        { id: 'kuzi_chicken', name: 'Kuzi Chicken', price: '£16.49', desc: 'Chicken seasoned and cooked slowly. Served with rice and sauce.', image: 'images/items/kuzi_chicken.jpg' },
        { id: 'special_qozi', name: 'Special Qozi', price: '£18.99', desc: 'A piece of baby lamb served with rice and stew.', image: 'images/items/special_qozi.jpg' },
        { id: 'lamb_biryani', name: 'Lamb Biryani with a Sauce', price: '£15.99', desc: 'Lamb meat biryani rice. Served with two sauces.' },
        { id: 'chicken_biryani', name: 'Chicken Biryani with a Sauce', price: '£15.99', desc: 'Chicken biryani rice. Served with two sauces.' },
        { id: 'plain_biryani', name: 'Plain Biryani with a Sauce', price: '£12.00', desc: 'Plain biryani rice served with one sauce.' },
        { id: 'plain_rice_sauce', name: 'Plain Rice with 1 Sauce', price: '£12.00', desc: 'With one sauce — choose okra, white beans, potato or aubergine.' },
        { id: 'white_beans_sauce', name: 'White Beans Sauce', price: '£3.99', desc: 'Rich and creamy sauce made with white beans.' },
        { id: 'okra_sauce', name: 'Okra Sauce', price: '£3.99', desc: 'Rich and tangy sauce made with okra.' },
        { id: 'tabsee_sauce', name: 'Tabsee Sauce', price: '£3.99', desc: 'Spicy and aromatic sauce.' },
        { id: 'potato_sauce', name: 'Potato Sauce', price: '£3.99', desc: 'Rich and creamy potato sauce, served hot.' },
        { id: 'chicken_soup', name: 'Chicken Soup', price: '£3.99', desc: 'Hearty soup made with chicken.' },
        { id: 'lentils_soup', name: 'Lentils Soup', price: '£3.50', desc: 'Hearty, comforting soup made with lentils.' }
      ]
    },
    {
      id: 'specials',
      name: 'Weekend specials',
      intro: 'Traditional dishes available Friday–Sunday.',
      items: [
        { id: 'pachaa', name: 'Pacha', price: '£20.00', desc: 'Lamb head served with soup and biryani rice. Weekends only.', image: 'images/items/pachaa.jpg', badge: 'Weekends only' },
        { id: 'dolma', name: 'Dolma', price: '£19.99', desc: 'Grape leaves stuffed with rice and meats, simmered until tender. Friday–Sunday only.', badge: 'Weekends only' }
      ]
    },
    {
      id: 'sides',
      name: 'Side orders',
      intro: 'Bread, rice and extras.',
      items: [
        { id: 'fresh_naan', name: 'Freshly Baked Naan', price: '£1.50', desc: 'Soft flatbread, baked to order.' },
        { id: 'slemani_naan', name: 'Freshly Baked Slemani Naan', price: '£1.99', desc: 'Traditional Slemani-style house naan.' },
        { id: 'white_rice', name: 'White Rice', price: '£4.50', desc: 'Steamed plain white rice.' },
        { id: 'plain_rice', name: 'Plain Rice', price: '£4.50', desc: 'Steaming hot plain white rice.' },
        { id: 'chips', name: 'Chips', price: '£3.49', desc: 'Crisp golden chips.' },
        { id: 'olives_side', name: 'Olives', price: '£3.00', desc: 'Briny olives to share.' }
      ]
    },
    {
      id: 'juices',
      name: 'Fresh juices',
      intro: 'Pressed and mixed to order.',
      items: [
        { id: 'orange_juice', name: 'Fresh Orange Juice', price: '£4.00', desc: 'Freshly squeezed orange juice.' },
        { id: 'mint_lemonade', name: 'Mint Lemonade', price: '£5.00', desc: 'Refreshing drink with a cool mint twist.' },
        { id: 'lemonade', name: 'Fresh Lemonade', price: '£4.50', desc: 'Refreshing drink made with lemon.' }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      intro: 'Soft drinks and water.',
      items: [
        { id: 'soft_drinks', name: 'Soft Drinks', price: '£1.99', desc: 'Choice of canned soft drinks.' },
        { id: 'still_water', name: 'Still Water', price: '£1.99', desc: '500 ml.' },
        { id: 'sparkling_water', name: 'Sparkling Water', price: '£2.99', desc: '500 ml sparkling water.' },
        { id: 'yogurt_drink', name: 'Yogurt Drink', price: '£2.99', desc: '500 ml yogurt drink.' }
      ]
    }
  ]
};
