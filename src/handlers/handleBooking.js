export const handleBooking = async (bookingData, navigate) => {
  try {
    const response = await fetch("http://localhost:5000/bookride", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);

      navigate("/payment", {
        state: {
          ...bookingData,
          distance: "Calculating...",
          fare: 499,
        },
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Failed to connect to backend");
  }
};