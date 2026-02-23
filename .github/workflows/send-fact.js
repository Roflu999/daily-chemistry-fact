 const https = require('https');

   const chemistryFacts = [
     "🧪 **Gold is the only metal that is naturally yellow.** All other yellow metals (like brass) are alloys. Gold's color comes
 from relativistic effects on its electrons!",
     "🧊 **Water expands when it freezes.** Unlike most substances, ice is less dense than liquid water — that's why ice floats and
 why pipes burst in winter.",
     "🔥 **The only letter not appearing on the periodic table is 'J'.** Go ahead, check — you'll find J nowhere among the 118
 elements.",
     "💎 **Diamonds and graphite are both pure carbon.** The difference? Atomic arrangement. Diamonds have strong 3D bonds; graphite
 has weak layers that slide apart.",
     "☀️ **The Sun is mostly hydrogen (73%) and helium (25%).** All other elements combined make up less than 2% of our star's
 mass.",
     "🍌 **Bananas are radioactive.** They contain potassium-40. You'd need to eat 10 million at once for a lethal dose!",
     "🌊 **There's gold in seawater!** About 13 billionths of a gram per liter. The ocean contains more gold than all land deposits
 combined.",
     "🔋 **Lithium is the lightest metal.** So light it floats on water — though it reacts violently with water, so don't try this
 at home!",
     "🦴 **Your body contains enough carbon to make 900 pencils.** Humans are about 18% carbon by mass.",
     "⚡ **Neon lights aren't always neon.** Neon = red-orange, Argon = blue, Helium = pink, Krypton = white, Xenon = purple.",
     "🧲 **Liquid helium can climb walls.** Below -271°C, it becomes a superfluid with zero viscosity and flows upward against
 gravity.",
     "💨 **Oxygen isn't flammable — it's an oxidizer.** It makes other things burn, but pure oxygen itself doesn't catch fire.",
     "🌡️ **Absolute zero is -273.15°C (-459.67°F).** At this temperature, all molecular motion theoretically stops.",
     "🔬 **Glass is an amorphous solid.** Its atoms are arranged randomly. Old windows are thicker at the bottom due to very slow
 flow over centuries.",
     "⚗️ **The smell of rain (petrichor)** comes from geosmin, a compound released by bacteria when rain hits soil.",
     "🍯 **Honey never spoils.** Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible!",
     "🧂 **Table salt (NaCl) is a mineral called halite.** It's the only family of rocks humans regularly eat.",
     "🦑 **Octopus blood is blue.** They use copper-based hemocyanin instead of iron-based hemoglobin.",
     "🌋 **Sulfur smells like rotten eggs because of hydrogen sulfide (H₂S).** Pure sulfur is actually odorless.",
     "🍎 **Apple seeds contain cyanide.** You'd need to chew ~200 seeds (about 20 apples) for a lethal dose.",
     "🧈 **Butter is yellow because of beta-carotene** from grass that cows eat. Winter butter is paler.",
     "💊 **Aspirin was originally made from willow bark.** People chewed it for pain relief for thousands of years.",
     "🦷 **Tooth enamel is the hardest substance in your body.** It's 96% hydroxyapatite, harder than bone.",
     "🎆 **Fireworks colors come from metal salts:** Red = strontium, Green = barium, Blue = copper, White = magnesium.",
     "🧃 **Tear gas (CS gas) is actually a solid powder** heated to become an aerosol.",
     "🍫 **Chocolate contains theobromine.** Dogs can't metabolize it well — that's why chocolate is toxic to them.",
     "⚡ **Lightning is 5x hotter than the Sun's surface.** It reaches ~30,000°C, creating plasma and thunder shockwaves.",
     "🍇 **Grapes can spark in the microwave** due to electrolytes and microwave radiation creating plasma arcs.",
     "🦕 **Fossil fuels are ancient sunlight.** Oil, coal, and gas formed from plants that captured solar energy millions of years
 ago.",
     "🥚 **Egg whites turn white when cooked** due to protein denaturation — heat breaks bonds causing them to unfold and clump."
   ];

   function getDailyFact() {
     const today = new Date();
     const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
     const index = dayOfYear % chemistryFacts.length;
     return chemistryFacts[index];
   }

   function sendWhatsAppMessage(phone, apiKey, message) {
     const encodedMessage = encodeURIComponent(message);
     const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apiKey}`;

     return new Promise((resolve, reject) => {
       https.get(url, (res) => {
         let data = '';
         res.on('data', chunk => data += chunk);
         res.on('end', () => {
           if (res.statusCode === 200) {
             console.log('✅ Message sent successfully!');
             console.log('Response:', data);
             resolve(data);
           } else {
             console.error('❌ Failed to send message');
             console.error('Status:', res.statusCode);
             console.error('Response:', data);
             reject(new Error(`HTTP ${res.statusCode}: ${data}`));
           }
         });
       }).on('error', reject);
     });
   }

   async function main() {
     const apiKey = process.env.CALLMEBOT_API_KEY;
     const phone = process.env.WHATSAPP_NUMBER;

     if (!apiKey || !phone) {
       console.error('❌ Missing environment variables:');
       if (!apiKey) console.error('   - 8601024');
       if (!phone) console.error('   - 971508513968');
       process.exit(1);
     }

     const fact = getDailyFact();
     const message = `🧪 *Daily Chemistry Fact*\n\n${fact}\n\n_${new Date().toLocaleDateString('en-US ', { weekday: 'long', year:
 'numeric', month: 'long', day: 'numeric' })}_`;

     console.log('Sending chemistry fact...');
     console.log('Message:', message);

     try {
       await sendWhatsAppMessage(phone, apiKey, message);
     } catch (error) {
       console.error('Error:', error.message);
       process.exit(1);
     }
   }

   main();
 ```
