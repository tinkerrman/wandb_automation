document.addEventListener('DOMContentLoaded', function () {
    const modelStatus = "production";
    const entityName = "wandb_Y72QKAKNEFI3G";
    const projectName = "wandb-registry-model";
    const artifactCollectionName = "ADAS handson models";
    const modelId = "wandb-artifact://_id/QXJ0aWZhY3Q6MTE2NzI0MDkwMA==";

    const statusElement = document.getElementById('status');
    const announcementElement = document.getElementById('announcement');
    const modelInfoElement = document.getElementById('model-info');

    const infoHTML = `
        <h3>Model Details</h3>
        <p><strong>Entity:</strong> ${entityName}</p>
        <p><strong>Project:</strong> ${projectName}</p>
        <p><strong>Artifact Collection:</strong> ${artifactCollectionName}</p>
        <p><strong>Model ID:</strong> ${modelId}</p>
    `;
    modelInfoElement.innerHTML = infoHTML;

    if (modelStatus === "production") {
        announcementElement.style.color = "green";
        announcementElement.textContent = "🚀 The latest model has been deployed!";
        announcementElement.style.backgroundColor = "#d4edda";
        announcementElement.style.border = "1px solid #c3e6cb";
        announcementElement.style.padding = "10px";
        announcementElement.style.borderRadius = "5px";
    } else {
        announcementElement.style.color = "red";
        announcementElement.textContent = "⚠️ Model is not in production.";
        announcementElement.style.backgroundColor = "#f8d7da";
        announcementElement.style.border = "1px solid #f5c6cb";
        announcementElement.style.padding = "10px";
        announcementElement.style.borderRadius = "5px";
    }

    announcementElement.style.opacity = 0;
    announcementElement.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        announcementElement.style.opacity = 1;
    }, 100);
});