// Placeholder click handling for reserved nav targets.
// Keeps links semantic but avoids navigation to "#".
document.addEventListener("DOMContentLoaded", () => {
  const placeholders = document.querySelectorAll('a[aria-disabled="true"]');
  placeholders.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const label = link.dataset.placeholder || "Coming soon";
      console.info(`${label} — coming soon.`);
    });
  });
});