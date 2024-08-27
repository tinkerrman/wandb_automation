document.addEventListener('DOMContentLoaded', function () {
    const modelStatus = "";
    const entityName = "";
    const projectName = "";
    const artifactCollectionName = "";
    const modelId = "";

    const statusElement = document.getElementById('status');
    const announcementElement = document.getElementById('announcement');

    statusElement.textContent = `Entity: ${entityName}, Project: ${projectName}`;
    announcementElement.textContent = `Model ID: ${modelId}, Alias: ${modelStatus}`;

    if (modelStatus === "production") {
        announcementElement.style.color = "green";
        announcementElement.textContent += " - The latest model has been deployed!";
    } else {
        announcementElement.style.color = "red";
        announcementElement.textContent += " - Model is not in production.";
    }
});
