 async function fetchAvailablePlaces() {
     const response = await fetch("http://localhost:3000/places");
     const data = await response.json();
     if (!response.ok) {
         throw new Error("Couldn't fetch places...");
     }
     return data["places"];
 }


 async function updateUserPlaces(places) {
     const response = await fetch("http://localhost:3000/user-places", {
         method: 'PUT',
         body: JSON.stringify({
             places: places
         }),
         headers: {
             'Content-Type': 'application/json'
         }
     });
     const data = await response.json();
     if (!response.ok) {
         throw new Error("Couldn't update user's places...");
     }
     return data["places"];

 }
 async function fetchUserPlaces() {
     const response = await fetch("http://localhost:3000/user-places");
     const data = await response.json();
     if (!response.ok) {
         throw new Error("Couldn't fetch user places...");
     }
     return data["places"];
 }


 export {
     fetchAvailablePlaces,
     updateUserPlaces,
     fetchUserPlaces
 }