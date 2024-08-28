document.addEventListener('DOMContentLoaded', function () {
    // 모델 정보 변수들 (실제로는 GitHub Actions에서 제공)
    const modelStatus = "service";
    const eventAuthor = "hyunwoo-oh";
    const artifactCollectionName = "ADAS handson models";
    const modelId = "wandb_Y72QKAKNEFI3G/wandb-registry-model/ADAS handson models:v5";

    // HTML 요소들 참조
    const statusElement = document.getElementById('status');
    const announcementElement = document.getElementById('announcement');
    const modelInfoElement = document.getElementById('model-info');

    // 상태 메시지 업데이트 함수
    function updateStatus() {
        // 모델 정보 표시
        const infoHTML = `
            <h3>Model Details</h3>
            <p><strong>Author:</strong> ${eventAuthor}</p>
            <p><strong>Artifact Collection:</strong> ${artifactCollectionName}</p>
            <p><strong>Model ID:</strong> ${modelId}</p>
        `;
        modelInfoElement.innerHTML = infoHTML;

        // 상태에 따라 메시지 스타일링
        if (modelStatus === "service") {
            announcementElement.style.color = "green";
            announcementElement.textContent = "🚀 The new model has been deployed!";
            announcementElement.style.backgroundColor = "#d4edda";
            announcementElement.style.border = "1px solid #c3e6cb";
            announcementElement.style.padding = "10px";
            announcementElement.style.borderRadius = "5px";
        } else {
            announcementElement.style.color = "red";
            announcementElement.textContent = "⚠️ Model is not in service.";
            announcementElement.style.backgroundColor = "#f8d7da";
            announcementElement.style.border = "1px solid #f5c6cb";
            announcementElement.style.padding = "10px";
            announcementElement.style.borderRadius = "5px";
        }

        // 애니메이션 효과 추가
        announcementElement.style.opacity = 0;
        announcementElement.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            announcementElement.style.opacity = 1;
        }, 100);
    }

    // 상태 메시지 업데이트 호출
    updateStatus();
});