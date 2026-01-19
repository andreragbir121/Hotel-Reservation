
---

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Use the interface to:
   - **Check-In**: Enter your name and select a room.
   - **Check-Out**: Enter your name to calculate cost and free the room.
   - **Booked Rooms**: View all current reservations.

---

## Room Types & Pricing

| Room Type  | Total Rooms | Price per Day |
|------------|-------------|---------------|
| Basic      | 12          | $800          |
| Deluxe     | 7           | $1200         |
| Penthouse  | 1           | $2000         |

---

## How It Works

- **Check-In Process**
  - User enters their name and selects a room.
  - System checks availability and books the room.
  - Room count decreases by 1.

- **Check-Out Process**
  - User enters their name.
  - System calculates the number of days stayed.
  - Total cost = Days stayed × Room price.
  - Room count increases by 1 after checkout.

- **Booked Rooms**
  - Displays all active bookings with details.

---

## Notes

- Minimum stay is **1 day** (even if checked in and out on the same day).
- Room availability updates dynamically.
- Alerts are used to confirm actions (booking success, checkout summary, etc.).

---

## Future Improvements

- Add persistent storage (localStorage or database).
- Implement user authentication.
- Enhance UI with modern design frameworks (Bootstrap, Tailwind).
- Add date selection for check-in and check-out.

---

## Demo

Simply open `index.html` in your browser to try out the system.

---

## Author

Developed as a lightweight hotel reservation simulation using front-end technologies.
