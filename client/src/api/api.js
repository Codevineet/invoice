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
      const response = await fetch("http://localhost:3000/zapier", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        alert("Zapier automation triggered successfully!");
      } else {
        throw new Error("Failed to trigger Zapier automation.");
      }
    } catch (error) {
      console.error("Error triggering Zapier:", error);
      alert("Failed to trigger Zapier automation.");
    }
  };
