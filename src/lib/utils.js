export const capitialize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function getTimeSinceLastUpdate(lastUpdateStr) {
  // Parse the ISO 8601 date string into a Date object.
  // The 'Z' at the end indicates UTC (Coordinated Universal Time).
  const lastUpdate = new Date(lastUpdateStr);

  // Get the current date and time.
  const now = new Date();

  // Calculate the time difference in milliseconds.
  const timeDiffMs = now.getTime() - lastUpdate.getTime();

  // If the date is in the future, return an appropriate message.
  if (timeDiffMs < 0) {
    return "Date is in the future.";
  }

  // Convert the time difference to various units.
  const seconds = Math.floor(timeDiffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  // Return the most appropriate human-readable string.
  if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}
