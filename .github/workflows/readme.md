 ```markdown
   # Daily Chemistry Fact Bot 🧪

   A GitHub Actions-powered WhatsApp bot that sends daily chemistry facts.

   ## Setup Instructions

   ### 1. Get CallMeBot API Key

   1. Open WhatsApp
   2. Send a message to **+34 644 52 71 29** with: `I allow callmebot to send me messages`
   3. You'll receive an API key (6-digit number)
   4. Save this key!

   ### 2. Create GitHub Repository

   1. Go to github.com and create a new repository
   2. Name it `daily-chemistry-fact`
   3. Upload these 4 files

   ### 3. Configure Secrets

   In your GitHub repository:
   1. Go to **Settings** → **Secrets and variables** → **Actions**
   2. Click **New repository secret**
   3. Add two secrets:
      - `CALLMEBOT_API_KEY` → Your 6-digit API key
      - `WHATSAPP_NUMBER` → `971508513968` (no +)

   ### 4. Test it

   1. Go to **Actions** tab
   2. Click **Daily Chemistry Fact**
   3. Click **Run workflow** → **Run workflow**
   4. Check your WhatsApp!

   The workflow runs automatically every day at 9 AM Dubai time.
