# HOMII 

### AI Conversational Home Service Booking System

**HOMII** is a modern, AI-powered conversational platform that enables users to **instantly book home services**—such as cleaning, plumbing, electrical work, and cooking—using **natural language chat** in English, Hindi, or Hinglish.

Instead of navigating complex mobile applications, users can simply **type a message** in a web chat interface or send a request via **Telegram**, and HOMII will:

* Understand the requested service
* Detect urgency and intent
* Automatically assign an available helper
* Generate a booking ID and ETA
* Provide **instant confirmation in seconds**

This project is designed as a **fully working 24-hour hackathon prototype**, built entirely with **100% free technologies**, while maintaining a **premium startup-grade user experience**.

---

##  Live Concept

> “No app installs.
> Just type a message and your home service is booked.”

HOMII removes friction from traditional booking systems and replaces it with a **fast, conversational AI experience** accessible to everyone—including non-technical and elderly users.

---

##  Key Features

*  **AI Conversational Booking**
  Natural language understanding in English, Hindi, and Hinglish.

*  **Instant Helper Assignment**
  Automatically matches service requests with available helpers and provides ETA.

*  **Multi-Platform Access**

  * Web chat interface
  * Telegram bot booking

*  **Booking Confirmation & History**
  Structured booking IDs, service details, and retrieval of past bookings.

*  **Premium Mobile-First UI**
  Startup-level responsive design with dark glassmorphism aesthetics.

*  **Completely Free Stack**
  Built using only free-tier infrastructure for true accessibility.

---

##  System Architecture

```
User (Web Chat / Telegram)
          ↓
   AI Intent Detection
          ↓
 Structured Booking Engine
          ↓
 Helper Assignment Logic
          ↓
      MongoDB Storage
          ↓
 Instant Confirmation Response
```

All conversational flows share a **single core booking engine** for consistency and speed.

---

##  Tech Stack

### Frontend

* **Next.js (App Router)**
* Tailwind CSS
* Framer Motion
* Deployed on **Vercel (Free Tier)**

### Backend

* **Node.js + Express.js**
* MongoDB Atlas (Free Tier)
* Gemini API (Free NLP intent detection)
* Telegram Bot API (Free forever)
* Deployed on **Render (Free Tier)**

---

##  Core Modules

* AI chat processing engine
* Helper assignment system
* Booking storage & retrieval APIs
* Telegram webhook integration
* Responsive conversational UI

---

##  Project Goal

To eliminate the complexity of traditional service-booking apps and enable **instant, chat-based home service access for everyone**, using **AI + free infrastructure + modern UX**.

---

##  Hackathon Context

HOMII was built as part of a **24-hour hackathon challenge** with strict constraints:

*  Rapid prototype within one day
*  **Zero paid services**
*  Real-world usability focus
*  Startup-grade design quality

The result is a **demo-ready, end-to-end conversational booking system**.

---

##  Future Scope

* Real helper location tracking (GPS)
* Payments & wallet integration
* Voice-based booking
* Multi-language regional expansion
* Production-scale AI intent engine

---

##  Contributing

This project is currently in **hackathon prototype stage**.
Ideas, improvements, and architectural suggestions are welcome.

---

##  License

MIT License — free to use, modify, and build upon.

---

##  Vision Statement

**HOMII aims to make home services as easy as sending a message.**
