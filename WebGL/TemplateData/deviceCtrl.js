// gpuMap.js
const gpuPerformanceMap = new Map([
    ["Adreno (TM) 304", 1],
    ["Adreno (TM) 305", 1],
    ["Adreno (TM) 306", 1],
    ["Adreno (TM) 308", 1],
    ["Adreno (TM) 320", 1],
    ["Adreno (TM) 330", 1],
    ["Adreno (TM) 405", 1],
    ["Adreno (TM) 418", 1],
    ["Adreno (TM) 420", 1],
    ["Adreno (TM) 430", 1],
    ["Adreno (TM) 505", 1],
    ["Adreno (TM) 506", 1],
    ["Adreno (TM) 508", 1],
    ["Adreno (TM) 509", 1],
    ["Adreno (TM) 510", 1],
    ["Adreno (TM) 512", 1],
    ["Adreno (TM) 530", 2],
    ["Adreno (TM) 540", 2],
    ["Adreno (TM) 610", 2],
    ["Adreno (TM) 630", 3],
    ["Adreno (TM) 640", 3],
    ["Adreno (TM) 650", 3],
    ["Adreno (TM) 660", 3],
]);

function checkGpuPerformance(gpuName) {
    for (const [key, value] of gpuPerformanceMap.entries()) {
        if (key.includes(gpuName)) {
            return value;
        }
    }
    return 2;
}
