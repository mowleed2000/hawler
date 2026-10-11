import urllib.request
import os
import json

data = [
    {
      "id": "kuzi_lamb_neck",
      "Title": "Kuzi Lamb Neck",
      "Description": "Served with rice and one sauce.",
      "Price": "£16.00",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/0810668e3b7ab8aeca63e3ede0b8a88d/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "kuzi"
    },
    {
      "id": "mix_3_kabab",
      "Title": "Mix 3 Kabab",
      "Description": "Mixed kabab three shish choice of grilled. Served with salad and house Nan. Three skewers.",
      "Price": "£20.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/3e142b10618b3c8458eba55574f00e3f/a19bb09692310dfd41e49a96c424b3a6.jpeg",
      "Category": "grills"
    },
    {
      "id": "kuzi_lamb_shank",
      "Title": "Kuzi Lamb Shank",
      "Description": "Served with rice and one sauce.",
      "Price": "£18.49",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/175db9376ff64eeccac53410978c2961/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "kuzi"
    },
    {
      "id": "slemani_kabab",
      "Title": "Slemani Kabab",
      "Description": "Minced lamb meat two shish grilled over charcoal. Served with salad and nan.",
      "Price": "£14.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/ca07733d319603748af46816120f373e/a19bb09692310dfd41e49a96c424b3a6.jpeg",
      "Category": "grills"
    },
    {
      "id": "grilled_sea_bass",
      "Title": "Grilled Sea Bass with Salad",
      "Description": "Sea bass fish grilled over charcoal served with fresh salad.",
      "Price": "£18.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/f62ab95cff817946342778674e3a2d88/a19bb09692310dfd41e49a96c424b3a6.jpeg",
      "Category": "fish"
    },
    {
      "id": "special_qozi",
      "Title": "Special Qozi (Baby Lamb)",
      "Description": "A piece of any part of baby lamb served with rice and rich stew.",
      "Price": "£18.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/6a8435997784bee90cb1ff83b0bbc683/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "kuzi"
    },
    {
      "id": "kuzi_chicken",
      "Title": "Kuzi Chicken",
      "Description": "Chicken seasoned and cooked slowly, served with rice and sauce.",
      "Price": "£15.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/cb806b0233ff176c1bdbf6adfdce40fd/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "kuzi"
    },
    {
      "id": "pachaa",
      "Title": "PACHAA (Weekend Special)",
      "Description": "Specially cooked lamb head, legs and tongue served with house nan. Served weekends only.",
      "Price": "£19.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/c2f269a7b934a4930b6e0084c72b5e7d/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "weekend"
    },
    {
      "id": "rice_kibbeh",
      "Title": "Rice Kibbeh",
      "Description": "Deep fried dough stuffed with specially spiced minced meat. Served with fresh baked nan.",
      "Price": "£6.00",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/11c6450fa4f722c6733ece1ccdc86805/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "starters"
    },
    {
      "id": "chicken_tikka",
      "Title": "Chicken Tikka with Salad",
      "Description": "Cubes of marinated chicken breast two shish grilled over charcoal served with salad and house Nan.",
      "Price": "£15.99",
      "Image_URL": "https://tb-static.uber.com/prod/image-proc/processed_images/528b1426eac71f05f0881c26cfe2910d/70aa2a4db7f990373ca9c376323e3dea.jpeg",
      "Category": "grills"
    }
]

out_dir = "C:/Users/fifia/.gemini/antigravity/scratch/hawler-restaurant-website/images/items"
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for item in data:
    url = item['Image_URL']
    out_path = os.path.join(out_dir, f"{item['id']}.jpg")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(out_path, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded: {item['id']}.jpg")
    except Exception as e:
        print(f"Failed to download {item['id']}: {e}")
