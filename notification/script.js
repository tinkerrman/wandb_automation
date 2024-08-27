document.addEventListener('DOMContentLoaded', function () {
    const modelStatus = "production";
    const entityName = "wandb_Y72QKAKNEFI3G";
    const projectName = "wandb-registry-model";
    const artifactCollectionName = "ADAS handson models";
    const modelId = "wandb_Y72QKAKNEFI3G/wandb-registry-model/ADAS handson models:v0";

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
