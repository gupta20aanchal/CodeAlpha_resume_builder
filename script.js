const resumeForm = document.getElementById("resumeForm");
const resumePreview = document.getElementById("resumePreview");

resumeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(resumeForm);
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const summary = formData.get("summary");
  const achievements = formData.get("achievements");
  const qualifications = formData.get("qualifications");
  
  // You can add more variables for other resume sections like education, work experience, skills, etc.

  const resumePreviewHTML = `
    <h2>${fullName}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <h3>Summary</h3>
    <p>${summary}</p>
    <h3>Achievements</h3>
    <p>${achievements}</p>
    <h3>Qualifications</h3>
    <p>${qualifications}</p>
    <!-- Include other resume sections here based on form data -->
  `;

  resumePreview.innerHTML = resumePreviewHTML;
});
