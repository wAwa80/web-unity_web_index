// ʹ�� fetch ���� JSON ����
let gameMap = new Map();

// ������Ϸ����
async function loadGameData(factoryId) {
    try {
        const response = await fetch(`./TemplateData/gameFactory${factoryId}Json.json`, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`game data load fail : ${response.status} ${response.statusText}`);
        }

        const gameData = await response.json();

        gameData.forEach(game => {
            gameMap.set(game.game_id, game);
        });

        console.log(`game data load success : ${gameData.length} length`);
        return true;
    } catch (error) {
        console.error('game data load fail message :', error);
        return false;
    }
}

// ��ʼ������
//loadGameData().then(success => {
//    if (success) {
//        console.log('game data json init over');
//    } else {
//        console.error('game data init fail��please check the json file');
//    }
//});

/**
 * ���� game_id ��ȡ��Ϸ��Ϣ
 * @param {string} gameId - ��ϷID
 * @returns {Object|null} ��Ϸ��Ϣ����δ�ҵ�ʱ����null
 */
function getGameInfo(gameId) {
    return gameMap.get(gameId) || null;
}

window.gameDataReady = loadGameData;
window.getGameInfo = getGameInfo;