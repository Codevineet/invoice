export const logout = async () => {
  try {
    const response = await fetch("http://localhost:3000/logout", {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      window.location.href = "/";
    } else {
      throw new Error("Failed to logout.");
    }
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Failed to logout.");
  }
};

export const triggerZapier = async () => {
  try {
    // API call to trigger Zapier webhook
    const response = await fetch("http://localhost:3000/zapier/trigger", {
      method: "POST",
      credentials: "include", // Include cookies for authentication, if required
    });

    // Handle the response
    if (response.ok) {
      alert("Zapier automation triggered successfully!");
    } else {
      const errorData = await response.json();
      console.error("Error triggering Zapier:", errorData);
      alert("Failed to trigger Zapier automation.");
    }
  } catch (error) {
    console.error("Error triggering Zapier:", error);
    alert("Failed to trigger Zapier automation.");
  }
};
