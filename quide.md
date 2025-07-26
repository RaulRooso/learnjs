Your current fetch URL is:

js
Copy
Edit
await fetch(`https://xkcd.com/${i}/`)
🔧 Change it to:

js
Copy
Edit
await fetch(`https://wondermark.com/c/${i}/`)
✅ Why? Wondermark comic pages follow the pattern /c/NUMBER/.

🖼️ Step 2: Update the Image Selector
In xkcd, the image is selected with:

js
Copy
Edit
const img = $('div#comic img')
🔍 In Wondermark, the comic image is inside:

html
Copy
Edit
<div id="comic">
  <img src="..." />
</div>
✅ So your selector stays the same:

js
Copy
Edit
const img = $('div#comic img');
🟢 No change needed here!

🧾 Step 3: Adjust What You Print
xkcd has extra metadata like title and alt, but Wondermark does not include those in the image tag.

So this part:

js
Copy
Edit
console.log(img.attr('src'))
console.log(img.attr('title'))
console.log(img.attr('alt'))
🔧 Change to just:

js
Copy
Edit
console.log(img.attr('src'));
✅ Optional: You can extract the <title> tag from the page if you want to display the comic title:

js
Copy
Edit
console.log($('title').text());
📁 Step 4: Update the Range (Optional)
You're scraping xkcd 3118 to 3108. For Wondermark, the latest comic is #1566 (as of your link).

So update:

js
Copy
Edit
for (let i = 3118; i > 3108; i--)
🔧 To something like:

js
Copy
Edit
for (let i = 1566; i > 1556; i--)
✅ Just a small test range for now.

❌ Step 5: Handle 404s Gracefully
If you hit a non-existent Wondermark comic number, you’ll get a 404.

Add error handling like this:

js
Copy
Edit
const res = await fetch(`https://wondermark.com/c/${i}/`);
if (!res.ok) {
    console.log(`Comic ${i} not found (status: ${res.status})`);
    continue;
}
Place this before .text() so it skips 404s without crashing.

✅ Summary of What You Need to Change
Step	What to Change	Action
1	Fetch URL	Change to https://wondermark.com/c/${i}/
2	Selector	Keep as $('#comic img')
3	Output	Print only src and optional title tag
4	Range	Use something like i = 1566 to 1556
5	404 Handling	Add res.ok check

